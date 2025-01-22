# Inheritance

Object-Oriented Programming is a programming paradigm that uses objects and classes to organize and structure code. It allows for modularity, reusability, and abstraction. Python, as an object-oriented language, supports OOP features, including inheritance, polymorphism, encapsulation, and abstraction. This tutorial will focus on the principles of OOP, specifically inheritance, in Python.

## Object-Oriented Programming Basics

### Classes and Objects

In Python, a class is a blueprint for creating objects. An object is an instance of a class. Classes encapsulate data and behaviors related to that data.

#### Defining a Class

```python
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"Vehicle: {self.year} {self.make} {self.model}")

# Creating an instance of the Vehicle class
my_vehicle = Vehicle("Toyota", "Corolla", 2020)
my_vehicle.display_info()
```

### Inheritance

Inheritance allows a class to inherit attributes and methods from another class. The class that inherits is called the child class or subclass, while the class being inherited from is the parent class or superclass. Inheritance promotes code reusability and can create a hierarchical relationship between classes.

#### Single Inheritance

Single inheritance involves a child class inheriting from a single parent class.

```python
class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors

    def display_info(self):
        super().display_info()
        print(f"Number of doors: {self.num_doors}")

# Creating an instance of the Car class
my_car = Car("Honda", "Civic", 2019, 4)
my_car.display_info()
```

#### Multiple Inheritance

Multiple inheritance allows a child class to inherit from more than one parent class. This can introduce complexity and potential conflicts.

```python
class Electric:
    def __init__(self, battery_size):
        self.battery_size = battery_size

    def display_battery_info(self):
        print(f"Battery size: {self.battery_size} kWh")

class ElectricCar(Car, Electric):
    def __init__(self, make, model, year, num_doors, battery_size):
        Car.__init__(self, make, model, year, num_doors)
        Electric.__init__(self, battery_size)

# Creating an instance of the ElectricCar class
my_electric_car = ElectricCar("Tesla", "Model S", 2021, 4, 100)
my_electric_car.display_info()
my_electric_car.display_battery_info()
```

### Method Overriding

Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class.

```python
class Animal:
    def make_sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    def make_sound(self):
        print("Dog barks")

# Creating instances of Animal and Dog
generic_animal = Animal()
generic_animal.make_sound()

my_dog = Dog()
my_dog.make_sound()
```

### The `super()` Function

The `super()` function provides a way to call the parent class's methods from the child class. It is commonly used to extend or modify the behavior of inherited methods.

```python
class Bird(Animal):
    def make_sound(self):
        super().make_sound()
        print("Bird chirps")

# Creating an instance of the Bird class
my_bird = Bird()
my_bird.make_sound()
```

### Encapsulation

Encapsulation restricts direct access to some of an object's attributes and methods. This is achieved using private and protected access specifiers.

- Private members are declared with a double underscore prefix (e.g., `__private_var`).
- Protected members are declared with a single underscore prefix (e.g., `_protected_var`).

```python
class EncapsulatedClass:
    def __init__(self):
        self._protected_var = "Protected"
        self.__private_var = "Private"

    def display_vars(self):
        print(f"Protected: {self._protected_var}")
        print(f"Private: {self.__private_var}")

obj = EncapsulatedClass()
obj.display_vars()
print(obj._protected_var)  # Accessible but should be treated as non-public
# print(obj.__private_var)  # Raises AttributeError
```

### Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common super class. It is achieved through method overriding and interfaces.

```python
class Cat(Animal):
    def make_sound(self):
        print("Cat meows")

def make_animal_sound(animal):
    animal.make_sound()

# Demonstrating polymorphism
make_animal_sound(generic_animal)
make_animal_sound(my_dog)
make_animal_sound(Cat())
```

## Conclusion

Object-Oriented Programming in Python is a powerful paradigm that enhances code organization, reusability, and scalability. Inheritance is a fundamental concept in OOP that allows for hierarchical class relationships, promoting code reuse and extending functionality. This tutorial has covered the basics of classes, objects, inheritance, method overriding, the `super()` function, encapsulation, and polymorphism, providing a comprehensive understanding of these concepts in Python.