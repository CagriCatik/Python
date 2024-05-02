# Python Classes and Objects Tutorial

When dealing with similar functionalities across different entities, it's more efficient to use classes and objects. In this tutorial, we'll build a basic `Car` class, serving as a blueprint for individual cars with customizable details.

## Car Class

Let's start by defining our `Car` class:

```python
class Car:
    def __init__(self, brand, wheels):
        self.brand = brand
        self.wheels = wheels

    def turn_on(self):
        print(f'Turning on the {self.brand}')

    def turn_off(self):
        print(f'Turning off the {self.brand}')

    def drive(self, kilometers):
        print(f'Driving the {self.brand} for {kilometers} kilometers')

    def describe(self):
        print(f'{self.brand} is a car with {self.wheels} wheels')
```

In this class, we have an initializer (`__init__`) to set the initial details of the car, and methods (`turn_on`, `turn_off`, `drive`, `describe`) to define its functionality.

## Using the Car Class

Now, let's create instances of the `Car` class and demonstrate how to use them:

```python
if __name__ == "__main__":
    # Creating a BMW
    bmw = Car(brand="BMW", wheels=4)

    # Using the methods of the BMW object
    bmw.turn_on()
    bmw.drive(10)
    bmw.turn_off()
    bmw.describe()

    # Creating a Volvo
    volvo = Car(brand="Volvo", wheels=6)

    # Using the methods of the Volvo object
    volvo.turn_on()
    volvo.drive(30)
    volvo.turn_off()
    volvo.describe()
```

This code snippet creates instances of the `Car` class for a BMW and a Volvo. We then perform various operations on these objects, such as turning them on, driving, turning them off, and describing them. By utilizing classes and objects, we can efficiently model entities with shared functionalities and easily create instances with custom details. In the upcoming lectures, we will delve deeper into the concepts introduced here, providing a comprehensive understanding of object-oriented programming in Python.
