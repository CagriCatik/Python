
## Methods

In the world of data manipulation and analysis in Python, Pandas is a powerhouse library. It offers a plethora of functionalities for handling structured data. One of the fundamental data structures in Pandas is the Series, which represents a one-dimensional labeled array. In this tutorial, we will delve into various methods available for manipulating and analyzing Series data.

### 1. Importing Pandas Library

Before we start working with Pandas, we need to import the library. Conventionally, it's imported as `pd` for brevity.

```python
import pandas as pd
```

### 2. Creating a Series

Let's start by creating a Series with some sample data. We'll include floating-point numbers and a missing value (denoted as `None` in Python).

```python
values = pd.Series([1.2, 2.4, 3.6, None, 4.8])
```

### 3. Basic Methods for Series

#### 3.1. `max()`: Maximum Value

This method returns the maximum value from the Series.

```python
max_value = values.max()
print("Maximum value:", max_value)
```

#### 3.2. `min()`: Minimum Value

Returns the minimum value from the Series.

```python
min_value = values.min()
print("Minimum value:", min_value)
```

#### 3.3. `sum()`: Sum of Values

Calculates the sum of all values in the Series.

```python
sum_of_values = values.sum()
print("Sum of values:", sum_of_values)
```

#### 3.4. `mean()`: Mean (Average) of Values

Computes the average of all values in the Series.

```python
average_value = values.mean()
print("Average value:", average_value)
```

#### 3.5. `idxmax()`: Index of Maximum Value

Returns the index of the maximum value in the Series.

```python
max_index = values.idxmax()
print("Index of maximum value:", max_index)
```

#### 3.6. `idxmin()`: Index of Minimum Value

Returns the index of the minimum value in the Series.

```python
min_index = values.idxmin()
print("Index of minimum value:", min_index)
```

#### 3.7. `isnull()`: Check for Null Values

Creates a boolean Series indicating whether each value is null or not.

```python
null_values = values.isnull()
print("Null values:", null_values)
```

#### 3.8. `round()`: Round Values

Rounds the values in the Series to a specified number of decimal places.

```python
rounded_values = values.round(2)  # Round to 2 decimal places
print("Rounded values:", rounded_values)
```
 