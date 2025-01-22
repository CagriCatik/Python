def factorial(n):
    """Calculate the factorial of a number using recursion."""
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage
result = factorial(5)
print(f"The factorial of 5 is {result}")
