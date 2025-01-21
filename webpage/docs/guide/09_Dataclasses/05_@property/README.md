
# Using @property in Python

In Python, the `@property` decorator is a powerful tool for creating class properties, allowing you to define methods that can be accessed like attributes. This tutorial will walk you through a scenario where the use of `@property` is beneficial, using a class representing fruit pricing as an example.

## Problem Description

Consider a class `Fruit` with attributes for the name, weight in grams, and price per kilo. Initially, a post-initializer method was used to calculate the total price. However, this approach had a flaw: if the price per kilo changed during the program's execution, the total price did not reflect the update.

```python
class Fruit:
    def __init__(self, name, grams, price_per_kilo):
        self.name = name
        self.grams = grams
        self.price_per_kilo = price_per_kilo
        self.total_price = self.calculate_total_price()

    def calculate_total_price(self):
        return (self.grams / 1000) * self.price_per_kilo

# Example usage:
if __name__ == "__main__":
    apple = Fruit("Apple", 1500, 5)
    print(apple.total_price)  # Output: 7.5

    # If price_per_kilo changes, total_price doesn't update
    apple.price_per_kilo = 20
    print(apple.total_price)  # Output: 7.5 (not updated)
```

## Solution using @property

To address this issue, we'll replace the post-initializer method with a property using the `@property` decorator. This ensures that the total price is recalculated every time it is accessed, reflecting any changes in the price per kilo.

```python
class Fruit:
    def __init__(self, name, grams, price_per_kilo):
        self.name = name
        self.grams = grams
        self.price_per_kilo = price_per_kilo

    @property
    def total_price(self):
        return (self.grams / 1000) * self.price_per_kilo

# Example usage:
if __name__ == "__main__":
    apple = Fruit("Apple", 1500, 5)
    print(apple.total_price)  # Output: 7.5

    # Now, if price_per_kilo changes, total_price updates accordingly
    apple.price_per_kilo = 20
    print(apple.total_price)  # Output: 30.0 (updated)
```

## Conclusion

Using `@property` provides a cleaner and more efficient way to handle scenarios where values need to be calculated dynamically based on the current state of the object. It ensures that every access to the property triggers the associated method, allowing for up-to-date information without the need for manual updates.
