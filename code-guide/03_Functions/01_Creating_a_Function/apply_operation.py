def apply_operation(x, y, operation):
    """A higher-order function that applies a callback operation to two numbers."""
    result = operation(x, y)
    return result

def add(x, y):
    """A simple addition function."""
    return x + y

def multiply(x, y):
    """A simple multiplication function."""
    return x * y

# Example usage
result_addition = apply_operation(5, 3, add)
result_multiplication = apply_operation(5, 3, multiply)

print(f"Result of addition: {result_addition}")
print(f"Result of multiplication: {result_multiplication}")
