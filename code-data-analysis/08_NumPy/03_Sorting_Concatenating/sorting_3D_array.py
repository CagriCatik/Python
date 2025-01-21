import numpy as np

# Creating a 3D array
arr_3d = np.array([[[1, 2, 3],
                    [4, 5, 6]],
                   [[7, 8, 9],
                    [10, 11, 12]]])

# Sorting the array based on sum of values in each row
sorted_arr_3d = arr_3d[np.sum(arr_3d, axis=(1, 2)).argsort()]

print("Sorted 3D Array by sum of values in each row:")
print(sorted_arr_3d)
