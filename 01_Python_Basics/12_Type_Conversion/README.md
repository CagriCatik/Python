# Type Conversion in Python

Type conversion is essential when dealing with incompatible data types that need to be used together in operations. Python provides straightforward ways to convert between different data types.

## Code Examples

Let's start by creating two values, one as a text value of type string and another as an integer:

```python
text_value = str(100)
int_value = 50
```

### Option 1: Convert Text to Integer

To add the text and integer values, we can convert the text value to an integer:

```python
result_option1 = int(text_value) + int_value
print(result_option1)  # Output: 150
```

### Option 2: Convert Integer to Text

Alternatively, we can convert the integer value to a string:

```python
result_option2 = text_value + str(int_value)
print(result_option2)  # Output: '10050'
```

### Compatibility of Floats and Integers

Python automatically handles compatibility between floats and integers:

```python
result_float_int = 5.5 + 1
print(result_float_int)  # Output: 6.5
print(type(result_float_int))  # Output: <class 'float'>
```

### Handling Incompatible Type Conversion

It's important to use compatible values for type conversion. Attempting to convert an incompatible type may result in an error:

```python
# Example causing a ValueError
try:
    invalid_conversion = int("ten")
except ValueError as e:
    print(f"Error: {e}")
```

Ensure that the values provided for conversion are compatible to avoid errors.
