# Sets

In Python, sets are a data type similar to lists but with distinct characteristics. Sets have no guaranteed order, and they cannot contain duplicate elements. This makes sets useful for situations where uniqueness and order are not crucial, and you need to perform operations like adding and removing elements efficiently.

## Creating a Set

To create a set, use curly brackets `{}` and insert the values inside. Here's an example:

```python
# Creating a set
elements = {99, True, 'Bob'}

# Printing the set
print(elements)
```

The order of elements in the set is not guaranteed, and it may vary each time the script runs.

## Mutating Sets

Sets can be mutated by adding, removing, or clearing elements. Here are some common set operations:

### Adding Elements

```python
# Adding elements to the set
elements.add('James')
# Print the updated set
print(elements)  # Order may vary
```

### Removing Elements

```python
# Removing a specific element
elements.remove('Bob')
# Print the set without 'Bob'
print(elements)
```

### Removing a Random Element

```python
# Removing a random element using pop
elements.pop()
# Print the updated set
print(elements)
```

### Clearing the Set

```python
# Clearing the set
elements.clear()
# Print the empty set
print(elements)
```

## Creating an Empty Set

To create an empty set, use the set constructor with parentheses:

```python
# Creating an empty set
empty_set = set()
# Print the empty set
print(empty_set)
```

Note: Using `{}` to represent an empty set may create a dictionary, not a set.

## Limitations of Sets

Since sets have no guaranteed order, indexing is not supported. Attempting to access elements using index notation will result in a `TypeError`.

```python
# This will raise a TypeError
# Indexing is not supported for sets
# elements[0]
```

Remember that sets are useful when order and duplicates are not essential, making them suitable for various applications.
