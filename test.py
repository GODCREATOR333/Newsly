import json
from scrapegraphai.graphs import SmartScraperGraph
from ollama import Client




# Configure Gemini API

ollama_client = Client(host='http://localhost:11434')
# Define the configuration for the scraping pipeline
graph_config = {
    "llm": {
        "model": "ollama/llama3.2",
        "temperature": 0.0,
        "format": "json",
        "model_tokens": 4096,
        "base_url": "http://localhost:11434",
    },
    "embeddings": {
        "model": "nomic-embed-text",
    },
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(
    prompt="Extract me all the news from the website along with headlines",
    source="https://www.hindustantimes.com/",
    config=graph_config
)

# Run the pipeline
result = smart_scraper_graph.run()
print(json.dumps(result, indent=4))