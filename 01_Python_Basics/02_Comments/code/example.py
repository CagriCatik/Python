# This function performs matrix multiplication
def matrix_multiply(matrix1, matrix2):
    """
    Performs matrix multiplication.

    Args:
        matrix1 (list): The first matrix.
        matrix2 (list): The second matrix.

    Returns:
        list: The result of matrix multiplication.
    """
    result = []
    # Check if matrices can be multiplied
    if len(matrix1[0]) != len(matrix2):
        raise ValueError("Matrices dimensions are not compatible for multiplication.")
    
    # Iterate through rows of the first matrix
    for i in range(len(matrix1)):
        # Initialize the result row
        result_row = []
        # Iterate through columns of the second matrix
        for j in range(len(matrix2[0])):
            # Calculate the dot product of the current row and column
            dot_product = sum(matrix1[i][k] * matrix2[k][j] for k in range(len(matrix2)))
            result_row.append(dot_product)
        # Append the result row to the final result
        result.append(result_row)

    return result

# Example usage
matrix_a = [[1, 2, 3], [4, 5, 6]]
matrix_b = [[7, 8], [9, 10], [11, 12]]
result_matrix = matrix_multiply(matrix_a, matrix_b)
print(result_matrix)
