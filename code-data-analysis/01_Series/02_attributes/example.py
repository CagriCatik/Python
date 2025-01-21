import pandas as pd

# Define lists
numbers = [1, 2, 3, 4, 5]
letters = ['A', 'B', 'C', 'D', 'E']

# Create Series objects
number_series = pd.Series(numbers)
letter_series = pd.Series(letters)

# 1. dtype
print("Data type of number_series:", number_series.dtype)
print("Data type of letter_series:", letter_series.dtype)

# 2. values
print("\nValues of letter_series:")
print(letter_series.values)

# 3. index
print("\nIndex of number_series:")
print(number_series.index)

# 4. has nans?
incomplete_series = pd.Series(['A', 'B', None])
print("\nDoes incomplete_series have NaNs?", incomplete_series.hasnans)

# 5. shape
print("\nShape of number_series:", number_series.shape)

# 6. size
print("\nSize of letter_series:", letter_series.size)
