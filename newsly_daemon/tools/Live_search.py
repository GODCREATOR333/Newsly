"""
title: Live Search
author: open-webui, atgehrhardt
author_url: https://github.com/atgehrhardt
funding_url: https://github.com/open-webui
version: 1.0.4
required_open_webui_version: 0.3.30

v1.0.4 updates by G:30b, huge thanks!
"""

from typing import List, Union, Generator, Iterator
from pydantic import BaseModel, Field
import requests
from bs4 import BeautifulSoup
import urllib.parse


class Pipe:
    class Valves(BaseModel):
        searxng_url: str = Field(default="http://searxng:8080")
        enable_duckduckgo: bool = Field(default=True)
        duckduckgo_results: int = Field(default=5)

        enable_searxng: bool = Field(default=True)
        searxng_results: int = Field(default=5)

        enable_google: bool = Field(default=True)
        google_results: int = Field(default=5)

    def __init__(self):
        self.type = "manifold"
        self.id = "engine_search"
        self.name = "engines/"
        self.valves = self.Valves()

    def pipes(self) -> List[dict]:
        enabled_pipes = []
        if self.valves.enable_duckduckgo:
            enabled_pipes.append({"id": "duckduckgo", "name": "DuckDuckGo Search"})
        if self.valves.enable_searxng:
            enabled_pipes.append({"id": "searxng", "name": "SearXNG Search"})
        if self.valves.enable_google:
            enabled_pipes.append({"id": "google", "name": "Google Search"})
        return enabled_pipes

    def pipe(self, body: dict, results=None) -> Union[str, Generator, Iterator]:
        user_input = self._extract_user_input(body)
        if not user_input:
            return "No search query provided"
    
        model = body.get("model", "")
        print(f"Received model: {model}")  # Debug print
    
        if isinstance(results, str):
            try:
                results = int(results)
            except ValueError:
                return f"Invalid number of results '{results}'"
    
        if "duckduckgo" in model.lower() and self.valves.enable_duckduckgo:
            print("Calling DuckDuckGo search")
            return self._search_duckduckgo(user_input, results)
        elif "searxng" in model.lower() and self.valves.enable_searxng:
            print("Calling SearXNG search")
            return self._search_searxng(user_input, results)
        elif "google" in model.lower() and self.valves.enable_google:
            print("Calling Google search")
            return self._search_google(user_input, results)
        else:
            return f"Unsupported or disabled search engine for model: {model}"

    def _extract_user_input(self, body: dict) -> str:
        messages = body.get("messages", [])
        if messages:
            last_message = messages[-1]
            if isinstance(last_message.get("content"), list):
                for item in last_message["content"]:
                    if item["type"] == "text":
                        return item["text"]
            else:
                return last_message.get("content", "")
        return ""

    def _search_duckduckgo(self, query: str, results=None) -> str:
        if not self.valves.enable_duckduckgo:
            return "DuckDuckGo search is disabled"
        print("Searching with DuckDuckGo")
        try:
            url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()
    
            soup = BeautifulSoup(response.text, "html.parser")
            results_list = soup.find_all("div", class_="result__body")
    
            if not results_list:
                return f"No results found for: {query}"
    
            formatted_results = "DuckDuckGo Search Results:\n\n"
            for i, result in enumerate(results_list[:results if results else self.valves.duckduckgo_results], 1):
                title = result.find("a", class_="result__a").text
                snippet = result.find("a", class_="result__snippet").text
                link = result.find("a", class_="result__a")["href"]
                formatted_results += f"{i}. {title}\n   {snippet}\n   URL: {link}\n\n"
    
            return formatted_results
    
        except Exception as e:
            return f"An error occurred while searching DuckDuckGo: {str(e)}"

    def _search_searxng(self, query: str, results=None) -> str:
        if not self.valves.enable_searxng:
            return "SearXNG search is disabled"
        print("Searching with SearXNG")
        try:
            searxng_url = f"{self.valves.searxng_url}/search"
            params = {"q": query, "format": "json"}
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
            }
            response = requests.get(searxng_url, params=params, headers=headers)
            response.raise_for_status()
    
            search_results = response.json()
    
            if not search_results.get("results"):
                return f"No results found for: {query}"
    
            formatted_results = f"SearXNG Search Results:\n\n"
            for i, result in enumerate(search_results["results"][:results if results else self.valves.searxng_results], 1):
                title = result.get("title", "No title")
                snippet = result.get("content", "No snippet available")
                link = result.get("url", "No URL available")
                formatted_results += f"{i}. {title}\n   {snippet}\n   URL: {link}\n\n"
    
            return formatted_results
    
        except Exception as e:
            return f"An error occurred while searching SearXNG: {str(e)}"

    def _search_google(self, query: str, results=None) -> str:
        if not self.valves.enable_google:
            return "Google search is disabled"
        print(f"Searching Google for: {query}")
        try:
            url = f"https://www.google.com/search?q={urllib.parse.quote(query)}"
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()
    
            soup = BeautifulSoup(response.text, "html.parser")
    
            # Try different class names for search results
            results_list = (
                soup.find_all("div", class_="g")
                or soup.find_all("div", class_="yuRUbf")
                or soup.find_all("div", class_="rc")
            )
    
            if not results_list:
                print("No results found. HTML content:")
                print(soup.prettify()[:1000])  # Print first 1000 characters of the HTML
                return f"No results found for: {query}"
    
            formatted_results = f"Google Search Results for '{query}':\n\n"
            for i, result in enumerate(results_list[:results if results else self.valves.google_results], 1):
                title_elem = result.find("h3")
                snippet_elem = result.find("div", class_="VwiC3b") or result.find(
                    "div", class_="s"
                )
                link_elem = result.find("a")
    
                if title_elem and link_elem:
                    title = title_elem.text
                    link = link_elem["href"]
                    snippet = (
                        snippet_elem.text if snippet_elem else "No snippet available"
                    )
                    formatted_results += f"{i}. {title}\n   {snippet}\n   URL: {link}\n\n"
                else:
                    print(f"Incomplete result {i}:")
                    print(result.prettify())
    
            return formatted_results
    
        except Exception as e:
            print(f"An error occurred while searching Google: {str(e)}")
            return f"An error occurred while searching Google: {str(e)}"