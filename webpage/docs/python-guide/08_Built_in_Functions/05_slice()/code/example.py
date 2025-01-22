def dynamic_slice(iterable, start, end):
    # Create a dynamic slice object based on user input
    custom_slice = slice(start, end)

    # Print the sliced iterable
    print(iterable[custom_slice])

# Example usage
text = "This is a complex example for dynamic slicing"
user_start = int(input("Enter the start index: "))
user_end = int(input("Enter the end index: "))

dynamic_slice(text, user_start, user_end)


# Define a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Create slice objects for extracting rows and columns
row_slice = slice(1, 3)
column_slice = slice(None, None, 2)

# Extract a submatrix using the slice objects
submatrix = [row[column_slice] for row in matrix[row_slice]]

# Print the resulting submatrix
for row in submatrix:
    print(row)


# Original list of numbers
numbers = [-5, 2, -8, 10, -3, 15, -7, 20]

# Create a slice object for filtering positive numbers
positive_slice = slice(None, None)

# Apply the slice to filter positive numbers
positive_numbers = [num for num in numbers[positive_slice] if num > 0]

# Print the resulting list of positive numbers
print(positive_numbers)
