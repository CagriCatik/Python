import os
from typing import List

def matrix_multiply(matrix1: List[List[int]], matrix2: List[List[int]]) -> List[List[int]]:
    """
    Multiplies two matrices and returns the result.

    Parameters:
    - matrix1 (List[List[int]]): The first matrix.
    - matrix2 (List[List[int]]): The second matrix.

    Returns:
    - List[List[int]]: The result of matrix multiplication.
    """
    result = [[0 for _ in range(len(matrix2[0]))] for _ in range(len(matrix1))]
    
    for i in range(len(matrix1)):
        for j in range(len(matrix2[0])):
            for k in range(len(matrix2)):
                result[i][j] += matrix1[i][k] * matrix2[k][j]

    return result


matrix_a = [[1, 2, 3], [4, 5, 6]]
matrix_b = [[7, 8], [9, 10], [11, 12]]

result_matrix = matrix_multiply(matrix_a, matrix_b)
print("Result of matrix multiplication:")
for row in result_matrix:
    print(row)





def count_words_in_file(file_path: str) -> dict:
    """
    Reads a text file, counts word occurrences, and returns a dictionary.

    Parameters:
    - file_path (str): The path to the text file.

    Returns:
    - dict: A dictionary with word frequencies.
    """
    word_freq = {}

    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()
            for word in words:
                word = word.lower()  # Convert to lowercase for case-insensitive counting
                word_freq[word] = word_freq.get(word, 0) + 1

    return word_freq

file_path = r'G:\python-guide-for-beginners\03_Functions\04_Return_Functions\sample_text.txt'

if os.path.exists(file_path):
    word_frequencies = count_words_in_file(file_path)
    # Rest of your code
else:
    print(f"Error: File '{file_path}' not found.")

word_frequencies = count_words_in_file(file_path)
print("Word frequencies in the file:")
for word, frequency in word_frequencies.items():
    print(f"{word}: {frequency}")



def factorial(n: int) -> int:
    """
    Calculates the factorial of a given number using recursion.

    Parameters:
    - n (int): The input number.

    Returns:
    - int: The factorial of the input number.
    """
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)
    
number = 5
result_factorial = factorial(number)
print(f"The factorial of {number} is {result_factorial}")

