import asyncio
from crawl4ai import *
import os 

async def main():
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(
            url="https://www.nbcnews.com/business",
        )
        with open("output.txt", "w", encoding="utf-8") as file:
            file.write(result.markdown)

        print("Data saved to output.txt")
        

if __name__ == "__main__":
    asyncio.run(main())


