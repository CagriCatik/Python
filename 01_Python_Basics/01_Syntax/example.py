# Correct syntax - Accepting user input
user_name = input("Enter your name: ")
print("Hello, " + user_name + "!")


# Correct syntax - Using conditional statements
number = int(input("Enter a number: "))

if number > 0:
    print("The number is positive.")
elif number == 0:
    print("The number is zero.")
else:
    print("The number is negative.")


# Correct syntax - Working with lists and loops
fruits = ["apple", "orange", "banana"]

for fruit in fruits:
    print("I like", fruit)

# List comprehension
squared_numbers = [x**2 for x in range(1, 6)]
print("Squared numbers:", squared_numbers)
