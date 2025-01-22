# Python Numeric Operations

# Define variables
a = 2
b = 4

# Arithmetic Operators
result_addition = a + b  # Output: 6
print("Addition:", result_addition)

result_subtraction = a - b  # Output: -2
print("Subtraction:", result_subtraction)

result_multiplication = a * b  # Output: 8
print("Multiplication:", result_multiplication)

result_division = a / b  # Output: 0.5
print("Division:", result_division)

result_floor_division = a // b  # Output: 0 (rounds down to the nearest whole number)
print("Floor Division:", result_floor_division)

# Exponentiation
result_exponentiation = a ** b  # Output: 16
print("Exponentiation:", result_exponentiation)

# Modulus Operator
result_modulus = 3 % 2  # Output: 1 (remainder when 3 is divided by 2)
print("Modulus:", result_modulus)

# Order of Operations and Parentheses
result_with_parentheses = 10 + 10 * 2  # Output: 30
print("Without Parentheses:", result_with_parentheses)

result_without_parentheses = (10 + 10) * 2  # Output: 40
print("With Parentheses:", result_without_parentheses)

# Assignment Operators
x = 2

# Long-form operation
x = x + 2  # Equivalent to x += 2
print("Long-form Addition:", x)

# Short-form operations
x += 2  # Output: 4 (same as x = x + 2)
print("Short-form Addition:", x)

x -= 2  # Output: 2
print("Short-form Subtraction:", x)

x *= 2  # Output: 4
print("Short-form Multiplication:", x)

x /= 2  # Output: 2.0
print("Short-form Division:", x)

x //= 2  # Output: 1.0 (floor division)
print("Short-form Floor Division:", x)

x **= 3  # Output: 1.0 (exponentiation)
print("Short-form Exponentiation:", x)

x %= 3   # Output: 1.0 (modulus)
print("Short-form Modulus:", x)

# Comparison Operators

a = 1
b = 5
c = 10
d = 10

# Equality Operator
result = a == b
print("a == b:", result)  # Output: False

result = c == d
print("c == d:", result)  # Output: True

result = a != d  # Using '!=' for not equal
print("a != d:", result)  # Output: True

# Greater Than and Less Than Operators
result = b > a
print("b > a:", result)  # Output: True

result = a > b
print("a > b:", result)  # Output: False

result = c >= d  # Greater than or equal to
print("c >= d:", result)  # Output: True

result = c < d
print("c < d:", result)  # Output: False

# Chaining Comparison Operators
result = a < b < c
print("a < b < c:", result)  # Output: True

result = c > b > a
print("c > b > a:", result)  # Output: True

result = b > a and b < c  # Equivalent to the previous example
print("b > a and b < c:", result)  # Output: True

# Logical Operators

# Chaining `and` Operator
a = 5
b = 10
c = 5

result = (c == a) and (b > a)
print("c == a and b > a:", result)  # Output: True

# Using `or` Operator
result = (c == a) or (b > a)
print("c == a or b > a:", result)  # Output: True

# Applying `not` Operator
result = not (a > b)  # Equivalent to (a <= b)
print("not (a > b):", result)  # Output: True

result = not (c == a)  # Equivalent to (c != a)
print("not (c == a):", result)  # Output: True
