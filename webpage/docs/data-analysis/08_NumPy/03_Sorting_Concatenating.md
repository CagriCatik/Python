# Sorting and Concatenating Arrays 

In this tutorial, we'll explore how to sort and concatenate arrays using NumPy, a powerful library for numerical computing in Python.

## Sorting Arrays

To sort an array or a list, NumPy provides the `sort()` method. Let's dive into a simple example:

```python
import numpy as np

# Creating an array of random numbers
arr = np.array([25, 6, 62, 3, 15])

# Sorting the array
sorted_arr = np.sort(arr)
print("Sorted Array:", sorted_arr)
```

Output:

```
Sorted Array: [ 3  6 15 25 62]
```

## Concatenating Arrays

Concatenating arrays in NumPy is straightforward using the `concatenate()` method. Let's concatenate two arrays:

```python
# Creating two arrays
array_a = np.array([1, 2, 3])
array_b = np.array([4, 5, 6])

# Concatenating arrays
concatenated_array = np.concatenate((array_a, array_b))
print("Concatenated Array:", concatenated_array)
```

Output:

```
Concatenated Array: [1 2 3 4 5 6]
```

You can also specify the axis for concatenation, similar to Pandas. Let's see an example:

```python
# Creating multidimensional arrays
array_1 = np.array([[1, 2], [3, 4]])
array_2 = np.array([[5, 6], [7, 8]])

# Concatenating arrays along axis 1 (vertically)
concatenated_array_axis_1 = np.concatenate((array_1, array_2), axis=1)
print("Concatenated Array along axis 1:", concatenated_array_axis_1)
```

Output:

```
Concatenated Array along axis 1:
[[1 2 5 6]
 [3 4 7 8]]
```

In this example, arrays `array_1` and `array_2` were concatenated along axis 1, resulting in vertical concatenation.
