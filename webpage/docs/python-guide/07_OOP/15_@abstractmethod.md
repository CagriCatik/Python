# Abstract Methods and Classes

This tutorial provides an in-depth exploration of abstract methods and abstract classes in Python. These concepts are essential for creating structured and reusable code in object-oriented programming. Abstract classes allow developers to define blueprints for other classes, enforcing a consistent interface without implementing the functionality themselves. This ensures that derived classes adhere to a specific structure, which can be critical in larger and more complex software systems.

## Abstract Methods and the `ABC` Module

Abstract methods are methods declared in a class that must be implemented by any subclass. They do not have an implementation in the abstract class itself. To define abstract methods, Python provides the `abc` (Abstract Base Class) module. This module allows us to create abstract classes and methods using the `ABC` class and the `abstractmethod` decorator.

### Importing the `ABC` Module

To start, we need to import the `ABC` class and the `abstractmethod` decorator from the `abc` module:

```python
from abc import ABC, abstractmethod
```

## Creating an Abstract Class

Let's create an abstract class named `Appliance`. This class will serve as a blueprint for various types of appliances. It will include an initializer and abstract methods that derived classes must implement.

### Defining the Abstract Class

```python
from abc import ABC, abstractmethod

class Appliance(ABC):
    def __init__(self, brand, version_number):
        self.brand = brand
        self.version_number = version_number
        self.is_turned_on = False

    @abstractmethod
    def turn_on(self):
        """Turn on the appliance."""
        pass

    @abstractmethod
    def turn_off(self):
        """Turn off the appliance."""
        pass
```

In this class, `turn_on` and `turn_off` are abstract methods, indicated by the `@abstractmethod` decorator. Any subclass of `Appliance` must provide concrete implementations for these methods.

## Creating Concrete Classes

Concrete classes are derived classes that implement the abstract methods defined in the abstract class. Here, we create a concrete class named `Lamp`, which inherits from `Appliance` and provides implementations for the abstract methods.

### Defining the Concrete Class

```python
class Lamp(Appliance):
    def __init__(self, brand, version_number):
        super().__init__(brand, version_number)

    def turn_on(self):
        if self.is_turned_on:
            print(f"{self.brand} lamp is already turned on.")
        else:
            self.is_turned_on = True
            print(f"{self.brand} lamp is now turned on.")

    def turn_off(self):
        if self.is_turned_on:
            self.is_turned_on = False
            print(f"{self.brand} lamp is now turned off.")
        else:
            print(f"{self.brand} lamp is already turned off.")
```

The `Lamp` class provides specific implementations for the `turn_on` and `turn_off` methods, ensuring the appliance can be turned on and off appropriately.

## Testing the Classes

We can now create an instance of the `Lamp` class and test the `turn_on` and `turn_off` methods to ensure they work as expected.

### Example Usage

```python
if __name__ == "__main__":
    lamp = Lamp(brand="Z Light", version_number=1)

    lamp.turn_on()
    lamp.turn_on()  # Attempting to turn on again
    lamp.turn_off()
    lamp.turn_off()  # Attempting to turn off again
    lamp.turn_on()
    lamp.turn_off()
```

The output of this script will demonstrate the functionality of the `Lamp` class, confirming that it adheres to the interface defined by the `Appliance` abstract class.

## Additional Tip: Raising `NotImplementedError`

When working with abstract methods, it's often useful to raise a `NotImplementedError` if a method is not implemented. This can help signal that the method needs to be overridden in a subclass.

### Example with `NotImplementedError`

```python
class Appliance(ABC):
    def __init__(self, brand, version_number):
        self.brand = brand
        self.version_number = version_number
        self.is_turned_on = False

    @abstractmethod
    def turn_on(self):
        raise NotImplementedError("Subclasses must implement this method")

    @abstractmethod
    def turn_off(self):
        raise NotImplementedError("Subclasses must implement this method")
```

By raising a `NotImplementedError`, we ensure that any subclass must provide a concrete implementation of the abstract methods, reinforcing the contract specified by the abstract class.

## Conclusion

Abstract methods and classes in Python provide a powerful way to enforce a consistent interface across different implementations. By using the `abc` module, developers can define blueprints for their classes, ensuring that derived classes adhere to a specified structure. This tutorial has demonstrated how to create abstract classes, implement abstract methods in concrete classes, and test these implementations. These principles are fundamental for designing robust and maintainable object-oriented software.