import pandas as pd

# Create a Series
values = pd.Series([1.2, 2.4, 3.6, None, 4.8])

# Basic Methods for Series
max_value = values.max()
min_value = values.min()
sum_of_values = values.sum()
average_value = values.mean()
max_index = values.idxmax()
min_index = values.idxmin()
null_values = values.isnull()
rounded_values = values.round(2)

# Print results
print("Maximum value:", max_value)
print("Minimum value:", min_value)
print("Sum of values:", sum_of_values)
print("Average value:", average_value)
print("Index of maximum value:", max_index)
print("Index of minimum value:", min_index)
print("Null values:", null_values)
print("Rounded values:", rounded_values)
