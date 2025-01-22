# Introduction

Creational design patterns deal with object creation mechanisms, aiming to create objects in a manner suitable to the situation. They ensure that the system is decoupled from the specifics of the object creation process.

## 1. Singleton Pattern
The **Singleton Pattern** ensures that a class has only one instance and provides a global point of access to that instance.

**Use Case**: Managing shared resources, such as configuration objects or connection pools.

**Implementation**:
```python
class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # Output: True
```

## 2. Factory Method Pattern
The **Factory Method Pattern** provides an interface for creating objects but allows subclasses to alter the type of objects that will be created.

**Use Case**: Delegating the instantiation process to child classes.

**Implementation**:
```python
from abc import ABC, abstractmethod

class Product(ABC):
    @abstractmethod
    def operation(self):
        pass

class ConcreteProductA(Product):
    def operation(self):
        return "Result of ConcreteProductA"

class ConcreteProductB(Product):
    def operation(self):
        return "Result of ConcreteProductB"

class Creator(ABC):
    @abstractmethod
    def factory_method(self):
        pass

    def some_operation(self):
        product = self.factory_method()
        return f"Creator: Working with {product.operation()}"

class ConcreteCreatorA(Creator):
    def factory_method(self):
        return ConcreteProductA()

class ConcreteCreatorB(Creator):
    def factory_method(self):
        return ConcreteProductB()

# Usage
creator = ConcreteCreatorA()
print(creator.some_operation())  # Output: Creator: Working with Result of ConcreteProductA
```

## 3. Abstract Factory Pattern
The **Abstract Factory Pattern** provides an interface for creating families of related or dependent objects without specifying their concrete classes.

**Use Case**: Creating a suite of related objects, such as GUI components for different operating systems.

**Implementation**:
```python
from abc import ABC, abstractmethod

class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self):
        pass

    @abstractmethod
    def create_product_b(self):
        pass

class ConcreteFactory1(AbstractFactory):
    def create_product_a(self):
        return ProductA1()

    def create_product_b(self):
        return ProductB1()

class ConcreteFactory2(AbstractFactory):
    def create_product_a(self):
        return ProductA2()

    def create_product_b(self):
        return ProductB2()

class AbstractProductA(ABC):
    @abstractmethod
    def useful_function_a(self):
        pass

class AbstractProductB(ABC):
    @abstractmethod
    def useful_function_b(self):
        pass

class ProductA1(AbstractProductA):
    def useful_function_a(self):
        return "The result of ProductA1"

class ProductB1(AbstractProductB):
    def useful_function_b(self):
        return "The result of ProductB1"

class ProductA2(AbstractProductA):
    def useful_function_a(self):
        return "The result of ProductA2"

class ProductB2(AbstractProductB):
    def useful_function_b(self):
        return "The result of ProductB2"

# Usage
factory = ConcreteFactory1()
product_a = factory.create_product_a()
product_b = factory.create_product_b()
print(product_a.useful_function_a())  # Output: The result of ProductA1
print(product_b.useful_function_b())  # Output: The result of ProductB1
```

## 4. Builder Pattern
The **Builder Pattern** separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

**Use Case**: Building complex objects step-by-step, such as constructing HTML documents or meal plans.

**Implementation**:
```python
class Builder:
    def __init__(self):
        self.product = Product()

    def reset(self):
        self.product = Product()

    def produce_part_a(self):
        self.product.add("PartA")

    def produce_part_b(self):
        self.product.add("PartB")

    def produce_part_c(self):
        self.product.add("PartC")

class Product:
    def __init__(self):
        self.parts = []

    def add(self, part):
        self.parts.append(part)

    def list_parts(self):
        return ", ".join(self.parts)

class Director:
    def __init__(self, builder):
        self.builder = builder

    def build_minimal_viable_product(self):
        self.builder.produce_part_a()

    def build_full_featured_product(self):
        self.builder.produce_part_a()
        self.builder.produce_part_b()
        self.builder.produce_part_c()

# Usage
builder = Builder()
director = Director(builder)

director.build_minimal_viable_product()
print(builder.product.list_parts())  # Output: PartA

director.build_full_featured_product()
print(builder.product.list_parts())  # Output: PartA, PartB, PartC
```

## 5. Prototype Pattern
The **Prototype Pattern** allows objects to be cloned, reducing the overhead of creating objects from scratch.

**Use Case**: When object creation is expensive or complex.

**Implementation**:
```python
import copy

class Prototype:
    def __init__(self, value):
        self.value = value

    def clone(self):
        return copy.deepcopy(self)

# Usage
original = Prototype([1, 2, 3])
clone = original.clone()
print(original.value == clone.value)  # Output: True
print(original is clone)  # Output: False
```


