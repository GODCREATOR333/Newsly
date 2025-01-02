from typing import Annotated, Literal

# Define the operator type for calculator function
Operator = Literal["+", "-", "*", "/"]

def calculator(a: int, b: int, operator: Annotated[Operator, "operator"]) -> int:
    """
    Perform basic arithmetic operations.
    
    Args:
        a (int): First number
        b (int): Second number
        operator (str): One of '+', '-', '*', '/'
        
    Returns:
        int: Result of the calculation
    """
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return int(a / b)
    else:
        raise ValueError("Invalid operator")