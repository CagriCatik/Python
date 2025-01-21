
# Python Functions and Return Values Tutorial

In this tutorial, we will explore the concept of return values in Python functions. Return values allow us to obtain results from a function and use them elsewhere in our program.

## Function with Return Value

Let's start by creating a simple function called `get_length`. This function takes a string as input and returns its length as an integer.

```python
def get_length(text: str) -> int:
    """
    Returns the length of the input text.

    Parameters:
    - text (str): The input text.

    Returns:
    - int: The length of the input text.
    """
    print(f"Getting the length of {text}")
    return len(text)
```

In the example above, we use type annotations to specify that the input parameter `text` is of type string, and the return type is an integer.

Now, let's use this function to find the length of the name "Mario" and print the result:

```python
# Example usage of get_length function
name = "Mario"
length_of_name = get_length(name)
print(f"The length of {name} is {length_of_name}")
```

When you run this code, you will see the output "The length of Mario is 5," indicating that the function successfully calculated and returned the length of the input text.

### Type Annotations and Warnings

Type annotations help us define the expected types for parameters and return values. In the function `get_length`, if we were to change the return type to `str` instead of `int`, the IDE (such as PyCharm) would provide immediate syntax highlighting and a warning message, alerting us that the expected type is not matching the actual type.

```python
# Incorrect return type, PyCharm will highlight the issue
def get_length(text: str) -> str:
    # ...
```

This type of feedback during development helps catch errors early and ensures that functions return the expected types.

## Function to Uppercase Text

Next, let's create a function called `make_upper` that takes a string as input and returns the uppercase version of that string.

```python
def make_upper(text: str) -> str:
    """
    Returns the input text in uppercase.

    Parameters:
    - text (str): The input text.

    Returns:
    - str: The input text in uppercase.
    """
    return text.upper()
```

Now, we can use this function to transform the text "hello" into uppercase:

```python
# Example usage of make_upper function
result = make_upper("hello")
print(f"The uppercase version is: {result}")
```

Executing this code will display "The uppercase version is: HELLO."

## Functions with No Return Value

If a function doesn't need to return a value, it implicitly returns `None`. For example, consider a function named `connect_to_internet` that only executes code without returning anything:

```python
def connect_to_internet():
    """
    Connects to the internet (dummy example with no return value).
    """
    print("Connecting to the internet...")
    # Code for connecting to the internet goes here
```

When using such a function, attempting to assign its result to a variable of a specific type will result in a syntax highlighting warning:

```python
# Attempting to assign the result to a variable (will raise a warning)
result_var: str = connect_to_internet()  # This will highlight a warning
```

Executing the function and trying to print the variable will show that it holds `None`.

## Conclusion

In this tutorial, we've covered the basics of using return values in Python functions. Return values allow functions to produce results that can be used in the rest of your program. Additionally, using type annotations and paying attention to warnings can help catch errors and ensure code correctness.
