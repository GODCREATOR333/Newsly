
#### Make sure to use local ollama values from .env ####

import os
import asyncio
import logging
logging.basicConfig(level=logging.DEBUG)
from gpt_researcher.llm_provider.generic import GenericLLMProvider
from gpt_researcher.utils.llm import get_llm
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


OLLAMA_BASE_URL = "http://localhost:11434/"
LLM_MODEL = "llama3.2"

# Create the GenericLLMProvider instance
llm_provider = get_llm(
    "ollama",
    model=LLM_MODEL,
    temperature=0.7,
    max_tokens=2000,
    verify_ssl=False  # Add this line
)

# Test the connection with a simple query
messages = [{"role": "user", "content": "sup?"}]

async def test_ollama():
    try:
        response = await llm_provider.get_chat_response(messages, stream=False)
        print("Ollama response:", response)
    except Exception as e:
        print(f"Error: {e}")

# Run the async function
asyncio.run(test_ollama())
    