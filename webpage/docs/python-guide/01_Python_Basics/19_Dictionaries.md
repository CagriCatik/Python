# Dictionary

In Python, dictionaries provide a convenient way to store data using a key-value pair structure. This part introduces you to the basics of dictionaries and includes code snippets with examples.

## Creating a Dictionary

To create a dictionary, use curly brackets `{}` and insert key-value pairs separated by commas. Here's an example with user data:

```python
users = {
    'Bob': 1,
    'Luigi': 2
}
print(users)  # Output: {'Bob': 1, 'Luigi': 2}
```

You can create an empty dictionary by using empty curly brackets.

```python
empty_dict = {}
print(empty_dict)  # Output: {}
```

## Accessing Elements

To retrieve a value, refer to the key using square brackets. For example:

```python
print(users['Luigi'])  # Output: 2
```

Attempting to access a non-existing key will result in a `KeyError`.

## Nested Dictionaries

Dictionaries can be nested. Here's an example with weather data:

```python
weather_data = {
    'time': 12,
    'weather': {
        'morning': 'rain',
        'evening': 'more rain'
    }
}
print(weather_data['time'])                    # Output: 12
print(weather_data['weather']['morning'])      # Output: rain
```

## Modifying and Deleting Elements

You can add, modify, or delete key-value pairs in a dictionary.

### Adding a new element:

```python
users[3] = 'Mario'
print(users)  # Output: {'Bob': 1, 'Luigi': 2, 3: 'Mario'}
```

### Modifying an element:

```python
users[1] = 'James'
print(users)  # Output: {'James': 1, 'Luigi': 2, 3: 'Mario'}
```

### Deleting an element:

```python
users.pop(2)
print(users)  # Output: {'James': 1, 3: 'Mario'}
```

Alternatively:

```python
del users[2]
print(users)  # Output: {'James': 1, 3: 'Mario'}
```

### Clearing the entire dictionary:

```python
users.clear()
print(users)  # Output: {}
```

These basic operations should give you a good start with Python dictionaries. As you progress, you'll discover more advanced use cases and applications for this versatile data structure. Happy coding!
