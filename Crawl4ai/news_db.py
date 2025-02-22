# news_db.py
import json
from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient("mongodb://localhost:27017/")

# Define the databases and collections
apnews_db = client["APNews_Data"]  # Separate database for AP News
ycnews_db = client["YC_Data"]      # Separate database for YC News

# Both databases share the same collection name 'Posts'
apnews_collection = apnews_db["Posts"]
ycnews_collection = ycnews_db["Posts"]

# For auto-incrementing IDs
counters_collection = client["NewsDB_connection"]["counters"]

# Function to get the next auto-incrementing ID for a specific collection
def get_next_id(database_name: str) -> int:
    counter = counters_collection.find_one_and_update(
        {"_id": database_name},
        {"$inc": {"seq": 1}},
        upsert=True,
        return_document=True
    )
    return counter["seq"]

# Function to update the database with data from JSON files
async def update_db():
    # Define the JSON files and their corresponding MongoDB collections
    json_files = [
        ("results/apnews.json", apnews_collection, "APNews_Data"),
        ("results/ycnews.json", ycnews_collection, "YC_Data")
    ]

    for file_path, collection, db_name in json_files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                for item in data:
                    document = {
                        "id": get_next_id(db_name),  # Auto-incrementing ID
                        "title": item.get("title", ""),
                        "link": item.get("link", ""),
                        "date": None,    # Placeholder for future updates
                        "author": None,  # Placeholder for future updates
                        "sources": None, # Placeholder for future updates
                        "Content":None,# Placeholder for future updates
                    }
                    # Upsert the document into the collection
                    collection.update_one(
                        {"link": document["link"]},
                        {"$set": document},
                        upsert=True
                    )
            print(f"Data from {file_path} inserted into {db_name}.Posts collection.")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
