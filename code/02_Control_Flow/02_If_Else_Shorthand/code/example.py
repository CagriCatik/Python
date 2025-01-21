# Standard If-Else Example
def standard_if_else(number):
    """
    This function uses a standard if-else statement to determine
    if a number is above zero or zero and below.
    """
    if number > 0:
        result = "above zero"
    else:
        result = "zero or below"
    
    print(f"Standard If-Else: {result}")

# Shorthand If-Else Example
def shorthand_if_else(number):
    """
    This function uses a shorthand if-else statement to determine
    if a number is above zero or zero and below.
    """
    result = "above zero" if number > 0 else "zero or below"
    print(f"Shorthand If-Else: {result}")

# Example 1: Standard If-Else for simple boolean expressions
def example_standard_boolean(condition):
    """
    This function demonstrates a standard if-else statement
    for a boolean condition.
    """
    if condition:
        result = "true"
    else:
        result = "false"
    
    print(f"Standard Boolean If-Else: {result}")

# Example 2: Shorthand If-Else for simple boolean expressions
def example_shorthand_boolean(condition):
    """
    This function demonstrates a shorthand if-else statement
    for a boolean condition.
    """
    result = "true" if condition else "false"
    print(f"Shorthand Boolean If-Else: {result}")

# Complex Condition Example where Standard If-Else is preferred
def complex_condition_example(some_value):
    """
    This function demonstrates a scenario where using a standard if-else
    statement might be preferable for readability when dealing with complex conditions.
    """
    if some_complex_function(some_value):
        result = "complex condition met"
    else:
        result = "complex condition not met"
    
    print(f"Complex Condition Standard If-Else: {result}")

def some_complex_function(value):
    """
    Placeholder function representing a complex condition.
    For demonstration purposes, it returns True if the value is greater than 10.
    """
    return value > 10

if __name__ == "__main__":
    # Test with different values
    number = 0
    standard_if_else(number)
    shorthand_if_else(number)

    number = 10
    standard_if_else(number)
    shorthand_if_else(number)

    condition = True
    example_standard_boolean(condition)
    example_shorthand_boolean(condition)

    condition = False
    example_standard_boolean(condition)
    example_shorthand_boolean(condition)

    # Complex condition examples
    value = 5
    complex_condition_example(value)

    value = 15
    complex_condition_example(value)
