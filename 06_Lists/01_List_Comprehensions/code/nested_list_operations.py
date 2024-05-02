matrix = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flattened_matrix = [element for sublist in matrix for element in sublist]
print(flattened_matrix)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
