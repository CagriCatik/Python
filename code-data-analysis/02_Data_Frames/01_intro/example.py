import pandas as pd

# Method 1: Using a Dictionary of Lists
data_dict = {'A': [1, 2, 3],
             'B': [4, 5, 6],
             'C': [7, 8, 9]}
df1 = pd.DataFrame(data_dict)

# Method 2: Using a List of Lists with Specified Index and Columns
data_list = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]]
index = ['index1', 'index2', 'index3']
columns = ['A', 'B', 'C']
df2 = pd.DataFrame(data_list, index=index, columns=columns)

# Accessing Columns
print("Accessing column 'A' using dot notation:")
print(df1.A)
print()

print("Accessing column 'A' using indexing:")
print(df1['A'])
print()

# DataFrame Attributes
print("Shape of DataFrame:")
print(df1.shape)
print()

print("Size of DataFrame:")
print(df1.size)
print()

print("Index of DataFrame:")
print(df1.index)
print()

print("Columns of DataFrame:")
print(df1.columns)
print()

print("Axis information:")
print(df1.axes)
print()

print("Data types of columns:")
print(df1.dtypes)
print()

print("Values of DataFrame as an array:")
print(df1.values)
