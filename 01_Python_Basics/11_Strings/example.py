# Using f-strings for dynamic content
user_name = "John"
age = 25
message = f"Hello, {user_name}! You are {age} years old."

# Reversing a string
reversed_message = message[::-1]

# Counting occurrences of a character
char_count = message.count('l')

# Displaying the results
print("Original Message:", message)
print("Reversed Message:", reversed_message)
print("Count of 'l' in the message:", char_count)


# Creating a multi-line template
template = '''
Name: {}
Age: {}
Occupation: {}
'''

# User input for dynamic content
user_name = input("Enter your name: ")
user_age = input("Enter your age: ")
user_occupation = input("Enter your occupation: ")

# Formatting the template with user input
formatted_template = template.format(user_name, user_age, user_occupation)

# Displaying the formatted result
print("User Profile:")
print(formatted_template)


# CSV string representing user data
csv_data = "John,Doe,25,Software Engineer"

# Splitting the CSV string into a list
user_info_list = csv_data.split(',')

# Unpacking the list into variables
first_name, last_name, age, occupation = user_info_list

# Converting age to an integer
age = int(age)

# Creating a formatted message
user_info_message = f"{first_name} {last_name} is {age} years old and works as a {occupation}."

# Displaying the user information
print("User Information:")
print(user_info_message)
