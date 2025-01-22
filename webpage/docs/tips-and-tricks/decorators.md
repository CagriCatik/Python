# 5 Useful Python Decorators

In this tutorial, we'll explore various decorators, both custom-made and built-in, that can enhance the functionality and efficiency of your Python code. Each decorator serves a specific purpose, ranging from retrying failed operations to deprecating functions and handling program termination gracefully.

## 1. Retry Decorator

The first decorator we'll explore is the `retry` decorator, designed to retry a function call a specified number of times with a delay between each attempt. This decorator is particularly useful for handling operations that may fail due to external factors such as network issues.

### Implementation

```python
from indent import retry

@retry(retries=4, delay=1)
def connect():
    """
    Attempt to establish a connection.
    """
    # Simulate connection attempt
    # Raise an exception if connection fails
    raise ConnectionError("Could not connect to the internet")

# Main entry point
if __name__ == "__main__":
    connect()
```

## 2. Cache Decorator

Next, let's explore the `cache` decorator, which caches the return value of a function, reducing redundant computations for repeated function calls with the same arguments.

### Implementation

```python
from indent import cache

@cache
def count_vowels(text):
    """
    Count the number of vowels in a given string.
    """
    # Expensive operation (simulated delay)
    # Count vowels in the text
    vowel_count = sum(1 for char in text if char in 'aeiouAEIOU')
    return vowel_count

# Main entry point
if __name__ == "__main__":
    print(count_vowels("Bob"))  # First call
    print(count_vowels("Bob"))  # Subsequent call (cached result)
```

## 3. Get Time Decorator

Moving on, let's examine the `get_time` decorator, which measures the execution time of a function. This decorator is useful for performance analysis and optimization.

### Implementation

```python
from indent import get_time

@get_time
def connect():
    """
    Simulate connecting to an imaginary database.
    """
    # Simulate connection process
    time.sleep(2)

@get_time
def fifty_million_loops():
    """
    Perform fifty million iterations.
    """
    for _ in range(50000000):
        pass

# Main entry point
if __name__ == "__main__":
    connect()
    fifty_million_loops()
```

## 4. Deprecated Decorator

Now, let's dive into decorators introduced by Carberra. The `deprecated` decorator marks functions as deprecated, providing warnings to users and encouraging them to migrate to alternative solutions.

### Implementation

```python
from deprecated import deprecated

@deprecated("Adding is deprecated", version="1.0.0")
def add(x: int, y: int) -> int:
    """
    Add two integers.
    """
    return x + y

# Main entry point
if __name__ == "__main__":
    print(add(5, 7))  # Deprecated function call
```

## 5. At Exit Register Decorator

Finally, let's explore the `at_exit.register` decorator, which registers a function to be executed when the program terminates. This decorator is valuable for performing cleanup tasks before exiting the program.

### Implementation

```python
import atexit

@atexit.register
def exit_handler():
    """
    Function to be called when the program terminates.
    """
    print("We're exiting now")

def main():
    """
    Main function.
    """
    for i in range(10):
        print(2 ** i)

if __name__ == "__main__":
    main()
```
