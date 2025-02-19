import asyncio
import json
import aiohttp
from pathlib import Path
from urllib.parse import urlparse

# Directory to store results
RESULTS_DIR = "./results"

async def check_valid_link(url):
    """
    Checks if a link is valid by making an HTTP request.
    Returns True if the link appears to be a valid URL format.
    """
    try:
        # First check if the URL is properly formatted
        parsed = urlparse(url)
        if not parsed.scheme or not parsed.netloc:
            # Fix common URL formatting issues
            if url.startswith('https:/'):
                url = 'https://' + url.split('https:/')[1]
            elif url.startswith('http:/'):
                url = 'http://' + url.split('http:/')[1]
            else:
                return False

        async with aiohttp.ClientSession() as session:
            # Set appropriate headers and timeout
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            async with session.get(url, headers=headers, timeout=10) as response:
                # Consider both 200 and other successful status codes
                return 200 <= response.status < 400
                
    except asyncio.TimeoutError:
        print(f"Timeout checking link {url} - considering as valid")
        return True  # Consider timeout links as valid
    except Exception as e:
        print(f"Error checking link {url}: {e}")
        return True  # If we can't verify, assume it's valid

async def check_and_clean_json(file_path):
    """
    Checks all links in a JSON file and removes invalid ones.
    """
    try:
        # Load the JSON file
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
            # Handle trailing commas and formatting issues
            content = content.strip().rstrip(',')
            if not content.endswith(']'):
                content += ']'
            if not content.startswith('['):
                content = '[' + content
            
            try:
                data = json.loads(content)
            except json.JSONDecodeError as e:
                print(f"JSON decode error in {file_path}: {e}")
                # Try to fix common JSON formatting issues
                content = content.replace('}{', '},{')
                data = json.loads(content)

        # Check each link and filter out invalid ones
        valid_entries = []
        for entry in data:
            if isinstance(entry, dict) and 'link' in entry and 'title' in entry:
                if await check_valid_link(entry["link"]):
                    valid_entries.append(entry)
                else:
                    print(f"Removing invalid link: {entry['link']}")

        # Save the cleaned data back to the JSON file
        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(valid_entries, file, indent=4)
        print(f"Cleaned {file_path}. Valid entries: {len(valid_entries)}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

async def check_valid_links_in_results():
    """
    Checks all JSON files in the results directory for invalid links and cleans them.
    """
    json_files = [
        f"{RESULTS_DIR}/apnews.json",
        f"{RESULTS_DIR}/ycnews.json"
    ]
    
    # Check and clean each JSON file
    for file_path in json_files:
        if Path(file_path).exists():
            await check_and_clean_json(file_path)
        else:
            print(f"File {file_path} does not exist.")

if __name__ == "__main__":
    asyncio.run(check_valid_links_in_results())