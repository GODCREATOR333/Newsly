from gpt_researcher import GPTResearcher
import asyncio
from gpt_researcher.config.config import Config
from gpt_researcher.utils.llm import create_chat_completion
from dotenv import load_dotenv
load_dotenv()
import os

async def main():
    cfg = Config()

async def fetch_report(query):
    """
    Fetch a research report based on the provided query.
    """
    researcher = GPTResearcher(query=query)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report

async def generate_research_report(query):
    """
    Generate a research report and save it to report.txt.
    """
    report = await fetch_report(query)
    
    # Save report to a text file
    with open("report.txt", "w", encoding="utf-8") as file:
        file.write(report)
    
    print("Research report saved to report.txt")

if __name__ == "__main__":
    QUERY = " International Champions trophy cricket finals 2025. Match highlights and winner. Who is the man of the match in ind vs nz ict finals"
    
    asyncio.run(generate_research_report(query=QUERY))
    
    # Run the async function
    asyncio.run(main())
