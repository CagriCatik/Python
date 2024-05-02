def greet_person(name, greeting):
    return f"{greeting}, {name}!"

# Example usage
print(greet_person("Bob", "Hello"))
print(greet_person("Alice", "Hi"))
print(greet_person("Charlie", "Hola"))


# Initial values
num1 = 5
num2 = 3

# Operations
sum_result = num1 + num2
product_result = num1 * num2

# Display results
print(f"The sum of {num1} and {num2} is: {sum_result}")
print(f"The product of {num1} and {num2} is: {product_result}")

# Changing values
num1 = 8
num2 = 2

# Recalculate and display
print(f"After changing values, the new sum is: {num1 + num2}")
print(f"After changing values, the new product is: {num1 * num2}")


# Configurable constants
DISCOUNT_RATE = 0.2
TAX_RATE = 0.08

# Function to calculate final price
def calculate_final_price(initial_price):
    discounted_price = initial_price * (1 - DISCOUNT_RATE)
    final_price = discounted_price * (1 + TAX_RATE)
    return final_price

# Example usage
initial_price = 100
final_price = calculate_final_price(initial_price)
print(f"The final price after discount and tax is: ${final_price:.2f}")
