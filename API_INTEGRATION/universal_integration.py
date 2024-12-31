import requests
import jwt
from datetime import datetime as date

class GhostAPI:
    def __init__(self, admin_api_key, api_url):
        self.api_url = api_url
        self.id, self.secret = admin_api_key.split(':')

    def _generate_token(self):
        """Generate a JWT token for authentication."""
        iat = int(date.now().timestamp())
        header = {'alg': 'HS256', 'typ': 'JWT', 'kid': self.id}
        payload = {
            'iat': iat,
            'exp': iat + 5 * 60,
            'aud': '/admin/'
        }
        return jwt.encode(payload, bytes.fromhex(self.secret), algorithm='HS256', headers=header)

    def post_article(self, title, content, feature_image, status="published"):
        """Post a single article to the Ghost CMS."""
        token = self._generate_token()
        headers = {'Authorization': f'Ghost {token}'}
        body = {
            "posts": [
                {
                    "title": title,
                    "lexical": content,
                    "status": status,
                    "feature_image": feature_image
                }
            ]
        }
        response = requests.post(f"{self.api_url}/posts/", json=body, headers=headers)
        return response

# Example usage:
if __name__ == "__main__":
    api_key = '677357fd6fdb05d2a4552f5c:940e0b8fd264043422a9612de7176e26a41e7b06defc78ce712c61a2aa4fc4eb'
    api_url = 'http://localhost:2368/ghost/api/admin'
    ghost_api = GhostAPI(api_key, api_url)

    # Generate articles dynamically in your workflow
    generated_articles = [
        {
            "title": "AI-Powered Article 1",
            "content": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"This is an AI-generated article content.\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
            "feature_image": "https://www.example.com/images/ai-article1.jpg"
        },
        # Add more generated articles here
    ]

    for article in generated_articles:
        response = ghost_api.post_article(
            title=article["title"],
            content=article["content"],
            feature_image=article["feature_image"]
        )
        print(f"Status code for '{article['title']}': {response.status_code}")
        print(response.text)
