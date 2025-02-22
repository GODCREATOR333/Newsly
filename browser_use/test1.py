from langchain_google_genai import ChatGoogleGenerativeAI
from browser_use import Agent
from pydantic import SecretStr
import asyncio
import os
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
# Initialize the model
llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(api_key))

async def main():
    agent = Agent(
        task="go this website(https://apnews.com/article/apple-low-cost-iphone-artificial-intelligence-1fc43f8b839d7995763fbe939f5de290) and extract the full content from the main article word by word and do not extract anyother irrelevant information.ONly print the content from the article",
        llm=llm,
        use_vision=False,
        save_conversation_path="logs/conversation.json",
    )
    result = await agent.run()
    print(result)

asyncio.run(main())
