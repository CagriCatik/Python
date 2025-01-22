# Structural Design Patterns

Structural design patterns are a category of design patterns in software engineering that focus on object composition or structure. They address the arrangement of classes and objects to form larger structures, promoting flexibility and efficiency in software design. In this tutorial, we will delve into three fundamental structural design patterns: Adapter, Decorator, and Proxy.

## 1. Adapter Pattern

The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a bridge between two incompatible interfaces, allowing them to work together seamlessly without the need for modifying existing code.

### Key Features:

- Adapter interface that wraps the incompatible interface.
- Adaptee, which is the existing class with an incompatible interface.
- Client, which uses the Adapter to interact with the Adaptee.

### Implementation:

```python
class Target:
    def request(self):
        pass

class Adaptee:
    def specific_request(self):
        pass

class Adapter(Target):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.specific_request()
```

### Usage:

```python
adaptee = Adaptee()
adapter = Adapter(adaptee)
adapter.request()
```

### Use Cases:

- Integrating new features or third-party libraries with existing codebases.
- Interoperability between different systems with incompatible interfaces.

## 2. Decorator Pattern

The Decorator pattern adds behavior to objects dynamically without altering their structure. It allows for the extension of functionality of individual objects at runtime by wrapping them with decorator objects.

### Key Features:

- Component interface, which defines the interface for objects that can be decorated.
- Concrete component, which is the base object to be decorated.
- Decorator, which adds additional behavior to the component.
- Concrete decorators, which implement specific behavior and can be stacked on top of each other.

### Implementation:

```python
from abc import ABC, abstractmethod

class Component(ABC):
    @abstractmethod
    def operation(self):
        pass

class ConcreteComponent(Component):
    def operation(self):
        return "ConcreteComponent operation"

class Decorator(Component):
    def __init__(self, component):
        self._component = component

    def operation(self):
        return self._component.operation()

class ConcreteDecorator(Decorator):
    def operation(self):
        return f"ConcreteDecorator operation, {self._component.operation()}"
```

### Usage:

```python
component = ConcreteComponent()
decorator = ConcreteDecorator(component)
result = decorator.operation()
print(result)  # Output: "ConcreteDecorator operation, ConcreteComponent operation"
```

### Use Cases:

- Adding responsibilities to objects dynamically.
- Extending the functionality of objects without subclassing.

## 3. Proxy Pattern

The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It allows for the implementation of additional functionality such as lazy initialization, access control, logging, and monitoring of objects.

### Key Features:

- Subject interface, which defines the common interface for the RealSubject and Proxy.
- RealSubject, which is the real object that the Proxy represents.
- Proxy, which acts as an intermediary between the client and the RealSubject.

### Implementation:

```python
from abc import ABC, abstractmethod

class Subject(ABC):
    @abstractmethod
    def request(self):
        pass

class RealSubject(Subject):
    def request(self):
        return "RealSubject request"

class Proxy(Subject):
    def __init__(self):
        self._real_subject = RealSubject()

    def request(self):
        # Additional logic before forwarding request to RealSubject
        return f"Proxy request, {self._real_subject.request()}"
```

### Usage:

```python
proxy = Proxy()
result = proxy.request()
print(result)  # Output: "Proxy request, RealSubject request"
```

### Use Cases:

- Implementing lazy initialization of objects.
- Controlling access to sensitive resources.
- Logging and monitoring of method calls.

## Conclusion

Structural design patterns play a crucial role in software design by facilitating the composition of classes and objects to form larger structures. By understanding and implementing patterns like Adapter, Decorator, and Proxy, developers can improve code modularity, maintainability, and extensibility. These patterns offer proven techniques for managing object composition complexity and promoting best practices in software architecture.
