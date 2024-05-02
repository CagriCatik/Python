
# Understanding Floats in Python

In this lesson, we will explore the use of decimal numbers, or floats, in Python. Floats are used to represent numbers with decimal points.

## Examples

### Defining Float Constants

```python
# Example: Defining pi as a float
pi: float = 3.1415

# Example: Defining percent as a float (50%)
percent: float = 0.50
```

### Representing Height in Meters

```python
# Example: Defining height in meters as a float
height_in_meters: float = 1.72
```

### Performing Mathematical Operations

```python
# Example: Performing mathematical operations with floats
a: float = 0.5
b: float = 1.5

# Addition
result_addition = a + b  # Output: 2.0

# Subtraction
result_subtraction = a - b  # Output: -1.0

# Multiplication
result_multiplication = a * b  # Output: 0.75

# Division
result_division = a / b  # Output: 0.3333333333333333 (approximately 1/3)
```

### Type Annotations with Floats

```python
# Example: Type annotations with floats and integers
float_value: float = 10  # Integer can be assigned to a float

# Warning: Attempting to assign a float to an integer
# int_value: int = 1.5  # This will result in a warning

# Note: Python automatically converts integers to floats
float_from_int: float = 1.0  # This is compatible
```

**Important Note:** While integers can easily be converted to floats, attempting to assign a float to an integer without explicit conversion will result in a warning. Python cannot easily convert a float to an integer without rounding. Even if the float appears as a whole number, like 1.0, it remains incompatible with integers.
