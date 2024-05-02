import threading
import numpy as np

# Example function for matrix multiplication
def multiply_matrices(matrix1, matrix2, result, start_row, end_row):
    for i in range(start_row, end_row):
        for j in range(matrix2.shape[1]):
            result[i][j] = np.dot(matrix1[i], matrix2[:, j])

def main():
    matrix1 = np.random.rand(100, 100)
    matrix2 = np.random.rand(100, 100)
    result = np.zeros((100, 100))

    num_threads = 4
    threads = []

    # Divide the work among threads
    rows_per_thread = 100 // num_threads
    for i in range(num_threads):
        start_row = i * rows_per_thread
        end_row = (i + 1) * rows_per_thread if i < num_threads - 1 else 100
        thread = threading.Thread(target=multiply_matrices, args=(matrix1, matrix2, result, start_row, end_row))
        threads.append(thread)
        thread.start()

    # Wait for all threads to finish
    for thread in threads:
        thread.join()

    print("Matrix multiplication completed.")

if __name__ == "__main__":
    main()
