import numpy as np

# Creating arrays with different shapes
array_a = np.array([[1, 2, 3],
                    [4, 5, 6]])
array_b = np.array([[7],
                    [8]])

# Concatenating arrays along axis 1 (horizontally)
concatenated_array = np.concatenate((array_a, array_b), axis=1)

print("Concatenated Array along axis 1:")
print(concatenated_array)
