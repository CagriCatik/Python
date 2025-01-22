# DataFrames in Pandas

In this tutorial, we'll delve into DataFrames in Pandas, a powerful two-dimensional labeled data structure widely used for data manipulation and analysis. We'll cover the fundamentals of DataFrames, how to create them, access their attributes, and perform basic operations.

## Introduction to DataFrames

A DataFrame in Pandas is a two-dimensional labeled data structure with columns of potentially different types. You can think of it as a spreadsheet, SQL table, or a dictionary of Series objects. While Series represent one-dimensional data, DataFrames offer a higher dimensionality, allowing for more complex data representation and manipulation.

### Key Features of DataFrames:

- Two-dimensional structure
- Columns of potentially different types
- Labels for both rows (index) and columns

### Axes in DataFrames:

- The zero axis refers to the index (rows).
- The one axis refers to columns.

## Creating DataFrames

### Method 1: Using a Dictionary of Lists

```python
import pandas as pd

# Define data as a dictionary with lists inside
data = {'A': [value1, value2, value3],
        'B': [value1, value2, value3],
        'C': [value1, value2, value3]}

# Create DataFrame using pd.DataFrame
df = pd.DataFrame(data)

# Display DataFrame
print(df)
```

### Method 2: Using a List of Lists with Specified Index and Columns

```python
# Define data as a list of lists
data = [[value1, value2, value3],
        [value1, value2, value3],
        [value1, value2, value3]]

# Specify index and columns
index = ['index1', 'index2', 'index3']
columns = ['A', 'B', 'C']

# Create DataFrame
df = pd.DataFrame(data, index=index, columns=columns)

# Display DataFrame
print(df)
```

## Accessing Data in DataFrames

### Accessing Columns

You can access columns using dot notation or indexing:

```python
# Access column 'A' using dot notation
print(df.A)

# Access column 'A' using indexing
print(df['A'])
```

## DataFrame Attributes

### Shape:

```python
# Shape of DataFrame
print(df.shape)  # Output: (rows, columns)
```

### Size:

```python
# Size of DataFrame
print(df.size)  # Output: total number of elements
```

### Index:

```python
# Index of DataFrame
print(df.index)
```

### Columns:

```python
# Columns of DataFrame
print(df.columns)
```

### Axis:

```python
# Axis information
print(df.axis)
```

### Data Types:

```python
# Data types of columns
print(df.dtypes)
```

### Values:

```python
# Values of DataFrame as an array
print(df.values)
```
