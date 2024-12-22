from autogen import ConversableAgent
import google.generativeai as genai
import tempfile
import os 
from dotenv import load_dotenv
from autogen import UserProxyAgent
from autogen.coding import DockerCommandLineCodeExecutor
import tempfile



# Create a temporary directory to store the code files.
temp_dir = tempfile.TemporaryDirectory()
# Create a directory to store output files
output_dir = os.path.join(os.getcwd(), 'saved_CSV')
os.makedirs(output_dir, exist_ok=True)
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))


# The code writer agent's system message is to instruct the LLM on how to use
# the code executor in the code executor agent.
code_writer_system_message = """You are a helpful AI assistant.
Solve tasks using your coding and language skills.
In the following cases, suggest python code (in a python coding block) or shell script (in a sh coding block) for the user to execute.
1. When you need to collect info, use the code to output the info you need, for example, browse or search the web, download/read a file, print the content of a webpage or a file, get the current date/time, check the operating system. After sufficient info is printed and the task is ready to be solved based on your language skill, you can solve the task by yourself.
2. When you need to perform some task with code, use the code to perform the task and output the result. Finish the task smartly.
Solve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.
When using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can't modify your code. So do not suggest incomplete code which requires users to modify. Don't use a code block if it's not intended to be executed by the user.
If you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line. Don't include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use 'print' function for the output when relevant. Check the execution result returned by the user.
If the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can't be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.
When you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.
Reply 'TERMINATE' in the end when everything is done.
"""

code_writer_agent = ConversableAgent(
    "code_writer_agent",
    system_message=code_writer_system_message,
    code_execution_config=False,  # Turn off code execution for this agent.
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

# Create a Docker command line code executor
executor = DockerCommandLineCodeExecutor(
    image="python:3.12-slim",
    timeout=300,  # 5 minutes timeout
    work_dir=output_dir,
)


# Create an agent with the modified code execution config
user_proxy = UserProxyAgent(
    name="user_proxy",
    llm_config=False,
    code_execution_config={"executor": executor}
)

chat_result = user_proxy.initiate_chat(
    code_writer_agent,
    message="Print the numbers from 1 to 100. But for multiples of three, print ""Fizz"" instead of the number, and for the multiples of five, print ""Buzz"". For numbers which are multiples of both three and five, print ""FizzBuzz""."
)

print(chat_result)
temp_dir.cleanup()
print("Temp_Dir Cleaned Successfully!!!")