# Name Mangling

Name mangling is a mechanism in Python to ensure that the names of class attributes are unique and not easily accessible outside their defining class. This feature is particularly useful for encapsulating data and preventing name clashes in inheritance hierarchies.

## Reasons for Name Mangling

1. **Encapsulation**: Name mangling makes it harder to access objects that should not be accessed outside of the class, enhancing data encapsulation.
2. **Preventing Name Clashes**: Inheritance can lead to name clashes. Name mangling prevents such conflicts by altering the attribute names in a unique way.

## Creating a Class with Name Mangling

Consider the following example to illustrate name mangling in a class.

## Step-by-Step Example

1. **Define the Class and Attributes**

```python
class Car:
    __year = 2000  # Class-level attribute with name mangling

    def __init__(self, brand: str, fuel_type: str) -> None:
        self.__brand = brand  # Instance attribute with name mangling
        self.__fuel_type = fuel_type  # Instance attribute with name mangling
        self.var = "red"  # Regular instance attribute

    def drive(self) -> None:
        print(f"Driving {self.__brand}")

    def __get_description(self) -> None:  # Method with name mangling
        print(f"{self.__brand} has {self.__fuel_type}")

    def display_color(self) -> None:
        print(f"{self.__brand} is {self.var.capitalize()}")
```

In the `Car` class:
- `__year`, `__brand`, and `__fuel_type` are defined with double leading underscores.
- These attributes will undergo name mangling.

2. **Creating an Instance and Accessing Mangled Attributes**

```python
if __name__ == "__main__":
    car = Car("Toyota", "Electric")
    car.drive()  # This works fine
    # Accessing the mangled attributes directly is not straightforward
    # print(car.__brand)  # This will raise an AttributeError

    # Accessing mangled names using their mangled forms
    print(car._Car__brand)  # This works
    car._Car__get_description()  # This works
```

## Inheritance and Name Clashes

Name mangling can prevent name clashes in inheritance scenarios.

3. **Inheritance with Name Mangling**

```python
class Toyota(Car):
    def __init__(self, fuel_type: str) -> None:
        super().__init__("Toyota", fuel_type)
        self.var = 100  # This can cause a name clash

    def get_year(self) -> int:
        return self._Car__year  # Accessing mangled class attribute
```

Creating an instance of the `Toyota` class and demonstrating the name clash resolution:

```python
if __name__ == "__main__":
    toyota = Toyota("Electric")
    toyota.display_color()  # This will now refer to the correct 'var' attribute
    print(toyota.get_year())  # Accessing the mangled class attribute
```

## Handling Mangled Names in Subclasses

When dealing with subclasses, name mangling requires careful handling to avoid attribute errors.

4. **Handling Mangled Names in Subclasses**

```python
class Honda(Car):
    def get_year(self) -> int:
        # Trying to access a mangled class attribute from the parent class
        try:
            return self.__year  # This will raise an AttributeError
        except AttributeError:
            return self._Car__year  # Correct way to access the mangled attribute

if __name__ == "__main__":
    honda = Honda("Petrol")
    print(honda.get_year())  # Correctly accessing the mangled attribute
```

## Conclusion

Name mangling is a useful feature in Python for ensuring data encapsulation and preventing name clashes. By altering the names of class attributes and methods in a unique way, it makes them harder to access from outside the class, while still being accessible within the class using their mangled names.

## Code Summary

```python
class Car:
    __year = 2000

    def __init__(self, brand: str, fuel_type: str) -> None:
        self.__brand = brand
        self.__fuel_type = fuel_type
        self.var = "red"

    def drive(self) -> None:
        print(f"Driving {self.__brand}")

    def __get_description(self) -> None:
        print(f"{self.__brand} has {self.__fuel_type}")

    def display_color(self) -> None:
        print(f"{self.__brand} is {self.var.capitalize()}")

class Toyota(Car):
    def __init__(self, fuel_type: str) -> None:
        super().__init__("Toyota", fuel_type)
        self.var = 100

    def get_year(self) -> int:
        return self._Car__year

class Honda(Car):
    def get_year(self) -> int:
        try:
            return self.__year
        except AttributeError:
            return self._Car__year

if __name__ == "__main__":
    car = Car("Toyota", "Electric")
    car.drive()
    print(car._Car__brand)
    car._Car__get_description()

    toyota = Toyota("Electric")
    toyota.display_color()
    print(toyota.get_year())

    honda = Honda("Petrol")
    print(honda.get_year())
```

This tutorial highlights the importance of name mangling in Python and provides practical examples of its application and benefits.