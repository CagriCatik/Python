def advanced_greet(name, greeting="Hello", punctuation="!"):
    formatted_greeting = f"{greeting} {name}{punctuation}"
    print(formatted_greeting)

# Example usage
advanced_greet("Alice")  # Output: Hello Alice!
advanced_greet("Bob", greeting="Hi", punctuation="!!!")  # Output: Hi Bob!!!


def perform_math_operation(a, b, operation="add"):
    if operation == "add":
        result = a + b
    elif operation == "subtract":
        result = a - b
    elif operation == "multiply":
        result = a * b
    elif operation == "divide":
        result = a / b
    else:
        result = None
        print("Invalid operation!")

    return result

# Example usage
print(perform_math_operation(5, 3))  # Output: 8 (default operation is addition)
print(perform_math_operation(10, 2, operation="multiply"))  # Output: 20


def format_data(data, headers=None, delimiter=",", quote='"'):
    if headers:
        formatted_data = f"{delimiter.join(headers)}\n"
        for item in data:
            formatted_data += f"{delimiter.join([quote + str(value) + quote for value in item.values()])}\n"
    else:
        formatted_data = f"{delimiter.join([quote + str(value) + quote for value in data])}\n"

    print(formatted_data)

# Example usage
data_set = [{"Name": "Alice", "Age": 30, "City": "Wonderland"},
            {"Name": "Bob", "Age": 25, "City": "Techland"}]

headers = ["Name", "Age", "City"]

format_data(data_set, headers=headers)  # Output: Name,Age,City\n"Alice",30,"Wonderland"\n"Bob",25,"Techland"\n
