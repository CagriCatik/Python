# Creating a list of numbers
numbers_list = [1, 2, 3, 4, 5]

# Adding a new element to the list
numbers_list.append(6)

# Displaying the modified list
print("Modified List:", numbers_list)

# Converting the list to a string
numbers_string = ', '.join(map(str, numbers_list))

# Displaying the string representation
print("List as String:", numbers_string)


# Defining a dictionary for user information
user_info = {
    "username": "john_doe",
    "age": 28,
    "is_student": False,
    "grades": [90, 85, 92]
}

# Displaying user information
print("User Info:")
print("Username:", user_info["username"])
print("Age:", user_info["age"])
print("Is Student?", user_info["is_student"])
print("Grades:", user_info["grades"])


# Creating sets of positive and negative numbers
positive_numbers = {1, 2, 3, 4, 5}
negative_numbers = {-5, -4, -3, -2, -1}

# Performing set operations
union_set = positive_numbers.union(negative_numbers)
intersection_set = positive_numbers.intersection(negative_numbers)

# Displaying the results
print("Union of Sets:", union_set)
print("Intersection of Sets:", intersection_set)

# Checking if a number is present in either set
check_number = 3
is_in_positive = check_number in positive_numbers
is_in_negative = check_number in negative_numbers

# Displaying the results
print(f"{check_number} in Positive Set:", is_in_positive)
print(f"{check_number} in Negative Set:", is_in_negative)
