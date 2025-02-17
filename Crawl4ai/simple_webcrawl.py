import asyncio
from crawl4ai import AsyncWebCrawler, CrawlerRunConfig
from crawl4ai.content_filter_strategy import PruningContentFilter
from crawl4ai.markdown_generation_strategy import DefaultMarkdownGenerator

async def main():
    # Step 1: Create a pruning filter
    prune_filter = PruningContentFilter(
        # Lower → more content retained, higher → more content pruned
        threshold=0.45,           
        # "fixed" or "dynamic"
        threshold_type="dynamic",  
        # Ignore nodes with <5 words
        min_word_threshold=5      
    )

    # Step 2: Insert it into a Markdown Generator
    md_generator = DefaultMarkdownGenerator(content_filter=prune_filter)

    # Step 3: Pass it to CrawlerRunConfig
    config = CrawlerRunConfig(
        markdown_generator=md_generator
    )

    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(
            url="https://news.ycombinator.com", 
            config=config
        )

        if result.success:
            # Extract raw and fit markdown
            raw_markdown = result.markdown_v2.raw_markdown
            fit_markdown = result.markdown_v2.fit_markdown

            # Write both markdowns to a text file
            with open("output_markdown.txt", "w") as file:
                file.write("Raw Markdown:\n")
                file.write(raw_markdown)
                file.write("\n\nFit Markdown:\n")
                file.write(fit_markdown)

            print("Markdown written to output_markdown.txt")
            print("Raw Markdown length:", len(raw_markdown))
            print("Fit Markdown length:", len(fit_markdown))
        else:
            print("Error:", result.error_message)

        
if __name__ == "__main__":
    asyncio.run(main())
