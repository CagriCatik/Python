import numpy as np

# Define two matrices
matrix_a = np.array([[1, 2], [3, 4]])
matrix_b = np.array([[5, 6], [7, 8]])

# Matrix multiplication
matrix_mult = np.dot(matrix_a, matrix_b)

# Matrix addition
matrix_add = np.add(matrix_a, matrix_b)

print("Matrix A:")
print(matrix_a)
print("\nMatrix B:")
print(matrix_b)
print("\nMatrix Multiplication (A * B):")
print(matrix_mult)
print("\nMatrix Addition (A + B):")
print(matrix_add)
