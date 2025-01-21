import numpy as np

# Creating a 2D array
data = np.array([[1, 5, 9],
                 [2, 4, 8],
                 [3, 6, 7]])

# Sorting the array based on values in the second column
sorted_data = data[data[:,1].argsort()]

print("Sorted Array by the second column:")
print(sorted_data)
