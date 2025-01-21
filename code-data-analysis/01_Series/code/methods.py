import pandas as pd

# Creating a series with floating-point numbers and a missing value (None)
values = pd.Series([1.2, 3.5, 2.8, None, 4.0, 0.5])

# Additional values for demonstration
more_values = pd.Series([2.0, 1.5, 3.0, 0.8, 2.5, 1.0])

# Concatenate the two series
combined_values = pd.concat([values, more_values], ignore_index=True)

# Handling null values by filling them with the mean of the series
values_filled = combined_values.fillna(combined_values.mean())

# Using max method to get the maximum value
max_value = values_filled.max()

# Using min method to get the minimum value
min_value = values_filled.min()

# Using sum method to get the sum of all values
sum_values = values_filled.sum()

# Using mean method to get the average of the series
average_value = values_filled.mean()

# Using idxmax and idxmin to get the index of max and min values
index_max = values_filled.idxmax()
index_min = values_filled.idxmin()

# Using isnull method to check for null values in the series
null_check = values_filled.isnull()

# Using round method to round off decimals to two decimal places
rounded_values = values_filled.round(2)

# Filtering values greater than the average
filtered_values = values_filled[values_filled > average_value]

# Applying a custom function to the series
def custom_function(x):
    return x ** 2 + 1

transformed_values = values_filled.apply(custom_function)

# Displaying the results
print("Original Values:\n", combined_values)
print("\nFilled Values:\n", values_filled)
print("\nMax Value:", max_value)
print("Min Value:", min_value)
print("Sum of Values:", sum_values)
print("Average Value:", average_value)
print("Index of Max Value:", index_max)
print("Index of Min Value:", index_min)
print("Null Check:\n", null_check)
print("\nRounded Values:\n", rounded_values)
print("\nFiltered Values (greater than average):\n", filtered_values)
print("\nTransformed Values (custom function):\n", transformed_values)
