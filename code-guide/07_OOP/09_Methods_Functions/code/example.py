# Function definition
def add_numbers(a, b):
    """This function adds two numbers and returns the result."""
    return a + b

# Another function definition
def greet(name):
    """This function greets the person by name."""
    return f"Hello, {name}!"

# Class definition with methods
class Calculator:
    def __init__(self):
        """Initializer method to set up initial state"""
        self.result = 0

    def add(self, a, b):
        """This method adds two numbers and stores the result."""
        self.result = a + b
        return self.result

class Greeter:
    def __init__(self, name):
        """Initializer method to set up initial state"""
        self.name = name

    def greet(self):
        """This method greets the person using the object's state."""
        return f"Hello, {self.name}!"

# Main script
if __name__ == "__main__":
    # Using functions
    print("Using Functions:")
    function_result = add_numbers(3, 5)
    print(f"Result of add_numbers function: {function_result}")  # Output: 8

    greeting_function_result = greet("Alice")
    print(greeting_function_result)  # Output: Hello, Alice!

    # Using methods
    print("\nUsing Methods:")
    # Create an instance of Calculator
    calc = Calculator()
    method_result = calc.add(3, 5)
    print(f"Result of add method: {method_result}")  # Output: 8

    # Create an instance of Greeter
    greeter = Greeter("Bob")
    greeting_method_result = greeter.greet()
    print(greeting_method_result)  # Output: Hello, Bob!
