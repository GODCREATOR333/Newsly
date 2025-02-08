import os
from typing import Annotated, Literal
from autogen import ConversableAgent, register_function

# Define the operator type for calculator function
Operator = Literal["+", "-", "*", "/"]

# The calculator function
def calculator(a: int, b: int, operator: Annotated[Operator, "operator"]) -> int:
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        if b == 0:  # Handling division by zero
            raise ValueError("Cannot divide by zero")
        return int(a / b)
    else:
        raise ValueError("Invalid operator")

# LLM configuration for the assistant agent
llm_config = {
    "config_list": [
        {
            "model": "gemini-1.5-flash",
            "api_base": "https://generativelanguage.googleapis.com",
            "api_type": "google",
            "api_key": os.getenv('GEMINI_API_KEY')  # Ensure the API key is set in the environment variables
        }
    ],
    "request_timeout": 600,
    "seed": 42
}

# Assistant agent: It suggests the tool calls based on user queries
assistant = ConversableAgent(
    name="Assistant",
    system_message="You are a helpful AI assistant. "
    "You can help with simple calculations. "
    "Return 'TERMINATE' when the task is done.",
    llm_config=llm_config,
    max_consecutive_auto_reply=10
)

# User proxy agent: Interacts with the assistant and executes tool calls
user_proxy = ConversableAgent(
    name="User",
    llm_config=False,
    is_termination_msg=lambda msg: msg.get("content") and "TERMINATE" in msg["content"],
    human_input_mode="NEVER",  # Ensures that the user does not have to manually input anything
)


# Initiate a chat from the user proxy to ask for a calculation
chat_result = user_proxy.initiate_chat(
    assistant,
    message="What is 2^4 + 14456?"
)

# Output the result of the calculation
print(chat_result)
