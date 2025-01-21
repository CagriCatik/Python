import numpy as np

# Creating a 1D array from a Python list
arr_1d = np.array([1, 2, 3, 4, 5])

# Creating a 2D array from a nested Python list
nested_list = [[1, 2, 3], [4, 5, 6]]
arr_2d = np.array(nested_list)

print("1D Array:")
print(arr_1d)
print("2D Array:")
print(arr_2d)

# Accessing elements of a 2D array
print("\nAccessing elements of a 2D array:")
print("First element of 2D array:", arr_2d[0])
print("Element at index (1,1) of 2D array:", arr_2d[1][1])
print("Last element of 2D array:", arr_2d[-1])
