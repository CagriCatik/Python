def print_person_info(people):
    """
    This function takes a list of tuples containing person information and prints the name and first hobby.
    """
    for name, _, [first_hobby, *rest_hobbies] in people:
        print(f"Name: {name}, First Hobby: {first_hobby}")

# List of tuples containing person information
people = [
    ("Alice", 30, ["reading", "hiking", "coding"]),
    ("Bob", 25, ["movies", "gaming"]),
    ("Charlie", 35, ["traveling", "photography"]),
]

# Call the function with the list of people
print_person_info(people)
