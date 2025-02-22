from scrapegraphai.graphs import SmartScraperGraph
from google import genai
import json 
GOOGLE_APIKEY = "AIzaSyCvBIIDBFzZ1X2gBGFNQj0FTm4nZgXMF90"

# Define the configuration for the graph
graph_config = {
    "llm": {
        "api_key": GOOGLE_APIKEY,
        "model": "gemini-pro",
        "providers":"google_genai",
        "format":"json",
    },
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(
    prompt="Extract the complete content from the main article directly ",
    source="https://apnews.com/article/apple-low-cost-iphone-artificial-intelligence-1fc43f8b839d7995763fbe939f5de290",
    config=graph_config
)

result = smart_scraper_graph.run()

# Convert the 'result' dictionary to a string
result_str = json.dumps(result, indent=2)  # Pretty print with indentation
print(result_str)

