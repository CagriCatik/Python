# 10 Common Python Errors

## Introduction

Errors are a fundamental part of programming. They provide critical feedback on what went wrong in your code, guiding you toward better practices and understanding. This tutorial explores 10 common Python errors, offering improved examples and explanations to help you understand the cause of these errors and how to prevent or resolve them.

## 1. AttributeError

### Description:
An `AttributeError` occurs when you try to access an attribute or method that an object does not possess.

### Example:
```python
class Car:
    def __init__(self, brand: str):
        self.brand = brand

car = Car("Volvo")
print(car.fuel_type)
```

### Explanation:
Here, we defined a `Car` class with a single attribute, `brand`. When we attempt to access `car.fuel_type`, Python raises an `AttributeError` because the `Car` class does not have a `fuel_type` attribute. This error commonly occurs due to typos or assumptions that an attribute exists when it does not.

### Solution:
Ensure that the attribute exists before trying to access it. If you need a `fuel_type` attribute, define it in the class:

```python
class Car:
    def __init__(self, brand: str, fuel_type: str):
        self.brand = brand
        self.fuel_type = fuel_type

car = Car("Volvo", "Diesel")
print(car.fuel_type)  # Outputs: Diesel
```

By initializing `fuel_type`, we avoid the `AttributeError`.

## 2. ImportError and ModuleNotFoundError

### Description:
`ImportError` occurs when an import statement cannot find the module or object you are trying to import. `ModuleNotFoundError` is a specific subclass of `ImportError` that occurs when the module itself is not found.

### Example:
```python
import math
from math import sqrt, pow
from math import imaginary_function  # This will raise an ImportError
```

### Explanation:
The `math` module is imported correctly, and functions like `sqrt` and `pow` are valid. However, `imaginary_function` does not exist in the `math` module, leading to an `ImportError`. 

A `ModuleNotFoundError` would occur if you try to import a module that isn't installed or available in your Python environment.

```python
import nonexistent_module  # Raises ModuleNotFoundError
```

### Solution:
Verify the availability and correctness of the module or object you are importing.

- Use `dir(module_name)` to inspect the contents of a module if unsure.
- Ensure that any external module is installed using `pip install module_name`.

```python
from math import sqrt, pow  # Correct import
```

## 3. IndexError

### Description:
An `IndexError` occurs when you try to access an element in a list or tuple using an index that is out of range.

### Example:
```python
names = ["Alice", "Bob", "Charlie"]
print(names[3])  # This will raise an IndexError
```

### Explanation:
The list `names` has indices `0`, `1`, and `2`, corresponding to "Alice", "Bob", and "Charlie". Attempting to access `names[3]` raises an `IndexError` because there is no element at index `3`.

### Solution:
Always check the length of the list before accessing elements by index, or use try-except blocks to handle potential errors.

```python
if len(names) > 3:
    print(names[3])
else:
    print("Index out of range")
```

Alternatively, using negative indices can help if you need to access elements from the end of the list:

```python
print(names[-1])  # Outputs: Charlie
```

## 4. KeyError

### Description:
A `KeyError` occurs when trying to access a dictionary key that does not exist.

### Example:
```python
person = {"name": "John", "age": 30}
print(person["address"])  # Raises a KeyError
```

### Explanation:
In this dictionary, there are only two keys: `"name"` and `"age"`. Attempting to access `"address"` results in a `KeyError` because that key does not exist in the dictionary.

### Solution:
Use the `.get()` method to avoid `KeyError` or check if the key exists using the `in` operator.

```python
print(person.get("address", "Address not available"))  # Outputs: Address not available
```

Or:

```python
if "address" in person:
    print(person["address"])
else:
    print("Key not found")
```

## 5. NameError

### Description:
A `NameError` occurs when a variable or function name is not recognized because it has not been defined or is out of scope.

### Example:
```python
def calculate_total(price, tax_rate):
    total = price + (price * tax_rate)
    return total

print(total)  # Raises a NameError
```

### Explanation:
Here, `total` is defined within the scope of the `calculate_total` function. Attempting to print `total` outside the function results in a `NameError` because `total` is not recognized in the global scope.

