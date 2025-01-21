# 5 Critical Python Mistakes to Avoid

In this tutorial, we will delve into five common mistakes that many Python developers make, especially when starting out. Avoiding these mistakes will help you write more efficient, readable, and reliable code.

## Mistake 1: Performing Unreliable Benchmarks

Benchmarking is crucial for understanding the performance of different pieces of code. However, many developers make the mistake of performing unreliable benchmarks. Let's explore this with an example.

### Incorrect Benchmarking Example
```python
import time

def get_time(func):
    start_time = time.perf_counter()
    func()
    end_time = time.perf_counter()
    print(f"{func.__name__} took {end_time - start_time:.6f} seconds")

def test_pass():
    pass

def test_ellipsis():
    ...

if __name__ == "__main__":
    get_time(test_pass)
    get_time(test_ellipsis)
```

Running this code might lead to inconsistent results. Various factors like background processes can affect the timing. Additionally, changing the order of the functions can also change the results. 

### Improved Benchmarking Approach
Using more sophisticated tools like `timeit` can provide more reliable results. Adding warm-up runs can also stabilize the results.

```python
import timeit

def test_pass():
    pass

def test_ellipsis():
    ...

if __name__ == "__main__":
    print(timeit.timeit(test_pass, number=1000000))
    print(timeit.timeit(test_ellipsis, number=1000000))
```

This approach is more robust because `timeit` runs the functions multiple times and provides a more accurate measure of performance.

## Mistake 2: Premature Optimization

Premature optimization involves focusing on performance improvements too early in the development process. It is often better to write clear and correct code first and then optimize it if necessary.

### Example of Premature Optimization
```python
def is_adult(age):
    if age >= 21:
        return True
    else:
        return False
```

While this code works, it can be simplified for readability.

### Optimized Code
```python
def is_adult(age):
    return age >= 21
```

Optimizations should be driven by actual performance needs rather than assumptions. Profiling tools can help identify real bottlenecks in your code.

## Mistake 3: Neglecting Type Annotations

Type annotations improve code readability and help catch errors early by making the expected data types explicit. They are especially useful in large codebases and collaborative projects.

### Example without Type Annotations
```python
def add(a, b):
    return a + b

x = add("100", 100)  # This will raise a TypeError at runtime
```

### Code with Type Annotations
```python
def add(a: int, b: int) -> int:
    return a + b

x: int = add(100, 100)
```

Using type annotations and tools like `mypy` can help catch type-related errors before runtime, making your code more robust.

## Mistake 4: Improper Module Execution

When writing scripts and modules, it's important to ensure that the code runs as expected, whether it is executed directly or imported as a module.

### Common Mistake
```python
# bob_module.py
def get_name():
    return "Bob"

print(get_name())

# main.py
import bob_module
```

Executing `main.py` will run the code in `bob_module.py`, which is often unintended.

### Proper Module Execution
Using the `if __name__ == "__main__":` construct can help control the execution flow.

```python
# bob_module.py
def get_name():
    return "Bob"

if __name__ == "__main__":
    print(get_name())

# main.py
import bob_module
print(bob_module.get_name())
```

This ensures that the code in `bob_module.py` only runs when the module is executed directly, not when it is imported.

## Mistake 5: Lack of Project Planning

Not planning a project before starting to code can lead to confusion and inefficiency. Proper planning involves outlining the structure and functionality of your code before diving into implementation.

### Example of Poor Planning
```python
class SmartLamp:
    def __init__(self, name, version):
        self.name = name
        self.version = version

    def turn_on(self):
        pass

    def turn_off(self):
        pass

    def check_for_updates(self):
        pass
```

### Example of Proper Planning
Outline the structure and methods you need before implementing them.

```python
class SmartLamp:
    def __init__(self, name: str, version: str):
        self.name = name
        self.version = version

    def turn_on(self) -> None:
        print(f"{self.name} is now ON")

    def turn_off(self) -> None:
        print(f"{self.name} is now OFF")

    def check_for_updates(self) -> str:
        return "No updates available"
```

Creating a blueprint of your project helps ensure you don't miss important functionalities and can make the development process smoother.

## Conclusion

Avoiding these common Python mistakes can greatly improve the quality of your code. By focusing on reliable benchmarking, avoiding premature optimization, using type annotations, ensuring proper module execution, and planning your projects, you can develop more efficient, readable, and maintainable code.
