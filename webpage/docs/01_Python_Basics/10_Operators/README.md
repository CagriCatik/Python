# Numeric Operations

In this example, we'll explore the various arithmetic operators available in Python for numeric data types. We'll cover basic arithmetic operators, floor division, exponentiation, modulus, and introduce assignment operators for efficient coding.

## Arithmetic Operators

```python
# Define variables
a = 2
b = 4

# Addition
result_addition = a + b  # Output: 6

# Subtraction
result_subtraction = a - b  # Output: -2

# Multiplication
result_multiplication = a * b  # Output: 8

# Division
result_division = a / b  # Output: 0.5

# Floor Division
result_floor_division = a // b  # Output: 0 (rounds down to the nearest whole number)
```

## Exponentiation

```python
# Exponentiation
result_exponentiation = a ** b  # Output: 16
```

## Modulus Operator

```python
# Modulus
result_modulus = 3 % 2  # Output: 1 (remainder when 3 is divided by 2)
```

## Order of Operations and Parentheses

```python
# Using parentheses to alter order of operations
result_with_parentheses = 10 + 10 * 2  # Output: 30
result_without_parentheses = (10 + 10) * 2  # Output: 40
```

## Assignment Operators

```python
# Using assignment operators
x = 2

# Long-form operation
x = x + 2  # Equivalent to x += 2

# Short-form operations
x += 2  # Output: 4 (same as x = x + 2)
x -= 2  # Output: 0
x *= 2  # Output: 4
x /= 2  # Output: 1.0
x //= 2  # Output: 0 (floor division)
x **= 3  # Output: 0 (exponentiation)
x %= 3   # Output: 0 (modulus)
```

Feel free to experiment with these examples to deepen your understanding of Python's numeric operations. If you have any questions or need further clarification, refer to the comments and explanations provided in the code snippets. Happy coding!

# Comparison Operators in Python

This README.md file provides an overview of comparison operators in Python and includes code snippets with examples to illustrate their usage.

## Introduction

Comparison operators in Python are used to compare values and return a boolean based on the result of the comparison. This can be useful for making decisions in your code based on the relationships between different variables.

## Code Snippets and Examples

Let's start by defining some variables:

```python
a = 1
b = 5
c = 10
d = 10
```

### Equality Operator

The equality operator (`==`) checks if two values are equal:

```python
result = a == b
print(result)  # Output: False

result = c == d
print(result)  # Output: True

result = a != d  # Using '!=' for not equal
print(result)  # Output: True
```

### Greater Than and Less Than Operators

The greater than (`>`) and less than (`<`) operators compare values:

```python
result = b > a
print(result)  # Output: True

result = a > b
print(result)  # Output: False

result = c >= d  # Greater than or equal to
print(result)  # Output: True

result = c < d
print(result)  # Output: False
```

### Chaining Comparison Operators

You can chain comparison operators to check multiple conditions:

```python
result = a < b < c
print(result)  # Output: True

result = c > b > a
print(result)  # Output: True

result = b > a and b < c  # Equivalent to the previous example
print(result)  # Output: True
```

### Conclusion

Understanding and using comparison operators is fundamental in programming. They allow you to create dynamic and responsive code by making decisions based on the relationships between different values.

Feel free to experiment with these examples and adapt them to your specific use cases in Python programming.

# Python Logical Operators

This repository demonstrates the usage of logical operators in Python. Logical operators allow you to combine and evaluate multiple conditions in your code. We'll cover three main logical operators: `and`, `or`, and `not`.

## Examples

### Chaining `and` Operator

```python
# Chaining the 'and' operator
a = 5
b = 10
c = 5

result = (c == a) and (b > a)
print(result)  # Output: True
```

The `and` operator checks that both expressions evaluate to true. In this example, it checks if `c` is equal to `a` and if `b` is greater than `a`.

### Using `or` Operator

```python
# Using the 'or' operator
a = 5
b = 10
c = 5

result = (c == a) or (b > a)
print(result)  # Output: True
```

The `or` operator checks that at least one expression evaluates to true. In this example, it doesn't matter if `c` is equal to `a` is false because `b` is greater than `a`, making the whole expression true.

### Applying `not` Operator

```python
# Applying the 'not' operator
a = 5
b = 10
c = 5

result = not (a > b)  # Equivalent to (a <= b)
print(result)  # Output: True

result = not (c == a)  # Equivalent to (c != a)
print(result)  # Output: True
```

The `not` operator negates the result of the expression. It can be used to reverse the truth value of a condition.
