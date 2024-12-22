from autogen.coding import DockerCommandLineCodeExecutor
from autogen import ConversableAgent
import tempfile

temp_dir = tempfile.TemporaryDirectory()

executor = DockerCommandLineCodeExecutor(
    image="python:3.12-slim",
    timeout=10,
    work_dir=temp_dir.name,
)

code_executor_agent = ConversableAgent(
    "code_executor_agent_docker",
    llm_config=False,
    code_execution_config={"executor": executor},
    human_input_mode="ALWAYS",
)
