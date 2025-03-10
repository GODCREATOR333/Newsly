from gpt_researcher import GPTResearcher
import asyncio
from gpt_researcher.config.config import Config
from gpt_researcher.utils.llm import create_chat_completion
import asyncio
from dotenv import load_dotenv
load_dotenv()

async def main():
    cfg = Config()

    try:
        report = await create_chat_completion(
            model=cfg.smart_llm_model,
            messages = [{"role": "user", "content": "sup?"}],
            temperature=0.35,
            llm_provider=cfg.smart_llm_provider,
            stream=True,
            max_tokens=cfg.smart_token_limit,
            llm_kwargs=cfg.llm_kwargs
        )
    except Exception as e:
        print(f"Error in calling LLM: {e}")

async def fetch_report(query):
    """
    Fetch a research report based on the provided query and report type.
    """
    researcher = GPTResearcher(query=query)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report

async def generate_research_report(query):
    """
    This is a sample script that executes an async main function to run a research report.
    """
    report = await fetch_report(query)
    print(report)

if __name__ == "__main__":
    QUERY = "Apple unveils a souped-up and more expensive version of its lowest priced iPhone. Link{https:/apnews.com/article/apple-low-cost-iphone-artificial-intelligence-1fc43f8b839d7995763fbe939f5de290}"
    asyncio.run(generate_research_report(query=QUERY))

# Run the async function
asyncio.run(main())
