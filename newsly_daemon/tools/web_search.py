from typing import Callable, Any
from pydantic import BaseModel, Field
import requests
from bs4 import BeautifulSoup
import concurrent.futures
from urllib.parse import urlparse
import re
import unicodedata
import json
import asyncio

class HelpFunctions:
    def get_base_url(self, url):
        parsed_url = urlparse(url)
        base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
        return base_url

    def generate_excerpt(self, content, max_length=200):
        return content[:max_length] + "..." if len(content) > max_length else content

    def format_text(self, original_text):
        soup = BeautifulSoup(original_text, "html.parser")
        formatted_text = soup.get_text(separator=" ", strip=True)
        formatted_text = unicodedata.normalize("NFKC", formatted_text)
        formatted_text = re.sub(r"\s+", " ", formatted_text)
        formatted_text = formatted_text.strip()
        formatted_text = self.remove_emojis(formatted_text)
        return formatted_text

    def remove_emojis(self, text):
        return "".join(c for c in text if not unicodedata.category(c).startswith("So"))

    def truncate_to_n_words(self, text, token_limit):
        tokens = text.split()
        truncated_tokens = tokens[:token_limit]
        return " ".join(truncated_tokens)

class Valves(BaseModel):
    SEARXNG_ENGINE_API_BASE_URL: str = Field(
        default="https://localhost:8080/search",
        description="The base URL for Search Engine",
    )
    IGNORED_WEBSITES: str = Field(
        default="",
        description="Comma-separated list of websites to ignore",
    )
    RETURNED_SCRAPPED_PAGES_NO: int = Field(
        default=3,
        description="The number of Search Engine Results to Parse",
    )
    SCRAPPED_PAGES_NO: int = Field(
        default=5,
        description="Total pages scapped. Ideally greater than one of the returned pages",
    )
    PAGE_CONTENT_WORDS_LIMIT: int = Field(
        default=5000,
        description="Limit words content for each page.",
    )
    CITATION_LINKS: bool = Field(
        default=False,
        description="If True, send custom citations with links",
    )

class WebSearchTool:
    def __init__(self):
        self.valves = Valves()
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        }
        self.help_functions = HelpFunctions()

    def web_search(self, query: str) -> str:
        """
        Search the web for information.
        """
        async def run_search():
            return await self._search_web(query)
        
        return asyncio.run(run_search())

    def get_website(self, url: str) -> str:
        """
        Get content from a specific website.
        """
        async def run_scrape():
            return await self._get_website(url)
        
        return asyncio.run(run_scrape())

    async def _search_web(self, query: str) -> str:
        search_engine_url = self.valves.SEARXNG_ENGINE_API_BASE_URL
        params = {
            "q": query,
            "format": "json",
            "number_of_results": self.valves.RETURNED_SCRAPPED_PAGES_NO,
        }

        try:
            resp = requests.get(
                search_engine_url, 
                params=params, 
                headers=self.headers, 
                timeout=120
            )
            resp.raise_for_status()
            data = resp.json()

            results = data.get("results", [])
            limited_results = results[: self.valves.SCRAPPED_PAGES_NO]

            results_json = []
            with concurrent.futures.ThreadPoolExecutor() as executor:
                futures = [
                    executor.submit(
                        self._process_search_result, result
                    )
                    for result in limited_results
                ]
                for future in concurrent.futures.as_completed(futures):
                    result_json = future.result()
                    if result_json:
                        results_json.append(result_json)
                    if len(results_json) >= self.valves.RETURNED_SCRAPPED_PAGES_NO:
                        break

            return json.dumps(results_json, ensure_ascii=False)

        except requests.exceptions.RequestException as e:
            return json.dumps({"error": str(e)})

    def _process_search_result(self, result):
        title_site = self.help_functions.remove_emojis(result["title"])
        url_site = result["url"]
        snippet = result.get("content", "")

        if self.valves.IGNORED_WEBSITES:
            base_url = self.help_functions.get_base_url(url_site)
            if any(
                ignored_site.strip() in base_url
                for ignored_site in self.valves.IGNORED_WEBSITES.split(",")
            ):
                return None

        try:
            response_site = requests.get(url_site, timeout=20)
            response_site.raise_for_status()
            html_content = response_site.text

            soup = BeautifulSoup(html_content, "html.parser")
            content_site = self.help_functions.format_text(soup.get_text(separator=" ", strip=True))

            truncated_content = self.help_functions.truncate_to_n_words(
                content_site, self.valves.PAGE_CONTENT_WORDS_LIMIT
            )

            return {
                "title": title_site,
                "url": url_site,
                "content": truncated_content,
                "snippet": self.help_functions.remove_emojis(snippet),
            }

        except requests.exceptions.RequestException:
            return None

    async def _get_website(self, url: str) -> str:
        results_json = []

        try:
            response_site = requests.get(url, headers=self.headers, timeout=120)
            response_site.raise_for_status()
            html_content = response_site.text

            soup = BeautifulSoup(html_content, "html.parser")

            page_title = soup.title.string if soup.title else "No title found"
            page_title = unicodedata.normalize("NFKC", page_title.strip())
            page_title = self.help_functions.remove_emojis(page_title)
            content_site = self.help_functions.format_text(
                soup.get_text(separator=" ", strip=True)
            )

            truncated_content = self.help_functions.truncate_to_n_words(
                content_site, self.valves.PAGE_CONTENT_WORDS_LIMIT
            )

            result_site = {
                "title": page_title,
                "url": url,
                "content": truncated_content,
                "excerpt": self.help_functions.generate_excerpt(content_site),
            }

            results_json.append(result_site)

        except requests.exceptions.RequestException as e:
            results_json.append({
                "url": url,
                "content": f"Failed to retrieve the page. Error: {str(e)}",
            })

        return json.dumps(results_json, ensure_ascii=False)

# Make sure the class is properly exported
__all__ = ['WebSearchTool']