# Importing pandas
import pandas as pd

# 3. Creating Series
# Creating a Series from a list of numbers
numbers = [1, 2, 3, 4, 5]
series_from_list = pd.Series(numbers)
print("Series from list:")
print(series_from_list)
print("--------------------------")

# Creating a Series from a dictionary
data = {'Name': 'Luigi', 'Age': 26, 'Work': 'Unemployed'}
series_from_dict = pd.Series(data)
print("Series from dictionary:")
print(series_from_dict)
print("--------------------------")

# 4. Indexing and Data Types
# Custom indexing
custom_index = ['Letter One', 'Letter Two', 'Letter Three']
# Correcting the length of index to match the length of data
series_custom_index = pd.Series(numbers[:3], index=custom_index)
print("Series with custom index:")
print(series_custom_index)
print("--------------------------")

# Specifying data type
series_custom_dtype = pd.Series(numbers, dtype=float)
print("Series with custom data type:")
print(series_custom_dtype)
print("--------------------------")

# 5. Handling Missing Values
# Handling missing values
data_missing = {'Name': 'Luigi', 'Age': 26}
series_missing = pd.Series(data_missing, index=['Name', 'Age', 'Job'])
print("Series with missing values:")
print(series_missing)
