# crawler.py
import asyncio
import json
from crawl4ai import AsyncWebCrawler, CrawlerRunConfig
from crawl4ai.content_filter_strategy import PruningContentFilter
from crawl4ai.markdown_generation_strategy import DefaultMarkdownGenerator
from crawl4ai.async_configs import BrowserConfig, CacheMode
from crawl4ai.async_dispatcher import MemoryAdaptiveDispatcher
from crawl4ai import CrawlerMonitor, DisplayMode
from pathlib import Path

RESULTS_DIR = "./results"
Path(RESULTS_DIR).mkdir(exist_ok=True)  # Create the results directory if it doesn't exist


def parse_markdown_to_json(markdown_content):
    """
    Parses markdown content and extracts titles and links.
    Returns a list of dictionaries with 'title' and 'link' keys.
    """
    entries = []
    for line in markdown_content.splitlines():
        # Handle both formats:
        # 1. ### [Title](Link)
        # 2. | [Title](Link)
        # 3. [Title](Link)
        if line.startswith("### ") or line.startswith("| [") or line.startswith("["):
            # Extract title and link
            if line.startswith("### "):
                # Format: ### [Title](Link)
                title_start = line.find("[") + 1
                title_end = line.find("]")
                link_start = line.find("(") + 1
                link_end = line.find(")")
            elif line.startswith("| ["):
                # Format: | [Title](Link)
                title_start = line.find("[") + 1
                title_end = line.find("]")
                link_start = line.find("(") + 1
                link_end = line.find(")")
            else:
                # Format: [Title](Link)
                title_start = line.find("[") + 1
                title_end = line.find("]")
                link_start = line.find("(") + 1
                link_end = line.find(")")

            if title_start != -1 and title_end != -1 and link_start != -1 and link_end != -1:
                title = line[title_start:title_end]
                link = line[link_start:link_end]

                # Clean up the link by removing the wrapper (e.g., https://news.ycombinator.com/<...>)
                if "<http" in link:
                    # Extract the inner link
                    inner_link_start = link.find("<http") + 1
                    inner_link_end = link.find(">")
                    if inner_link_start != -1 and inner_link_end != -1:
                        link = link[inner_link_start:inner_link_end]

                entries.append({"title": title, "link": link})
    return entries

async def crawl_websites(urls):
    """
    Crawls the given URLs and saves the results into JSON files.
    """
    # Step 1: Create a pruning filter
    prune_filter = PruningContentFilter(
        threshold=0.45,  # Lower → more content retained, higher → more content pruned
        threshold_type="dynamic",  # "fixed" or "dynamic"
        min_word_threshold=5  # Ignore nodes with <5 words
    )

    # Step 2: Insert it into a Markdown Generator
    md_generator = DefaultMarkdownGenerator(content_filter=prune_filter)

    # Step 3: Pass it to CrawlerRunConfig
    run_config = CrawlerRunConfig(
        markdown_generator=md_generator,
        cache_mode=CacheMode.BYPASS,
        stream=False  # Default: get all results at once
    )

    browser_config = BrowserConfig(headless=True, verbose=False)

    dispatcher = MemoryAdaptiveDispatcher(
        memory_threshold_percent=70.0,
        check_interval=1.0,
        max_session_permit=10,
        monitor=CrawlerMonitor(display_mode=DisplayMode.DETAILED)
    )

    async with AsyncWebCrawler(config=browser_config) as crawler:   
        # Get all results at once
        results = await crawler.arun_many(
            urls=urls,
            config=run_config,
            dispatcher=dispatcher
        )

        # Process all results after completion
        for result in results:
            if result.success:
                json_data = parse_markdown_to_json(result.markdown_v2.fit_markdown)
                if "apnews.com" in result.url:
                    filename = f"{RESULTS_DIR}/apnews.json"
                elif "ycombinator.com" in result.url:
                    filename = f"{RESULTS_DIR}/ycnews.json"
                else:
                    filename = f"{RESULTS_DIR}/unknown.json"

                with open(filename, "w", encoding="utf-8") as file:
                    json.dump(json_data, file, indent=4)
                print(f"Results written to {filename}")
            else:
                print(f"Failed to crawl {result.url}: {result.error_message}")

