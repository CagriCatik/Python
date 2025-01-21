# 5 Useful Dunder Methods In Python

In this guide, we'll explore five of the most useful Dunder (double underscore) methods in Python. These methods provide powerful functionality for customizing the behavior of classes in Python.

## Dunder Method 1: \_\_eq\_\_

The `__eq__` method allows us to define custom equality comparison between objects of our class. By default, Python's comparison operator compares memory addresses. However, by defining `__eq__`, we can compare objects based on their attributes.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams
  
    def __eq__(self, other):
        return self.__dict__ == other.__dict__

# Example usage:
apple1 = Fruit("apple", 100)
apple2 = Fruit("apple", 100)
orange = Fruit("orange", 150)

print(apple1 == apple2)  # Output: True
print(apple1 == orange)  # Output: False
```

## Dunder Method 2: \_\_format\_\_

The `__format__` method allows us to define custom formatting when using the `format()` function or f-strings. We can specify different formats for our objects.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams
  
    def __format__(self, format_spec):
        if format_spec == "kg":
            return f"{self.grams / 1000:.2f} kg"
        elif format_spec == "lbs":
            return f"{self.grams * 0.00220462:.2f} lbs"
        elif format_spec == "description":
            return f"{self.name.capitalize()} weighing {self.grams} grams"
        else:
            raise ValueError("Unsupported format specifier")

# Example usage:
apple = Fruit("apple", 2500)
print(f"{apple:kg}")            # Output: 2.50 kg
print(f"{apple:lbs}")           # Output: 5.51 lbs
print(f"{apple:description}")   # Output: Apple weighing 2500 grams
```

## Dunder Method 3: \_\_or\_\_

The `__or__` method allows us to define custom behavior for combining objects using the `|` operator. This is particularly useful for creating composite objects.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams
  
    def __or__(self, other):
        return Fruit(self.name + ' & ' + other.name, self.grams + other.grams)

# Example usage:
apple = Fruit("apple", 100)
orange = Fruit("orange", 150)
banana = Fruit("banana", 200)

combined = apple | orange | banana
print(combined.name)   # Output: apple & orange & banana
print(combined.grams)  # Output: 450
```

## Dunder Method 4: \_\_str\_\_ and \_\_repr\_\_

The `__str__` and `__repr__` methods allow us to define custom string representations for our objects. `__str__` is meant for user-friendly output, while `__repr__` is for developer-oriented output.

```python
class Fruit:
    def __init__(self, name, grams):
        self.name = name
        self.grams = grams
  
    def __str__(self):
        return f"{self.name} ({self.grams}g)"
  
    def __repr__(self):
        return f"Fruit(name='{self.name}', grams={self.grams})"

# Example usage:
apple = Fruit("apple", 100)
print(str(apple))  # Output: apple (100g)
print(repr(apple)) # Output: Fruit(name='apple', grams=100)
```

## Dunder Method 5: \_\_getitem\_\_

The `__getitem__` method allows us to make our objects subscriptable, enabling access by index or key.

```python
class Basket:
    def __init__(self, fruits):
        self.fruits = fruits
  
    def __getitem__(self, item):
        return [fruit for fruit in self.fruits if fruit.name.lower() == item.lower()]

# Example usage:
fruits = [Fruit("apple", 100), Fruit("orange", 150), Fruit("banana", 200)]
basket = Basket(fruits)

print(basket["orange"])  # Output: [orange (150g)]
```

These Dunder methods provide powerful customization capabilities, allowing you to tailor the behavior of your classes to suit your specific needs in Python.
