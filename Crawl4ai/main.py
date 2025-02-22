# main.py
import asyncio
from crawler import crawl_websites
from check_valid_results import check_valid_links_in_results
from news_db import update_db  # Import the update_db function
# from content_scrape import update_content

async def main():
    # Define the URLs to crawl
    urls = [
        "https://apnews.com/technology",
        "https://news.ycombinator.com/"
    ]

    # Execute the web crawling and validation tasks
    await crawl_websites(urls)
    await check_valid_links_in_results()

    # Update the MongoDB with valid data
    await update_db()

    # Scraping and updating each article from db
    # await update_content()

if __name__ == "__main__":
    asyncio.run(main())