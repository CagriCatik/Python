# Tutorial: Using Post Initializer with Init Var in Data Classes

## Step 1: Import the init file

To get started, we need to import an init file. This file will be used to define an init var, which will be part of the initializer and not the class itself.

```python
from __future__ import annotations  # Importing annotations to enable forward references in type hints
```

## Step 2: Define an Init Var

Create an init var called `Israir` inside the class, specifying its type as an optional boolean. This init var will be part of the initializer, allowing us to perform custom actions during the post initialization phase.

```python
class Fruit:
    def __init__(self, name: str, quantity: str, price_per_kilo: float, Israir: bool = None):
        self.name = name
        self.quantity = quantity
        self.price_per_kilo = price_per_kilo
        self.Israir = Israir
```

## Step 3: Implement Post Initializer

Inside the class, use the post initializer to perform custom actions based on the provided init var. In this example, the price per kilo will be doubled if the Israir value is `True`.

```python
    def __post_init__(self):
        if self.Israir:
            self.price_per_kilo *= 2
```

## Step 4: Create Fruit Objects

In the `if __name__ == "__main__":` block, create instances of the `Fruit` class with different attributes, including the optional `Israir` parameter.

```python
if __name__ == "__main__":
    apple = Fruit(name="Apple", quantity="200g", price_per_kilo=5.0)
    orange = Fruit(name="Orange", quantity="150g", price_per_kilo=4.0, Israir=False)
    passion = Fruit(name="Passion Fruit", quantity="100g", price_per_kilo=50.0, Israir=True)
```

## Step 5: Print Object Details

Print the details of the fruit objects, including the effect of the post initializer on the price if `Israir` is `True`.

```python
    print(apple)
    print(orange)
    print(passion)
```

Now, when you run this Python script, you will see the details of the fruit objects, and the price of passion fruit will be doubled due to the post initializer.

This tutorial demonstrates the power of using init var in combination with post initializers to customize the behavior of data classes without cluttering the class definition.
