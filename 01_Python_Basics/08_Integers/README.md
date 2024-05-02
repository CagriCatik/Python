# Python Data Types in Depth

In this repository, we'll explore Python data types in more detail, focusing on the integer data type. Each data type will be explained thoroughly with code snippets and examples.

## Integer Data Type

### Definition

An integer in Python represents any whole number. It can be positive, negative, or zero.

### Examples

```python
# Creating integers
age = 30          # 30 is a whole number
money = 100       # 100 is a whole number
self_esteem = -50  # -50 is a whole number, even if negative

# Performing mathematical operations
a = 5
b = 10

# Addition
sum_result = a + b  # Output: 15

# Subtraction
difference = a - b  # Output: -5

# Multiplication
product = a * b     # Output: 50

# Division
quotient = a / b    # Output: 0.5 (Note: This result is a float)

# Checking the type after division
print(type(quotient))  # Output: <class 'float'>
```

### Note

Performing mathematical operations on integers allows for a wide range of calculations. However, when an operation results in a decimal, the data type changes to a float. In the example above, the division of `a` by `b` results in a float (`0.5`). The concept of floats will be covered in the next lesson.
