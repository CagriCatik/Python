# Series in Pandas

Series are one-dimensional labeled arrays capable of holding various data types, such as integers, strings, floating-point numbers, or Python objects. They serve as the building blocks for more complex data structures like DataFrames.Let's break down the key concepts and demonstrate how to create, manipulate, and utilize Series effectively in Python.

## 1. Introduction to Series

Series are essentially one-dimensional arrays with associated labels, known as the index. This index facilitates efficient data manipulation and retrieval.

## 2. Importing Pandas

Before working with Series, ensure you have Pandas installed. Conventionally, Pandas is imported using the alias `pd`. Here's how to import it:

```python
import pandas as pd
```

## 3. Creating Series

You can create a Series from a Python list or dictionary using the `pd.Series()` constructor.

### 3.1. Creating Series from a List

```python
# Creating a Series from a list of numbers
numbers = [1, 2, 3, 4, 5]
series_from_list = pd.Series(numbers)
print(series_from_list)
```

### 3.2. Creating Series from a Dictionary

```python
# Creating a Series from a dictionary
data = {'Name': 'Luigi', 'Age': 26, 'Work': 'Unemployed'}
series_from_dict = pd.Series(data)
print(series_from_dict)
```

## 4. Indexing and Data Types

### 4.1. Custom Indexing

You can specify custom index labels when creating a Series.

```python
# Custom indexing
custom_index = ['Letter One', 'Letter Two', 'Letter Three']
series_custom_index = pd.Series(numbers, index=custom_index)
print(series_custom_index)
```

### 4.2. Data Types

Series can hold data of various types. Pandas infers the data type unless explicitly specified.

```python
# Specifying data type
series_custom_dtype = pd.Series(numbers, dtype=float)
print(series_custom_dtype)
```

## 5. Handling Missing Values

When creating Series from dictionaries, missing keys result in NaN (Not a Number) values.

```python
# Handling missing values
data_missing = {'Name': 'Luigi', 'Age': 26}
series_missing = pd.Series(data_missing, index=['Name', 'Age', 'Job'])
print(series_missing)
```

## 6. Assignment

- 1. Creating Series:
  - Create a Series named series_numbers from the list [10, 20, 30, 40, 50].
  - Create a Series named series_info from the dictionary {'Name': 'Mario', 'Age': 30, 'Occupation': 'Plumber'}.
- 2. Custom Indexing and Data Types:
  - Create a Series named series_custom_index using the list [100, 200, 300] with custom index labels as ['A', 'B', 'C'].
  - Create a Series named series_custom_dtype using the list [11, 22, 33] with data type explicitly set as float.
- 3. Handling Missing Values:
  - Create a Series named series_missing from the dictionary {'Name': 'Peach', 'Age': 28} with custom index labels as ['Name', 'Age', 'Occupation']. Ensure to handle missing values appropriately.
