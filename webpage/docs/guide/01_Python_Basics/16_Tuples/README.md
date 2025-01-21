# Tuple

In Python, tuples are similar to lists but with a key difference - they are immutable. Once a tuple is created, it cannot be modified, making them more memory-efficient. The defining factor for a tuple is the comma (`,`), not the parentheses. While tuples are often seen wrapped in parentheses, it's the comma that denotes the tuple.

## Creating Tuples

### Basic Tuple

```python
# Tuple without parentheses
items = 1, True, 'text'
print(type(items))  # Output: <class 'tuple'>
```

### Single-Element Tuple

```python
# Single-element tuple
single_item_tuple = (42,)
print(type(single_item_tuple))  # Output: <class 'tuple'>
```

### Empty Tuple

```python
# Empty tuple
empty_tuple = ()
print(type(empty_tuple))  # Output: <class 'tuple'>
```

## Using Tuples

### Example: Coordinates

```python
# Tuple for coordinates
coordinates = 1.5, 2.5

# Attempting to modify the tuple will raise a TypeError
try:
    coordinates[0] = 10
except TypeError as e:
    print(f"Error: {e}")

# Output: Error: 'tuple' object does not support item assignment
```

### Tuple Methods

```python
# Tuple methods (count and index)
print(coordinates.count(1.5))  # Output: 1
print(coordinates.index(2.5))  # Output: 1
```

## Annotating Tuples

When annotating tuples, specify the data types by position.

```python
# Annotating tuple elements
annotated_coordinates: tuple[float, float] = 1.5, 2.5
```

## Choosing Between Lists and Tuples

Remember, if your data needs to change dynamically, use a list. If the data is constant, choose a tuple.

**List vs. Tuple Summary:**

- Lists for dynamic data with add and remove operations.
- Tuples for immutable, constant data.
