# main.py
import asyncio
from crawler import crawl_websites
from check_valid_results import check_valid_links_in_results

async def main():
    # Define the URLs to crawl
    urls = [
        "https://apnews.com/technology",
        "https://news.ycombinator.com/"
    ]

    # Call the crawl_websites function
    await crawl_websites(urls)

    # Check and clean the JSON files for invalid links
    await check_valid_links_in_results()

if __name__ == "__main__":
    asyncio.run(main())