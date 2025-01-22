# Introduction

Structural design patterns deal with object composition, ensuring that if one part of a system changes, the entire structure does not need to change. They focus on the relationship between entities to make the structure more flexible and efficient.

## 1. Adapter Pattern
The **Adapter Pattern** allows objects with incompatible interfaces to work together by translating one interface into another.

**Use Case**: Integrating legacy systems with modern interfaces.

**Implementation**:
```python
class Target:
    def request(self):
        return "Target: The default target's behavior."

class Adaptee:
    def specific_request(self):
        return ".eetpadA eht fo roivaheb laicepS"

class Adapter(Target):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        return f"Adapter: (TRANSLATED) {self.adaptee.specific_request()[::-1]}"

# Usage
adaptee = Adaptee()
adapter = Adapter(adaptee)
print(adapter.request())  # Output: Adapter: (TRANSLATED) Special behavior of the Adaptee.
```

## 2. Bridge Pattern
The **Bridge Pattern** separates an object’s abstraction from its implementation, allowing the two to vary independently.

**Use Case**: Developing a cross-platform GUI framework.

**Implementation**:
```python
class Implementation:
    def operation_implementation(self):
        pass

class ConcreteImplementationA(Implementation):
    def operation_implementation(self):
        return "ConcreteImplementationA: Here's the result on the platform A."

class ConcreteImplementationB(Implementation):
    def operation_implementation(self):
        return "ConcreteImplementationB: Here's the result on the platform B."

class Abstraction:
    def __init__(self, implementation):
        self.implementation = implementation

    def operation(self):
        return (f"Abstraction: Base operation with: {self.implementation.operation_implementation()}")

# Usage
implementation_a = ConcreteImplementationA()
abstraction_a = Abstraction(implementation_a)
print(abstraction_a.operation())

implementation_b = ConcreteImplementationB()
abstraction_b = Abstraction(implementation_b)
print(abstraction_b.operation())
```

## 3. Composite Pattern
The **Composite Pattern** allows you to compose objects into tree structures and work with them as if they were individual objects.

**Use Case**: Representing hierarchical structures like file systems.

**Implementation**:
```python
class Component:
    def operation(self):
        pass

class Leaf(Component):
    def __init__(self, name):
        self.name = name

    def operation(self):
        return self.name

class Composite(Component):
    def __init__(self):
        self.children = []

    def add(self, component):
        self.children.append(component)

    def remove(self, component):
        self.children.remove(component)

    def operation(self):
        results = [child.operation() for child in self.children]
        return f"Composite({', '.join(results)})"

# Usage
leaf1 = Leaf("Leaf1")
leaf2 = Leaf("Leaf2")
composite = Composite()
composite.add(leaf1)
composite.add(leaf2)
print(composite.operation())  # Output: Composite(Leaf1, Leaf2)
```

## 4. Decorator Pattern
The **Decorator Pattern** dynamically adds new responsibilities to objects without modifying their structure.

**Use Case**: Adding logging or authentication features.

**Implementation**:
```python
class Component:
    def operation(self):
        pass

class ConcreteComponent(Component):
    def operation(self):
        return "ConcreteComponent"

class Decorator(Component):
    def __init__(self, component):
        self._component = component

    def operation(self):
        return self._component.operation()

class ConcreteDecoratorA(Decorator):
    def operation(self):
        return f"ConcreteDecoratorA({super().operation()})"

class ConcreteDecoratorB(Decorator):
    def operation(self):
        return f"ConcreteDecoratorB({super().operation()})"

# Usage
simple = ConcreteComponent()
decorator_a = ConcreteDecoratorA(simple)
decorator_b = ConcreteDecoratorB(decorator_a)
print(decorator_b.operation())  # Output: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))
```

## 5. Facade Pattern
The **Facade Pattern** provides a simplified interface to a larger body of code, making it easier to use.

**Use Case**: Simplifying interactions with complex subsystems.

**Implementation**:
```python
class SubsystemA:
    def operation_a(self):
        return "SubsystemA: Ready!"

class SubsystemB:
    def operation_b(self):
        return "SubsystemB: Go!"

class Facade:
    def __init__(self):
        self._subsystem_a = SubsystemA()
        self._subsystem_b = SubsystemB()

    def operation(self):
        results = []
        results.append(self._subsystem_a.operation_a())
        results.append(self._subsystem_b.operation_b())
        return "\n".join(results)

# Usage
facade = Facade()
print(facade.operation())
```

## 6. Flyweight Pattern
The **Flyweight Pattern** minimizes memory usage by sharing as much data as possible with other similar objects.

**Use Case**: Optimizing memory usage for a large number of similar objects.

**Implementation**:
```python
class Flyweight:
    def __init__(self, shared_state):
        self.shared_state = shared_state

    def operation(self, unique_state):
        return f"Flyweight: Shared({self.shared_state}) and Unique({unique_state})"

class FlyweightFactory:
    def __init__(self):
        self._flyweights = {}

    def get_flyweight(self, key):
        if key not in self._flyweights:
            self._flyweights[key] = Flyweight(key)
        return self._flyweights[key]

# Usage
factory = FlyweightFactory()
flyweight1 = factory.get_flyweight("State1")
flyweight2 = factory.get_flyweight("State1")
print(flyweight1.operation("Unique1"))  # Shared and unique state
print(flyweight1 is flyweight2)  # Output: True
```

## 7. Proxy Pattern
The **Proxy Pattern** provides a surrogate or placeholder to control access to an object.

**Use Case**: Implementing lazy initialization, access control, or logging.

**Implementation**:
```python
class Subject:
    def request(self):
        pass

class RealSubject(Subject):
    def request(self):
        return "RealSubject: Handling request."

class Proxy(Subject):
    def __init__(self, real_subject):
        self._real_subject = real_subject

    def request(self):
        return f"Proxy: Logging before forwarding to {self._real_subject.request()}"

# Usage
real_subject = RealSubject()
proxy = Proxy(real_subject)
print(proxy.request())
```

These structural patterns offer robust strategies to manage the relationships between objects, ensuring flexibility and scalability. Next, we will explore **Behavioral Design Patterns**.

