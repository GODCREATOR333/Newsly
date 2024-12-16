from autogen import ConversableAgent
from ollama import Client

# Create an Ollama client
ollama_client = Client(host='http://localhost:11434')

def ollama_chat(message, model='llama3.2'):
    """
    Custom chat function to use Ollama with AutoGen
    """
    response = ollama_client.chat(
        model=model, 
        messages=[{'role': 'user', 'content': message}]
    )
    return response['message']['content']

# Create an assistant agent using Ollama
assistant = ConversableAgent(
    name="OllamaAssistant",
    system_message="You are a helpful AI assistant. Always be polite and helpful.",
    human_input_mode="NEVER",  # The agent won't ask for human input
    llm_config={
        "config_list": [
            {
                "model": "llama3.2",
                "api_base": "http://localhost:11434",
                "api_type": "ollama",
                "api_key": "NA"  # Ollama doesn't require an API key
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
