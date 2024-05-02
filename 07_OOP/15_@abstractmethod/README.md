
# Abstract Methods and Classes Tutorial

Welcome to this tutorial on abstract methods and abstract classes in Python. In this tutorial, we will explore the concept of abstract methods and how they can be used with abstract classes to create blueprints for other classes.

## Abstract Methods and ABC Module

Abstract methods are methods declared in a class but do not have an implementation in the class itself. They serve as placeholders for methods that must be implemented by any concrete (non-abstract) derived class. To use abstract methods in Python, we need to import them from the `ABC` (Abstract Base Class) module.

```python
from abc import ABC, abstractmethod
```

## Creating an Abstract Class

Let's create an abstract class named `Appliance` that will serve as a blueprint for other classes. This class will include an initializer and abstract methods.

```python
from abc import ABC, abstractmethod

class Appliance(ABC):
    def __init__(self, brand, version_number):
        self.brand = brand
        self.version_number = version_number
        self.is_turned_on = False

    @abstractmethod
    def turn_on(self):
        pass

    @abstractmethod
    def turn_off(self):
        pass
```

## Creating Concrete Classes

Now, let's create a concrete class, `Lamp`, that inherits from `Appliance` and implements the abstract methods.

```python
class Lamp(Appliance):
    def __init__(self, brand, version_number):
        super().__init__(brand, version_number)

    def turn_on(self):
        if self.is_turned_on:
            print(f"{self.brand} is already turned on.")
        else:
            self.is_turned_on = True
            print(f"{self.brand} is now turned on.")

    def turn_off(self):
        if self.is_turned_on:
            self.is_turned_on = False
            print(f"{self.brand} is now turned off.")
        else:
            print(f"{self.brand} is already turned off.")
```

## Testing the Classes

Now, let's test our classes by creating an instance of `Lamp` and calling the `turn_on` and `turn_off` methods.

```python
if __name__ == "__main__":
    lamp = Lamp(brand="Z light", version_number=1)

    lamp.turn_on()
    lamp.turn_on()  # Attempting to turn on again
    lamp.turn_off()
    lamp.turn_off()  # Attempting to turn off again
    lamp.turn_on()
    lamp.turn_off()
```

This example demonstrates the usage of abstract methods and abstract classes in creating a hierarchy of classes with consistent behavior.

## Additional Tip: Not Implemented Error

When working with abstract methods and you want to indicate that the implementation is not provided yet, it's good practice to raise a `NotImplementedError` instead of using placeholders.

```python
class Lamp(Appliance):
    # ...

    def turn_on(self):
        if self.is_turned_on:
            print(f"{self.brand} is already turned on.")
        else:
            raise NotImplementedError("Need to add functionality for turn on.")

    def turn_off(self):
        if self.is_turned_on:
            self.is_turned_on = False
            print(f"{self.brand} is now turned off.")
        else:
            raise NotImplementedError("Need to add functionality for turn off.")
```

This ensures that developers are explicitly notified when trying to use methods that lack implementation.
