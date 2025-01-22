# 5 Useful Dunder Methods

Dunder methods, short for "double underscore" methods, are special methods in Python classes that provide functionality for various operations. In this tutorial, we'll explore five useful Dunder methods with code snippets based on the transcript of a video tutorial.

### 1. `__eq__` (Equality Dunder Method)

The `__eq__` method is used to define custom equality comparison behavior for objects. By default, Python compares object equality based on memory addresses. However, sometimes you may want to compare objects based on their attributes.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams
  
    def __eq__(self, other):
        if isinstance(other, Fruit):
            return self.__dict__ == other.__dict__
        return False

# Usage:
apple1 = Fruit(name="apple", grams=100)
apple2 = Fruit(name="apple", grams=100)
orange = Fruit(name="orange", grams=150)

print(apple1 == apple2)  # Output: True
print(apple1 == orange)  # Output: False
```

### 2. `__format__` (Format Dunder Method)

The `__format__` method allows custom formatting when using the `format()` function or formatting strings with curly braces.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams

    def __format__(self, format_spec):
        if format_spec == "kilogram":
            return "{:.2f} kg".format(self.grams / 1000)
        elif format_spec == "pounds":
            return "{:.2f} lbs".format(self.grams * 0.00220462)
        elif format_spec == "description":
            return f"A {self.name} weighing {self.grams} grams"
        else:
            raise ValueError("Unsupported format specifier")

# Usage:
apple = Fruit(name="apple", grams=2500)
print(f"Formatted: {apple:kilogram}")     # Output: Formatted: 2.50 kg
print(f"Formatted: {apple:pounds}")       # Output: Formatted: 5.51 lbs
print(f"Formatted: {apple:description}")  # Output: Formatted: A apple weighing 2500 grams
```

### 3. `__or__` (Or Dunder Method)

The `__or__` method allows custom behavior when using the `|` operator, enabling combining or merging objects.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams

    def __or__(self, other):
        if isinstance(other, Fruit):
            return Fruit(name=f"{self.name} & {other.name}", grams=self.grams + other.grams)

# Usage:
apple = Fruit(name="apple", grams=100)
orange = Fruit(name="orange", grams=150)
banana = Fruit(name="banana", grams=200)

combined = apple | orange | banana
print(combined.name, combined.grams)  # Output: apple & orange & banana 450
```

### 4. `__str__` and `__repr__` (String and Representation Dunder Methods)

The `__str__` method is used to return a string representation of an object, while the `__repr__` method returns an unambiguous representation useful for developers.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams

    def __str__(self):
        return f"{self.name} ({self.grams}g)"

    def __repr__(self):
        return f"Fruit(name='{self.name}', grams={self.grams})"

# Usage:
apple = Fruit(name="apple", grams=100)
print(str(apple))  # Output: apple (100g)
print(repr(apple))  # Output: Fruit(name='apple', grams=100)
```

### 5. `__getitem__` (Get Item Dunder Method)

The `__getitem__` method enables subscripting, allowing objects to behave like sequences or mappings.

```python
class Basket:
    def __init__(self, fruits):
        self.fruits = fruits

    def __getitem__(self, item):
        return [fruit for fruit in self.fruits if fruit.name.lower() == item.lower()]

# Usage:
basket = Basket([Fruit("apple", 100), Fruit("orange", 150), Fruit("banana", 200)])
print(basket["apple"])  # Output: [Fruit(name='apple', grams=100)]
print(basket["orange"])  # Output: [Fruit(name='orange', grams=150)]
```

These Dunder methods provide powerful customization options for Python classes, enhancing their functionality and making them more expressive. Experiment with these methods to see how they can improve your code!
