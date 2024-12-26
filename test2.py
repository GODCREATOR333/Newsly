import json
from scrapegraphai.graphs import SmartScraperGraph
from ollama import Client

def process_in_chunks(scraper, text, chunk_size=1024):
    chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
    results = []
    
    for chunk in chunks:
        try:
            # Process each chunk using the scraper
            chunk_result = scraper.process_text(chunk)  # Using process_text instead of process_chunk
            if chunk_result:
                results.extend(chunk_result)
        except Exception as e:
            print(f"Error processing chunk: {str(e)}")
            continue
    
    return results

# Configure Ollama client
ollama_client = Client(host='http://localhost:11434')

# Define the configuration for the scraping pipeline
graph_config = {
    "llm": {
        "model": "ollama/llama3.2",
        "temperature": 0.0,
        "format": "json",
        "model_tokens": 8192,
        "base_url": "http://localhost:11434",
    },
    "embeddings": {
        "model": "nomic-embed-text",
    },
    "scraping": {
        "max_depth": 2,
        "max_pages": 10,
        "batch_size": 5,
        "timeout": 30,  # Added timeout
        "headers": {    # Added headers to avoid blocking
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
    }
}

try:
    # Create the SmartScraperGraph instance
    smart_scraper_graph = SmartScraperGraph(
        prompt="Extract me all the news from the website along with headlines, including article text and publication date",
        source="https://www.hindustantimes.com/",
        config=graph_config
    )

    # Run the pipeline with error handling
    try:
        result = smart_scraper_graph.run()
        if result:
            print(json.dumps(result, indent=4))
            
            # Save results to a file
            with open('scraping_results.json', 'w') as f:
                json.dump(result, f, indent=4)
                
    except Exception as e:
        print(f"Error during scraping: {str(e)}")
        
except Exception as e:
    print(f"Error initializing scraper: {str(e)}")