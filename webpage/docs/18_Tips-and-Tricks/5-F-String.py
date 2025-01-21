from datetime import datetime

# 1. Formatting Large Numbers with Separators

# Example of a large number
n = 1234567890

# Using underscore as a separator
formatted_n_underscore = f"{n:_}"
print(f"Formatted with underscores: {formatted_n_underscore}")

# Using comma as a separator
formatted_n_comma = f"{n:,}"
print(f"Formatted with commas: {formatted_n_comma}")

# Combining with decimal places
large_float = 1234567890.123456
formatted_large_float = f"{large_float:,.2f}"
print(f"Formatted with commas and 2 decimal places: {formatted_large_float}")

# Custom separator (using a function)
def custom_separator(number, separator='.'):
    return f"{number:,}".replace(',', separator)

formatted_custom_sep = custom_separator(large_float)
print(f"Formatted with custom separator: {formatted_custom_sep}")

print("\n" + "="*50 + "\n")

# 2. Aligning and Padding Strings

# Example string variable
variable = "Python"

# Right alignment
right_aligned = f"{variable:>20}"
print(f"Right aligned: '{right_aligned}'")

# Left alignment (default)
left_aligned = f"{variable:<20}"
print(f"Left aligned: '{left_aligned}'")

# Center alignment
center_aligned = f"{variable:^20}"
print(f"Center aligned: '{center_aligned}'")

# Custom fill characters
right_aligned_fill = f"{variable:_>20}"  # Fill with underscores
center_aligned_fill = f"{variable:*^20}"  # Fill with asterisks
print(f"Right aligned with underscores: '{right_aligned_fill}'")
print(f"Center aligned with asterisks: '{center_aligned_fill}'")

# Practical example: formatting a table
header = f"{'Name':<10} {'Age':>3} {'Country':<15}"
row1 = f"{'Alice':<10} {29:>3} {'United States':<15}"
row2 = f"{'Bob':<10} {34:>3} {'Canada':<15}"
row3 = f"{'Charlie':<10} {25:>3} {'United Kingdom':<15}"

print("\n" + header)
print(row1)
print(row2)
print(row3)

print("\n" + "="*50 + "\n")

# 3. Formatting Dates and Times

# Get the current date and time
current_time = datetime.now()

# Basic date formatting
formatted_time_basic = f"{current_time:%Y-%m-%d %H:%M:%S}"
print(f"Formatted date and time: {formatted_time_basic}")

# Localized date and time
localized_time = f"{current_time:%c}"
print(f"Localized date and time: {localized_time}")

# Customizing date and time formats
custom_time_format = f"{current_time:%A, %B %d, %Y at %I:%M %p}"
print(f"Custom formatted date and time: {custom_time_format}")

# Practical example: logging with timestamps
def log_message(message):
    current_time = datetime.now()
    formatted_time = f"{current_time:%Y-%m-%d %H:%M:%S}"
    return f"[{formatted_time}] {message}"

log = log_message("System started successfully.")
print(log)

print("\n" + "="*50 + "\n")

# 4. Controlling Decimal Precision

# Example floating-point number
number = 1234.56789

# Rounding to 2 decimal places
formatted_number_2f = f"{number:.2f}"
print(f"Rounded number (2 decimal places): {formatted_number_2f}")

# Rounding to no decimal places
formatted_number_0f = f"{number:.0f}"
print(f"Rounded number (no decimal places): {formatted_number_0f}")

# Combining with thousands separators
formatted_number_sep = f"{number:,.2f}"
print(f"Formatted with separators and 2 decimal places: {formatted_number_sep}")

# Scientific notation
large_number = 1234567890.123456
formatted_sci_notation = f"{large_number:.2e}"
print(f"Scientific notation: {formatted_sci_notation}")

# Practical example: financial calculations
price = 49.999
discount = 0.05
final_price = price * (1 - discount)
formatted_price = f"${final_price:,.2f}"
print(f"Final price after discount: {formatted_price}")

print("\n" + "="*50 + "\n")

# 5. Simplifying Debugging with F-Strings

# Basic debugging with F-strings
a = 5
b = 10
result = a + b
print(f"The sum of {a} and {b} is {result}.")

# Using the = syntax for debugging
print(f"{a=} + {b=} = {a + b}")

# Practical example: debugging complex expressions
x = 3
y = 4
z = 5
print(f"{x=} * {y=} + {z=} = {x * y + z}")

# Debugging with string variables
name = "Alice"
greeting = f"Hello, {name}!"
print(f"{greeting=}")
