# Example 1: Formatting Data
name = "John"
age = 25
height = 1.75

print(f"Person: {name}, Age: {age}, Height: {height:.2f} meters")


# Example 2: Matrix Printing
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("Matrix:")
for row in matrix:
    print(*row, sep="\t")


# Example 3: Dynamic Separator and End Character
items = ["apple", "banana", "orange", "grape"]
separator = input("Enter a separator: ")
end_character = input("Enter an end character: ")

print("Fruits:", *items, sep=separator, end=end_character)
