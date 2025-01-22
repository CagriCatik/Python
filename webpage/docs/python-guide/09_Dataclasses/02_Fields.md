# Data Class with Mutable Defaults

## Step 1: Importing Dependencies

First, import the necessary modules and functions:

```python
from dataclasses import dataclass, field
```

## Step 2: Creating a Data Class

Now, let's create a data class named `Fruit` with mutable defaults:

```python
@dataclass
class Fruit:
    name: str
    grams: float
    price_per_kilo: float
    edible: bool = True
    related_fruits: list = field(default_factory=list)
```

In this example, the `Fruit` class has fields for `name`, `grams`, `price_per_kilo`, `edible` (with a default value of `True`), and `related_fruits` (using `field` with `default_factory` to create an empty list).

## Step 3: Creating Instances

Now, let's create instances of the `Fruit` class:

```python
if __name__ == "__main__":
    # Creating an apple without specifying default values
    apple = Fruit(name="Apple", grams=100, price_per_kilo=5)

    # Creating a pear with custom values
    pear = Fruit(name="Pear", grams=250, price_per_kilo=10, edible=True, related_fruits=["Apple", "Orange"])

    # Printing the fruits
    print(apple)
    print(pear)
    print("Related Fruits:", pear.related_fruits)
```

In this example, the `Fruit` instances are created with and without specifying custom values. Note that default values are used for unspecified fields.

Now you can run your Python script, and you should see the output displaying the created `Fruit` instances.
