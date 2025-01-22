
# Lambda Functions

Welcome to this tutorial on using lambda functions in Python! In this lesson, we'll explore the basics of lambda functions, how to create them, and how to use them effectively.

## Introduction to Lambdas

Lambdas are nameless functions that you can create on the fly. They are particularly handy for short-lived, one-time-use operations. Let's dive into some code examples.

### Simple Lambda

```python
# Single parameter lambda
p = lambda x: print(x)

# Using the lambda
p(10)
p("hello")
```

### Lambda with Multiple Parameters

```python
# Lambda with multiple parameters
add = lambda a, b: a + b

# Using the lambda
result = add(4, 5)
print(result)  # Output: 9
```

### Using Lambdas in a Function

```python
from typing import Callable, List

def use_all(func: Callable, values: List[int]) -> None:
    for value in values:
        func(value)

# Using the function with a lambda
use_all(lambda x: print(f"{x} times 'x'"))

# Output:
# 2 times 'x'
# 4 times 'x'
# 10 times 'x'
```

### Lambda vs. Regular Function

```python
# Using a lambda
multiply = lambda x: print(x * 2)
use_all(multiply, [2, 4, 10])

# Equivalent regular function
def multiply_func(x: int) -> None:
    print(x * 2)

use_all(multiply_func, [2, 4, 10])
```

### Sorting with Lambdas

```python
# Sorting names by length
names = ["Bob", "James", "Samantha", "Luigi", "Joe"]
sorted_names = sorted(names, key=lambda x: len(x.lower()))

print(sorted_names)
# Output: ['Joe', 'Bob', 'Luigi', 'James', 'Samantha']
```

## Conclusion

Lambdas are powerful tools for concise and expressive coding, especially in scenarios where creating a separate function may be overkill. Consider their readability and reusability when deciding between lambdas and regular functions. Enjoy coding with lambdas!
