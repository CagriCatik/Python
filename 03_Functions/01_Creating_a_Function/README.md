
# Python Functions Tutorial

In this tutorial, we'll explore the basics of creating and using functions in Python. Functions play a crucial role in enhancing the readability, reusability, and maintainability of your code.

## Introduction

When programming in Python, two key principles to keep in mind are readability and reusability. Writing code line by line can become cumbersome, especially as your program grows. Functions help address this issue by allowing you to encapsulate blocks of code, making it easier to scale and maintain your program.

## Creating a Simple Function

To create a function in Python, use the `def` keyword followed by the function name and a block of code. Here's a simple example:

```python
def greet():
    print("Hello")

# Call the function
greet()
```

This function, named `greet`, prints "Hello" to the console. You can easily reuse this code by calling the function whenever you need it.

## Code Reusability

One of the main benefits of functions is code reusability. If you want to make a change, you only need to edit the function's code, and the modifications will be applied throughout your program. For instance:

```python
def greet():
    print("Hello")
    print("----")  # New line added

# Call the function three times
greet()
greet()
greet()
```

Now, every time you call `greet()`, it will print "Hello" along with the added dashes.

## Practical Example: Current Date and Time

Let's create a more practical function to display the current date and time. This example uses the `datetime` module:

```python
from datetime import datetime
import time

def show_time():
    now = datetime.now()
    formatted_time = now.strftime("%H:%M:%S")
    print(f"The current time is {formatted_time}")

    # Sleep for two seconds
    time.sleep(2)

# Call the function to display current time
show_time()
```

In this example, the `show_time` function prints the current time in a specified format. It also demonstrates how functions can be used to perform actions over time, such as waiting for two seconds before displaying the time again.

This tutorial covers the fundamental concepts of functions in Python. Throughout the course, we'll explore advanced features and possibilities for creating and using functions. Stay tuned for more in-depth discussions and practical examples.
