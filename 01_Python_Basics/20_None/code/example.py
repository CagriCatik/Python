def get_user_info(user_id):
    # Simulating a database with user information
    database = {1: {'name': 'Alice', 'age': 25}, 2: {'name': 'Bob', 'age': 30}}

    user_data = database.get(user_id)

    if user_data is None:
        print(f"User with ID {user_id} not found.")
        return None

    return user_data

# Example usage
user_info = get_user_info(3)
if user_info is not None:
    print(f"User found: {user_info}")
else:
    print("User not found.")


class Config:
    def __init__(self, api_key=None, timeout=None, max_attempts=None):
        self.api_key = api_key
        self.timeout = timeout
        self.max_attempts = max_attempts

# Example configuration
app_config = Config(api_key='your_api_key', timeout=30)

# Accessing optional settings
print("API Key:", app_config.api_key)
print("Timeout:", app_config.timeout)
print("Max Attempts:", app_config.max_attempts)



def complex_operation(value):
    try:
        result = perform_complex_task(value)
        return result
    except Exception as e:
        print(f"Error: {e}")
        return None

def perform_complex_task(value):
    # Simulating a complex operation
    if value < 0:
        raise ValueError("Input value must be non-negative.")

    return value ** 2

# Example usage
input_value = 5
result = complex_operation(input_value)

if result is not None:
    print(f"Result of complex operation: {result}")
else:
    print("Complex operation failed.")
