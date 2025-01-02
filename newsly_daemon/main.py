import os
from typing import Annotated, Literal
from autogen import ConversableAgent
from tools.calculator import calculator
from tools.web_search import WebSearchTool

# Initialize tools
web_search_tool = WebSearchTool()

# Create wrapper functions for the web search methods
def web_search_wrapper(query: str) -> str:
    """Search the web for information."""
    return web_search_tool.web_search(query)

def get_website_wrapper(url: str) -> str:
    """Get content from a specific website."""
    return web_search_tool.get_website(url)

# LLM configuration
llm_config = {
    "config_list": [
        {
            "model": "gemini-1.5-flash",
            "api_base": "https://generativelanguage.googleapis.com",
            "api_type": "google",
            "api_key": os.getenv('GEMINI_API_KEY')
        }
    ],
    "request_timeout": 600,
    "seed": 42,
    "functions": [
        {
            "name": "calculator",
            "description": "A simple calculator for basic arithmetic operations",
            "parameters": {
                "type": "object",
                "properties": {
                    "a": {"type": "integer"},
                    "b": {"type": "integer"},
                    "operator": {"type": "string", "enum": ["+", "-", "*", "/"]}
                },
                "required": ["a", "b", "operator"]
            }
        },
        {
            "name": "web_search",
            "description": "Search the web for information",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"}
                },
                "required": ["query"]
            }
        },
        {
            "name": "get_website",
            "description": "Get content from a specific website",
            "parameters": {
                "type": "object",
                "properties": {
                    "url": {"type": "string"}
                },
                "required": ["url"]
            }
        }
    ]
}

# Assistant agent with enhanced capabilities
assistant = ConversableAgent(
    name="Assistant",
    system_message="""You are a helpful AI assistant with access to several tools:
    1. Calculator: For performing basic arithmetic operations
    2. Web Search: For finding current information online
    3. Website Content: For scraping specific webpages
    
    Use these tools appropriately based on the user's needs.
    For calculations, use the calculator tool.
    For current information or research, use the web search tool.
    For specific website content, use the website content tool.
    
    When you need more specific information, ask clear follow-up questions.
    Only return 'TERMINATE' when the task is completely resolved.""",
    llm_config=llm_config,
    max_consecutive_auto_reply=10,
    function_map={
        "calculator": calculator,
        "web_search": web_search_wrapper,
        "get_website": get_website_wrapper
    }
)

# Enhanced User Proxy agent
user_proxy = ConversableAgent(
    name="User",
    system_message="""You are an intelligent user proxy that can:
    1. Execute calculator operations
    2. Perform web searches
    3. Fetch website content
    4. Handle follow-up questions from the assistant
    
    When the assistant asks for clarification:
    1. Use the web_search tool to find relevant information
    2. Provide detailed responses based on search results
    3. Keep the conversation going until the task is complete
    
    For website requests:
    1. Always try to fetch the content using get_website
    2. If successful, summarize the key information
    3. If unsuccessful, use web_search to find alternative sources
    
    Only accept 'TERMINATE' when the task is fully resolved.""",
    llm_config=llm_config,  # Give the user_proxy access to LLM for intelligent responses
    is_termination_msg=lambda msg: msg.get("content") and "TERMINATE" in msg["content"],
    human_input_mode="NEVER",
    function_map={
        "calculator": calculator,
        "web_search": web_search_wrapper,
        "get_website": get_website_wrapper
    }
)

def run_chat(query: str):
    chat_result = user_proxy.initiate_chat(
        assistant,
        message=query
    )
    return chat_result

if __name__ == "__main__":
    # Test queries
    print("\nWeb Search Query Result:")
    print(run_chat("What is the score of India vs Australia Test match 2024?"))
    
    print("\nWebsite Content Query Result:")
    print(run_chat("Get the content from https://bbc.com"))