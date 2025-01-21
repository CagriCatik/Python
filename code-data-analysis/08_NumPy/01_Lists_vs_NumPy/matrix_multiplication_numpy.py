import numpy as np
import time

# Create two matrices as Numpy arrays
matrix_a = np.array([[1, 2, 3],
                     [4, 5, 6],
                     [7, 8, 9]])

matrix_b = np.array([[9, 8, 7],
                     [6, 5, 4],
                     [3, 2, 1]])

# Perform matrix multiplication using Numpy arrays
start_time = time.time()
result_matrix = np.dot(matrix_a, matrix_b)
end_time = time.time()

print("Numpy Array Matrix Multiplication Time:", end_time - start_time, "seconds")
