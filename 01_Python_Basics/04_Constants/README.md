
# Constants in Python

In Python, constants are not explicitly defined, but we rely on a naming convention to indicate that a variable should be treated as a constant, meaning its value should not be changed throughout the program. Typically, constant variable names are written in uppercase characters.

## Examples

### Example 1: Pi as a Constant

```python
# Define pi as a constant
PI = 3.1415

# Using pi in calculations
radius = 2
area = PI * radius**2

# Display the calculated area
print(f"The area of a circle with radius {radius} is: {area}")
```

### Example 2: Version Number as a Constant

```python
# Define the version number as a constant
VERSION = 2

# Display the program version
print(f"This is version {VERSION} of the program.")
```

## Important Points

- Constants in Python are not enforced, and the naming convention is used to indicate their immutability.
- While constants are conventionally not changed, Python does not prevent you from modifying them.
- Follow best practices and avoid modifying constant values to maintain the integrity of your program.

## Note

In some other programming languages, attempting to change the value of a constant results in an exception or error. However, in Python, it's essential to adhere to the convention and treat constant variables with care.

Feel free to use these examples as a guide in your Python scripts to improve code readability and maintainability.
