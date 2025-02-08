from langchain_google_genai import ChatGoogleGenerativeAI
from browser_use import Agent
from pydantic import SecretStr
import asyncio
import os
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
print(api_key)
# Initialize the model
llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(api_key))

async def main():
    agent = Agent(
        task="Visit this website (https://www.moneycontrol.com/personal-finance/),copy all the headlines realted to finance,format them in a list with description and print them ",
        llm=llm,
        use_vision=False,
        save_conversation_path="logs/conversation.json",
    )
    result = await agent.run()
    print(result)

asyncio.run(main())