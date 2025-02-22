from pymongo import MongoClient
from scrapegraphai.graphs import SmartScraperGraph
import json
import time
import asyncio
from typing import Optional, Dict, Any

class ContentScraper:
    def __init__(self, mongo_uri: str = "mongodb://localhost:27017/"):
        # MongoDB setup
        self.client = MongoClient(mongo_uri)
        self.apnews_collection = self.client["APNews_Data"]["Posts"]
        
        # Scraper configuration
        self.graph_config = {
            "llm": {
                "api_key": "",
                "model": "gemini-pro",
                "providers": "google_genai",
                "format": "json",
            },
        }

    def fix_url(self, url: str) -> str:
        """Fix URL format by ensuring double slash after protocol."""
        if "://" not in url and ":" in url:
            protocol, rest = url.split(":", 1)
            return f"{protocol}://{rest.lstrip('/')}"
        return url

    async def scrape_content(self, url: str) -> Optional[Dict[str, Any]]:
        """Scrape content from a given URL using SmartScraperGraph."""
        try:
            fixed_url = self.fix_url(url)
            print(f"\nOriginal URL: {url}")
            print(f"Fixed URL: {fixed_url}")
            
            scraper = SmartScraperGraph(
                prompt="Extract the complete content from the main article directly",
                source=fixed_url,
                config=self.graph_config
            )
            # Create a new event loop for the scraper
            loop = asyncio.get_event_loop()
            result = await loop.run_in_executor(None, scraper.run)
            return result
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            return None

    async def update_document_content(self, document: Dict[str, Any]) -> None:
        """Update a document with scraped content."""
        try:
            url = document.get("link")
            if not url:
                print(f"No URL found for document ID: {document.get('id')}")
                return

            content = await self.scrape_content(url)
            
            if content:
                # Update the document with the scraped content
                self.apnews_collection.update_one(
                    {"_id": document["_id"]},
                    {"$set": {"content": content}}
                )
                print(f"Successfully updated content for document ID: {document['id']}")
            else:
                print(f"No content retrieved for document ID: {document['id']}")
            
            # Add a small delay to avoid overwhelming the API
            await asyncio.sleep(2)
            
        except Exception as e:
            print(f"Error updating document {document.get('id')}: {e}")

    async def process_test_documents(self) -> None:
        """Process first 3 documents from APNews collection."""
        try:
            print("Starting test scraping process for first 3 APNews documents...")
            
            # Get first 3 documents that don't have content
            cursor = self.apnews_collection.find(
                {"content": {"$exists": False}}
            ).limit(3)
            
            documents = list(cursor)
            if not documents:
                print("No documents found without content!")
                return
                
            print(f"Found {len(documents)} documents to process")
            
            for document in documents:
                print(f"\nProcessing document ID: {document.get('id')}")
                print(f"Title: {document.get('title')}")
                await self.update_document_content(document)
                
        except Exception as e:
            print(f"Error in test scraping process: {e}")

    async def run_test(self) -> None:
        """Run the content scraper test on first 3 documents."""
        try:
            await self.process_test_documents()
            print("\nTest scraping process completed!")
        except Exception as e:
            print(f"Error in test scraping process: {e}")
        finally:
            self.client.close()

def main():
    # Create new event loop
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    # Run the scraper
    scraper = ContentScraper()
    loop.run_until_complete(scraper.run_test())
    loop.close()

if __name__ == "__main__":
    main()