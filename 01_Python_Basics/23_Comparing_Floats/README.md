# Floating Point Precision in Python

In this tutorial, we will explore the challenges associated with performing mathematical operations involving floats in Python due to their inherent lack of precision. We'll discuss how to address this issue using the `math` module's `isclose` function, which allows us to compare floating-point numbers with a desired level of tolerance.

## Problem Overview

Python's floating-point numbers may not always behave as expected due to precision limitations. For instance, directly comparing the sum of 0.1 and 0.2 with 0.3 may yield unexpected results.

```python
result = 0.1 + 0.2 == 0.3  # This might return False
```

## Solution: Using `isclose` from `math` module

To address precision issues, we can use the `isclose` function from the `math` module. This function allows us to compare floating-point numbers with a specified tolerance.

### Example

```python
import math

# Define two float values
a = 0.999
b = 1.0

# Check if the numbers are close with a relative tolerance of 0.01
result = math.isclose(a, b, rel_tol=0.01)

print(result)  # This will print True
```

In this example, `math.isclose` compares the values of `a` and `b` with a relative tolerance of 0.01, meaning they are considered equal if the difference is within 1%. Adjust the tolerance as needed for your specific use case.

### Absolute Tolerance

It's essential to note that `isclose` supports both absolute and relative tolerances. Absolute tolerance specifies a fixed difference that is acceptable between the two numbers. However, it might not be suitable for all scenarios, especially when dealing with a wide range of values.

```python
# Using absolute tolerance
result = math.isclose(a, b, abs_tol=0.001)
```

### Combining Absolute and Relative Tolerance

For a more flexible comparison, you can use both absolute and relative tolerances.

```python
# Using both absolute and relative tolerance
result = math.isclose(a, b, rel_tol=0.01, abs_tol=0.001)
```

This ensures that the numbers are close either within the specified percentage range or a fixed absolute difference.

## Practical Example

Let's revisit the problem of `0.1 + 0.2 == 0.3`:

```python
# Calculate the sum
result = 0.1 + 0.2

# Check if the result is close to 0.3 with a 0.1% tolerance
is_equal = math.isclose(result, 0.3, rel_tol=0.001)

print(is_equal)  # This will print True
```

By using `isclose` with an appropriate tolerance, we can ensure accurate comparisons even with floating-point imprecision. Adjust the tolerance values based on the specific needs of your application.
