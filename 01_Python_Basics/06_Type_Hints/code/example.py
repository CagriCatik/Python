def multiply_numbers(a: float, b: float) -> float:
    """Multiply two numbers and return the result."""
    return a * b

# Correct usage
result = multiply_numbers(3.5, 2.0)
print(result)

# Incorrect usage will trigger a warning during development
# Uncomment the line below to see the warning
# result = multiply_numbers("hello", 2)


class SmartDevice:
    def __init__(self, name: str, status: bool = False):
        """Initialize a smart device with a name and status."""
        self.name = name
        self.status = status

    def toggle_status(self) -> None:
        """Toggle the status of the smart device."""
        self.status = not self.status

# Creating instances with correct types
smart_light = SmartDevice("Living Room Light", True)
smart_lock = SmartDevice("Front Door Lock")

# Incorrect usage will trigger a warning during development
# Uncomment the lines below to see the warnings
# smart_light = SmartDevice(123, "On")
# smart_lock.toggle_status("On")


from typing import Union

def square_or_concat(value: Union[int, str]) -> Union[int, str]:
    """Square the integer or concatenate 'hello' to the string."""
    if isinstance(value, int):
        return value ** 2
    elif isinstance(value, str):
        return value + " hello"

# Correct usage
result_1 = square_or_concat(5)
result_2 = square_or_concat("world")
print(result_1, result_2)

# Incorrect usage will trigger a warning during develop

