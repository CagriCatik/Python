# Dynamic Typing and Type Hints in Python

Python is a dynamically typed language, allowing flexibility in changing variable types during program execution. However, it's good practice to use type hints or annotations to make code more explicit and catch potential errors early on.

## Dynamic Typing Example

```python
number = 10
print(number)
print(type(number))

# Reassigning 'number' to a string
number = "hello"
print(number)
print(type(number))
```

In this example, we initially assign an integer to `number`, print it, and print its type. Then, we reassign it to a string, demonstrating Python's dynamic typing.

## Type Hints and Annotations

```python
number: int = 10
print(number)

# Trying to reassign 'number' to a string will trigger a warning
number = "hello"  # Type hint provides early warning for incorrect type

text: str = "hello"
print(text + "!")
```

Here, we use type hints to explicitly state the expected types for `number` and `text`. The type hints act as a safety mechanism, providing warnings during development if the assigned types don't match the hints.

```python
# Incorrect usage will trigger a warning during development
# Uncomment the line below to see the warning
# text = 100
```

This commented-out line demonstrates that attempting to assign an incorrect type (integer in this case) will result in a warning, preventing potential runtime errors. Keep in mind that type hints are for developers' benefit and are ignored by Python during runtime. They serve as documentation and aid in catching errors early in the development process.
