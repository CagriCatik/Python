# Example 1: Printing a String Multiple Times
print("Example 1: Printing a String Multiple Times")
text = "Hello World"
for i in range(3):
    print(text)
print("\n")  # Newline for better readability between examples

# Example 2: Using the Loop Variable
print("Example 2: Using the Loop Variable")
for i in range(3):
    print(f"{i} Hello World")
print("\n")

# Example 3: Iterating Over a List
print("Example 3: Iterating Over a List")
people = ["Bob", "James", "Maria"]
for person in people:
    print(person)
print("\n")

# Example 4: Adding Conditional Logic
print("Example 4: Adding Conditional Logic")
for person in people:
    if len(person) > 4:
        print(f"{person} has a long name")
    else:
        print(f"{person} has a short name")
print("\n")

# Example 5: Iterating Over a Tuple
print("Example 5: Iterating Over a Tuple")
numbers = (1, 2, 3, 4, 5)
for number in numbers:
    print(number)
