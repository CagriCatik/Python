import time

# Create two matrices as nested lists
matrix_a = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]

matrix_b = [[9, 8, 7],
            [6, 5, 4],
            [3, 2, 1]]

# Perform matrix multiplication using nested loops with Python lists
start_time = time.time()
result_matrix = [[sum(a * b for a, b in zip(row_a, col_b)) for col_b in zip(*matrix_b)] for row_a in matrix_a]
end_time = time.time()

print("Python List Matrix Multiplication Time:", end_time - start_time, "seconds")
