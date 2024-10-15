# Design Patterns

## Creational Design Patterns

- Creational design patterns focus on object creation mechanisms, aiming to create objects in a manner suitable to the situation. 
- They address challenges such as managing object creation complexity and ensuring that the creation process is flexible and scalable.

### Singleton Pattern

- Ensures that a class has only one instance and provides a global point of access to that instance.
- The Singleton pattern is useful when exactly one object is needed to coordinate actions across the system. It's commonly used for logging, caching, database connections, and thread pools.

### Factory Pattern

- Defines an interface for creating objects, but lets subclasses alter the type of objects that will be created.
- The Factory pattern is useful when the exact type of object to be created is not known until runtime or needs to be determined dynamically.

### Builder Pattern

- Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- The Builder pattern is useful when an object needs to be created with many configuration options or when the construction process involves multiple steps.

## Structural Design Patterns

- Structural design patterns focus on object composition or structure, addressing how classes and objects can be composed to form larger structures.
- They help in designing flexible and efficient object structures.

### Adapter Pattern

- Allows objects with incompatible interfaces to collaborate.
- The Adapter pattern is useful when integrating new features or third-party libraries into existing codebases without modifying the existing code.

### Decorator Pattern

- Adds behavior to objects dynamically without altering their structure.
- The Decorator pattern is useful when there is a need to add functionality to individual objects in a flexible and reusable way, without subclassing.

### Proxy Pattern

- Provides a surrogate or placeholder for another object to control access to it.
- The Proxy pattern is useful for implementing lazy initialization, access control, logging, and monitoring of objects.

## Behavioral Design Patterns

- Behavioral design patterns focus on object collaboration and responsibilities, describing how objects interact and communicate with each other to fulfill certain tasks.
- They promote loose coupling and flexibility in the system's design.

### Observer Pattern

- Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- The Observer pattern is useful for implementing distributed event handling systems, where changes in one part of the system need to be reflected in other parts.

### Strategy Pattern

- Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
- The Strategy pattern is useful when multiple algorithms exist for performing a task, and the client needs to choose between them dynamically.

### Command Pattern

- Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
- The Command pattern is useful for decoupling the sender and receiver of a request, allowing for parameterization of commands, and enabling the support of undoable operations.
