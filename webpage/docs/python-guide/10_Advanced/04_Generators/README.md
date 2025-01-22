
# Generators in Python

Welcome to this tutorial on generators in Python! Generators are a powerful concept that offers memory efficiency and lazy evaluation. Let's dive into the basics and explore some examples.

## Introduction to Generators

Generators in Python are a way to create iterators using a function. They are memory-efficient compared to lists, tuples, and most other iterables.

```python
from typing import Generator

# Define a simple generator function
def five_numbers() -> Generator[int, None, None]:
    for i in range(1, 6):
        yield i

# Use the generator
numbers = five_numbers()

# Retrieve and print values
for _ in range(5):
    print(next(numbers))

# Output:
# 1
# 2
# 3
# 4
# 5
```

Generators use the `yield` keyword to provide values one at a time, making them suitable for scenarios where memory efficiency is crucial.

## Memory Efficiency with Large Data Sets

Generators shine when dealing with large data sets. In this example, we simulate a massive amount of data.

```python
def huge_data() -> Generator[int, None, None]:
    for i in range(1, 100000000001):
        yield i

data = huge_data()

# Retrieve and print values
for _ in range(200):
    print(next(data))
```

Generators allow you to work with massive data sets without loading everything into memory at once.

## Generating Different Data Types

Generators can yield any type of data, not just integers. Here's an example with strings.

```python
def generate_vowels() -> Generator[str, None, None]:
    vowels = ['a', 'e', 'i', 'o', 'u']
    for vowel in vowels:
        yield vowel

vowels_generator = generate_vowels()

# Retrieve and print values
for _ in range(3):
    print(next(vowels_generator))

# Output:
# a
# e
# i
```

Generators can be used to create iterators for different data types, making them versatile.

## Handling Exhaustion

Generators are exhaustive; once you retrieve a value, it's gone. Attempting to get more values than available will raise a `StopIteration` exception.

```python
try:
    print(next(vowels_generator))
except StopIteration:
    print("The generator is empty.")
```

This exception signals the end of the generator. In a for loop, this is handled implicitly.

Generators are a powerful tool for efficient iteration and lazy evaluation in Python. Consider using them when dealing with large data sets or when memory efficiency is crucial. Happy coding!
