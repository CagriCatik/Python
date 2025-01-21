import pandas as pd

# Create a Pandas Series
series = pd.Series([100, 203, 300])

# Create a Pandas DataFrame with nested values
data = {'A': [100, 200, 300], 'B': [200, 400, 600], 'C': [300, 600, 900]}
df = pd.DataFrame(data)

# Perform common operations

# Summation in Series
series_sum = series.sum()
print("Sum of elements in Series:", series_sum)

# Summation in DataFrame
column_sum = df.sum()
print("\nSum of elements in each column of DataFrame:")
print(column_sum)

# Summation along Columns (Axis 1) in DataFrame
row_sum = df.sum(axis=1)
print("\nSum of elements along columns (axis=1) in DataFrame:")
print(row_sum)

# Specifying axis using string representation ('index' or 'columns')
row_sum_string_axis = df.sum(axis='index')  # Equivalent to axis=0
column_sum_string_axis = df.sum(axis='columns')  # Equivalent to axis=1
print("\nSum of elements using string representation of axis:")
print("Row sum:", row_sum_string_axis)
print("Column sum:", column_sum_string_axis)

# Choose based on personal preference and readability
# Longer representation for clarity:
df_max_columns_axis = df.max(axis='columns')
# Shorter representation for concise code:
df_max_columns_axis_short = df.max(axis=1)

# Print the results
print("\nMax value in each row (longer representation):")
print(df_max_columns_axis)
print("\nMax value in each row (shorter representation):")
print(df_max_columns_axis_short)