### Solution:
Ensure that the variable or function is defined before use and within the correct scope.

```python
total = calculate_total(100, 0.05)
print(total)  # Outputs: 105.0
```

## 6. NotImplementedError

### Description:
A `NotImplementedError` is a special exception used as a placeholder for methods that must be overridden in derived classes. It is commonly used in abstract base classes.

### Example:
```python
class Animal:
    def make_sound(self):
        raise NotImplementedError("Subclass must implement this method")

class Dog(Animal):
    pass

dog = Dog()
dog.make_sound()  # Raises NotImplementedError
```

### Explanation:
In the `Animal` class, `make_sound` is intended to be implemented by any subclass. If the subclass does not override this method, calling it will raise a `NotImplementedError`.

### Solution:
Implement the method in the subclass:

```python
class Dog(Animal):
    def make_sound(self):
        return "Bark"

dog = Dog()
print(dog.make_sound())  # Outputs: Bark
```

## 7. StopIteration

### Description:
A `StopIteration` exception is raised to signal that an iterator has no more items to yield.

### Example:
```python
def simple_generator():
    yield 1
    yield 2

gen = simple_generator()
print(next(gen))  # Outputs: 1
print(next(gen))  # Outputs: 2
print(next(gen))  # Raises StopIteration
```

### Explanation:
The generator `simple_generator` yields two values. After these values are exhausted, calling `next()` again raises `StopIteration`, signaling that the generator is done.

### Solution:
Handle `StopIteration` in loops or use a `for` loop that automatically handles the exception.

```python
gen = simple_generator()
for value in gen:
    print(value)  # Outputs: 1, then 2
```

## 8. SyntaxError

### Description:
A `SyntaxError` occurs when Python encounters code that is not valid syntactically.

### Example:
```python
if True
    print("Hello, World!")  # Raises a SyntaxError
```

### Explanation:
The code above is missing a colon (`:`) after the `if` statement, which is required for proper syntax in Python.

### Solution:
Ensure your code follows Python’s syntax rules.

```python
if True:
    print("Hello, World!")  # Outputs: Hello, World!
```

Common causes of `SyntaxError` include:
- Missing colons after statements like `if`, `for`, `while`, and `def`.
- Unclosed parentheses or brackets.
- Using reserved keywords improperly.

## 9. IndentationError

### Description:
An `IndentationError` occurs when the indentation of your code does not conform to Python's syntax rules.

### Example:
```python
def greet():
print("Hello, World!")  # Raises an IndentationError
```

### Explanation:
In Python, code blocks must be indented consistently. The function `greet` contains a statement that is not indented, causing an `IndentationError`.

### Solution:
Properly indent code blocks to indicate the code hierarchy.

```python
def greet():
    print("Hello, World!")  # Outputs: Hello, World!
```

Common causes of `IndentationError`:
- Mixing spaces and tabs for indentation.
- Incorrect indentation levels.

## 10. ValueError and TypeError

### Description:

- **ValueError**: Raised when a function receives an argument of the correct type but with an inappropriate value.
- **TypeError**: Raised when an operation or function is applied to an object of an inappropriate type.

### Examples:

**ValueError:**
```python
int("ten")  # Raises ValueError
```

### Explanation:
The `int` function expects a string that represents an integer, like `"10"`. However, `"ten"` is a non-numeric string, leading to a `ValueError`.

### Solution:
Ensure that the value passed to the function is appropriate:

```python
int("10")  # Outputs: 10
```

**TypeError:**
```python
len(5)  # Raises TypeError
```

### Explanation:
The `len` function expects a sequence (like a list or string) as an

 argument. Passing an integer to `len` raises a `TypeError` because `len` cannot be applied to an integer.

### Solution:
Ensure that the type of the argument is correct:

```python
len("hello")  # Outputs: 5
```

## Conclusion

Understanding these common Python errors is crucial for efficient debugging and robust programming. By recognizing the patterns and causes of these errors, developers can swiftly correct issues and prevent them from recurring. As you continue to develop in Python, keep these explanations in mind to help streamline your debugging process and improve your code's quality.
