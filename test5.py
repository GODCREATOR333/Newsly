import requests
import jwt
from datetime import datetime as date

# Admin API key
key = '677357fd6fdb05d2a4552f5c:940e0b8fd264043422a9612de7176e26a41e7b06defc78ce712c61a2aa4fc4eb'

# Split the key into ID and SECRET
id, secret = key.split(':')

# Prepare header and payload
iat = int(date.now().timestamp())

header = {'alg': 'HS256', 'typ': 'JWT', 'kid': id}
payload = {
    'iat': iat,
    'exp': iat + 5 * 60,
    'aud': '/admin/'
}

# Create the token (including decoding secret)
token = jwt.encode(payload, bytes.fromhex(secret), algorithm='HS256', headers=header)

# Prepare the API endpoint and headers
url = 'http://localhost:2368/ghost/api/admin/posts/'
headers = {'Authorization': 'Ghost {}'.format(token)}

# Data for the posts
posts_data = [
    {
        "title": "Exploring the Enchanted Forests of New Zealand",
        "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"New Zealand is home to some of the most stunning and magical forests in the world. From towering trees to lush ferns, these enchanted forests will leave you feeling like you’ve stepped into a fairy tale.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
        "status": "published",
        "feature_image": "https://www.example.com/images/forest-new-zealand.jpg"
    },
    {
        "title": "Unveiling the Mysteries of the Sahara Desert",
        "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"The Sahara Desert is more than just endless dunes. It’s a land of ancient secrets and breathtaking landscapes, where the sand stretches as far as the eye can see and hidden oases offer a refreshing escape.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
        "status": "published",
        "feature_image": "https://www.example.com/images/sahara-desert.jpg"
    },
    {
        "title": "Top 10 Hidden Beaches Around the World",
        "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"From secluded coves to remote coastal paradises, discover the world’s most hidden and untouched beaches, perfect for anyone seeking peace and solitude by the ocean.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
        "status": "published",
        "feature_image": "https://www.example.com/images/hidden-beaches.jpg"
    },
    {
        "title": "The Ice Caves of Iceland: A Winter Wonderland",
        "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Iceland’s ice caves are a wonder to behold, with their striking blue ice formations and surreal atmosphere. These natural creations are a must-see for any winter traveler seeking adventure.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
        "status": "published",
        "feature_image": "https://www.example.com/images/ice-caves-iceland.jpg"
    },
    {
        "title": "Snowshoeing through the Swiss Alps: A Winter Adventure",
        "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"The Swiss Alps offer some of the best winter landscapes in the world. Snowshoeing through these towering mountains and quaint villages provides an unparalleled winter adventure.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
        "status": "published",
        "feature_image": "https://www.example.com/images/swiss-alps-snowshoeing.jpg"
    },
    # Add the remaining posts here...
]

# Loop through the posts data and send each post separately
for post_data in posts_data:
    body = {"posts": [post_data]}  # Wrap each post in a list as the API expects a single post per request
    r = requests.post(url, json=body, headers=headers)
    
    # Print the response for each post
    print(f"Status code for '{post_data['title']}': {r.status_code}")
    print(r.text)  # Prints the response text for debugging
