import numpy as np

# Creating a 1D array
arr_1d = np.array([1, 2, 3, 4, 5])

# Checking if the array is 1D, 2D, etc.
if arr_1d.ndim == 1:
    print("This is a 1D array.")
elif arr_1d.ndim == 2:
    print("This is a 2D array.")
else:
    print("This array has", arr_1d.ndim, "dimensions.")

# Checking if the array is a vector, matrix, or tensor
if arr_1d.ndim == 1:
    print("This is a vector.")
elif arr_1d.ndim == 2:
    print("This is a matrix.")
else:
    print("This is a tensor.")
