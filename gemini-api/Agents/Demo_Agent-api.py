import google.generativeai as genai
from autogen import ConversableAgent
from dotenv import load_dotenv
import os 


load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

def gemini_chat(message, model_name="gemini-1.5-flash"):
    """
    Custom chat function to use Gemini with AutoGen
    """
    model = genai.GenerativeModel(model_name)
    response = model.generate_content(message)
    return response.text

# Create an assistant agent using Gemini
class GeminiAssistant(ConversableAgent):
    def generate_reply(self, messages, sender):
        # Custom method to generate reply using Gemini
        if messages:
            last_message = messages[-1]['content']
            return gemini_chat(last_message)
        return "I didn't receive a message."

assistant = GeminiAssistant(
    name="GeminiAssistant",
    system_message="You are a helpful AI assistant. Always be polite and helpful.",
    human_input_mode="NEVER",  # The agent won't ask for human input
    llm_config={
        "config_list": [
            {
                "model": "gemini-1.5-flash",
                "api_base": "https://generativelanguage.googleapis.com",
                "api_type": "google",
                "api_key": os.getenv('GEMINI_API_KEY')
            }
        ],
        "request_timeout": 600,
        "seed": 42
    },
    max_consecutive_auto_reply=10
)

# Create a user proxy agent
user_proxy = ConversableAgent(
    name="User",
    system_message="A human user who wants to chat with the AI.",
    human_input_mode="ALWAYS",
    max_consecutive_auto_reply=3,
    is_termination_msg=lambda x: x.get("content", "").lower() == "exit"
)

# Initiate the conversation
def start_chat():
    user_proxy.initiate_chat(
        assistant, 
        message="Hello! Let's have a conversation."
    )

# Run the chat
if __name__ == "__main__":
    start_chat()