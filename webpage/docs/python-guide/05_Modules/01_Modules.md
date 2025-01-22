
# Modules

This document provides an overview of Python modules, including what they are, how to create them, and various methods of importing and using them in your Python scripts.

## What are Modules?

Modules in Python are single files containing Python code, typically defining functions, classes, and variables meant to be imported and utilized in other Python scripts. They serve to organize code and promote reusability.

## Example Usage

An example commonly cited is the `time` module, which provides functionality for time-related operations. For instance, calling the `sleep()` function from the `time` module will pause program execution for a specified number of seconds.

```python
import time

time.sleep(5)  # Pauses execution for 5 seconds
```

## Creating Your Own Module

As programs grow in complexity, it becomes beneficial to create custom modules. To create a module:

1. Navigate to your project folder.
2. Create a new Python file within the folder.
3. Define your module's functionality within this file.

For example, let's create a module named `greetings.py`:

```python
from typing import Final

MY_NAME: Final[str] = "Your Name"
VERSION: Final[int] = 1

def greet(name: str) -> None:
    """Greets the provided name."""
    print(f"Hello, {name}!")
```

## Importing Modules

Once a module is created, it can be imported and utilized in other Python scripts.

### Basic Import

```python
import greetings

greetings.greet("Mario")  # Output: Hello, Mario!
```

### Alias Import

```python
import greetings as G

G.greet("Mario")  # Output: Hello, Mario!
```

### Importing Specific Functions

```python
from greetings import greet

greet("Mario")  # Output: Hello, Mario!
```

### Star Import (Avoided)

```python
from greetings import *

greet("Luigi")  # Output: Hello, Luigi!
print(MY_NAME)  # Output: Your Name
print(VERSION)  # Output: 1
```

## Note on Performance

Importing specific functionality from a module does not necessarily improve memory or performance. Python still executes the entire module upon import. Importing specific parts is mainly for namespace cleanliness and code readability.

## Conclusion

Understanding modules is crucial for organizing and reusing code effectively in Python projects. With modules, you can encapsulate functionality into separate files, making your codebase more manageable and maintainable.
