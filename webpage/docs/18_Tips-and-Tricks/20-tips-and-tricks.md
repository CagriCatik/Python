# 20 Essential Tips & Tricks in Python

## 1. Swapping Variables

Swapping variables in Python can be done efficiently in a single line using tuple unpacking. This method allows you to swap the values of two variables without using a temporary variable.

### Example:
```python
a = "text"
b = 100
print(f"Before: a = {a}, b = {b}")
a, b = b, a
print(f"After: a = {a}, b = {b}")
```

### Explanation:
- `a, b = b, a` swaps the values of `a` and `b`.
- This can be extended to more variables as well.

### Example with Three Variables:
```python
a, b, c = "text", 100, "more text"
print(f"Before: a = {a}, b = {b}, c = {c}")
a, b, c = c, b, a
print(f"After: a = {a}, b = {b}, c = {c}")
```

## 2. Reversing Iterables

Python offers simple methods to reverse the elements of an iterable.

### Using `reversed()` Function:
```python
lst = [1, 2, 3, 4, 5]
reversed_lst = list(reversed(lst))
print(reversed_lst)
```

### Using Slicing:
```python
string = "Hello"
reversed_string = string[::-1]
print(reversed_string)
```

## 3. String Multiplication

You can multiply strings in Python to repeat them.

### Example:
```python
shout = "A" * 20 + "H"
print(shout)  # Outputs: AAAAAAAAAAAAAAAAAAAAH

print("Bob" * 2)  # Outputs: BobBob
```

## 4. Oneline Conditions

Conditional expressions can be written in a concise form using the ternary operator.

### Example:
```python
number = 10
result = "even" if number % 2 == 0 else "odd"
print(result)
```

## 5. Concatenating Strings

Combining a list of strings into a single string can be done using the `join()` method.

### Example:
```python
emails = ["email1@example.com", "email2@example.com", "email3@example.com"]
formatted_emails = ", ".join(emails)
print(formatted_emails)
```

## 6. Accessing Dictionary Keys Safely

Use the `get` method to safely access dictionary values, avoiding key errors.

### Example:
```python
info = {"name": "Alice"}
age = info.get("age", "default")
print(age)  # Outputs: default
```

## 7. Using `setdefault`

The `setdefault` method provides a way to retrieve and set a default value in a dictionary.

### Example:
```python
scores = {"Alice": 90}
bob_score = scores.setdefault("Bob", 0)
print(scores)  # Outputs: {'Alice': 90, 'Bob': 0}
```

## 8. Counters

The `collections.Counter` class helps in counting the frequency of elements in an iterable.

### Example:
```python
from collections import Counter
letters = ["a", "b", "a", "c", "a", "b", "c"]
letter_counts = Counter(letters)
print(letter_counts.most_common(2))  # Outputs: [('a', 3), ('b', 2)]
```

## 9. Enumerate

The `enumerate` function adds a counter to an iterable.

### Example:
```python
letters = ['a', 'b', 'c']
for index, letter in enumerate(letters, start=1):
    print(index, letter)
```

## 10. Dictionary Merging

Merging dictionaries can be done using the `|` operator.

### Example:
```python
dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}
merged_dict = dict1 | dict2
print(merged_dict)
```

## 11. Underscore as a Separator

Underscores can be used to improve the readability of large numbers.

### Example:
```python
big_number = 1_000_000
print(big_number)  # Outputs: 1000000
```

## 12. Callable Classes

Classes can be made callable by defining the `__call__` method.

### Example:
```python
class Multiplier:
    def __init__(self, value):
        self.value = value
    
    def __call__(self, other_value):
        return self.value * other_value

double = Multiplier(2)
print(double(10))  # Outputs: 20
```

## 13. Method Chaining

Returning `self` from methods allows for method chaining.

### Example:
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def set_name(self, name):
        self.name = name
        return self
    
    def set_age(self, age):
        self.age = age
        return self

bob = Person("Bob", 29).set_name("James").set_age(30)
print(bob.name, bob.age)  # Outputs: James 30
```

## 14. Printing Iterables with Custom Separators

Unpacking an iterable in the `print` function allows custom separators and end characters.

### Example:
```python
foods = ["apple", "banana", "cherry"]
print(*foods, sep=", ", end=".\n")
```

## 15. Custom `__repr__` Method

Implementing `__repr__` improves the readability of class instances when printed.

### Example:
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __repr__(self):
        return f"Person(name={self.name}, age={self.age})"

bob = Person("Bob", 29)
print(bob)
```

## 16. First and Last Elements of an Iterable

You can extract the first and last elements of an iterable using unpacking.

### Example:
```python
people = ["Bob", "James", "George", "Fred", "Luigi", "Sophia"]
first, *_, last = people
print(first, last)  # Outputs: Bob Sophia
```

## 17. Inline Debugging

Inline debugging using formatted string literals can quickly show variable names and values.

### Example:
```python
name = "Alice"
age = 30
print(f"{name=}, {age=}, {len(name)=}")
```

## 18. Rounding Numbers

The `round` function can round numbers to a specified number of decimal places or to a specified digit.

### Example:
```python
number = 12.34567
print(round(number, 2))  # Outputs: 12.35
print(round(number, -1))  # Outputs: 10
```

## 19. String Replacement

String replacement can be controlled to avoid partial replacements.

### Example:
```python
sentence = "The tired red fox on the red farm ate a bored red pig."
corrected_sentence = sentence.replace(" red", " blue")
print(corrected_sentence)
```

## 20. Custom Keys for `max` and `min`

Custom keys can be provided to `max` and `min` functions to determine the criteria for comparison.

### Example:
```python
names = ["Timothy", "Bob", "James", "Zebra", "Amanda", "Anna", "Luigi"]
max_name = max(names, key=lambda x: x.lower().count('a'))
print(max_name)  # Outputs: Amanda
```

This tutorial has covered essential Python tips and tricks that can enhance your coding practices. Each tip is designed to make your code more efficient, readable, and Pythonic.
