from gpt_researcher import GPTResearcher
import asyncio

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
    QUERY = "What happened in the latest burning man floods?"
    asyncio.run(generate_research_report(query=QUERY))