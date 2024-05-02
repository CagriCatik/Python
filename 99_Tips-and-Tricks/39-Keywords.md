# 39 Keywords

Python is a versatile and powerful programming language known for its simplicity and readability. Understanding its keywords is essential for mastering Python. In this tutorial, we'll explore all 39 Python keywords, including code snippets to illustrate their usage. This comprehensive tutorial covers all 39 Python keywords, providing code snippets and explanations for each. Understanding these keywords will empower you to write efficient and effective Python code.

**Table of Contents:**

1. False
2. None
3. True
4. and
5. as
6. assert
7. async
8. await
9. break
10. class
11. continue
12. def
13. del
14. elif
15. else
16. except
17. finally
18. for
19. from
20. global

---

**1. False:**
The `False` keyword represents the Boolean value `False`, equivalent to `0`.

```python
has_money = False
print(has_money)  # Output: False
print(int(False))  # Output: 0
```

**2. None:**
`None` denotes the absence of a value, often used as a placeholder or to signify missing data.

```python
selected_user = None
print(selected_user)  # Output: None
```

**3. True:**
Similar to `False`, `True` represents the Boolean value `True`, equivalent to `1`.

```python
has_money = True
print(has_money)  # Output: True
print(int(True))  # Output: 1
```

**4. and:**
The `and` keyword is used for logical conjunction, requiring all conditions to be `True` for the overall condition to be `True`.

```python
a = 5
b = 10
c = 15

if a < b and b < c:
    print("Both conditions are true.")
```

**5. as:**
`as` is used for aliasing, providing an alternative name for a module or its components.

```python
import math as m
print(m.cos(10))  # Output: Cosine of 10 radians
```

**6. assert:**
`assert` is used for debugging and ensuring conditions are met. If the condition is `False`, it raises an `AssertionError`.

```python
database = True
assert database, "Database not found."
```

**7. async:**
Used in asynchronous programming, `async` defines a coroutine, allowing concurrent execution of code.

```python
import asyncio

async def main():
    # Asynchronous code here

asyncio.run(main())
```

**8. await:**
`await` is used within `async` functions to pause execution until an asynchronous operation completes.

```python
async def my_task(number):
    # Asynchronous task
    return number * 2

async def main():
    result = await my_task(5)
    print(result)

asyncio.run(main())
```

**9. break:**
`break` is used to exit a loop prematurely.

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

**10. class:**
`class` is used to create user-defined classes.

```python
class Person:
    def __init__(self, name):
        self.name = name

person1 = Person("Alice")
```

**11. continue:**
`continue` is used to skip the rest of the loop's code and start the next iteration.

```python
names = ["Tom", "Bob", "James"]

for name in names:
    if name == "Bob":
        print("We do not say hello to Bob.")
        continue
    print("Hello", name)
```

**12. def:**
`def` is used to define functions or methods.

```python
def greet(name):
    print("Hello,", name)

greet("Alice")
```

**13. del:**
`del` is used to delete references to objects.

```python
name = 10
del name
```

**14. elif:**
`elif` is short for "else if" and is used to check additional conditions.

```python
weather = "rainy"

if weather == "rainy":
    print("Remember your umbrella.")
elif weather == "cloudy":
    print("It might rain.")
else:
    print("Enjoy the weather!")
```

**15. else:**
`else` is used as a final condition block when all other conditions fail.

```python
if condition:
    # Code block
else:
    # Code block
```

**16. except:**
`except` is used in exception handling to catch specific exceptions.

```python
try:
    # Risky code
except ValueError as e:
    print("An error occurred:", e)
```

**17. finally:**
`finally` is used in exception handling to execute code regardless of whether an exception occurred or not.

```python
try:
    # Risky code
except:
    # Exception handling
finally:
    # Cleanup code
```

**18. for:**
`for` is used to iterate over a sequence (such as a list or tuple).

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

**19. from:**
`from` is used to import specific attributes or submodules from a module.

```python
from math import sqrt
print(sqrt(16))  # Output: 4.0
```

**20. global:**
`global` is used to declare that a variable is in the global scope within a function.

```python
name = "Bob"

def print_name():
    global name
    print(name)

print_name()  # Output: Bob
```

**21. if:**
`if` is used for conditional execution, executing code if a specified condition is `True`.

```python
x = 10

if x > 5:
    print("x is greater than 5")
```

**22. import:**
`import` is used to import modules or packages into a Python script.

```python
import math
print(math.pi)  # Output: 3.141592653589793
```

**23. in:**
`in` is used to check if a value exists within a sequence (such as a list, tuple, or string).

```python
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits:
    print("Yes, banana is in the fruits list")
```

**24. is:**
`is` is used to test object identity, checking if two variables refer to the same object.

```python
x = [1, 2, 3]
y = [1, 2, 3]

if x is y:
    print("x and y are the same object")
else:
    print("x and y are different objects")
```

**25. lambda:**
`lambda` is used to create anonymous functions, typically for short functions.

```python
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5
```

**26. nonlocal:**
`nonlocal` is used to declare that a variable is not local to a function, but it is also not global.

```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 1
        print(x)
    inner()

outer()  # Output: 11
```

**27. not:**
`not` is a logical negation operator, reversing the logical state of its operand.

```python
x = True
print(not x)  # Output: False
```

**28. or:**
`or` is used for logical disjunction, requiring at least one condition to be `True` for the overall condition to be `True`.

```python
x = 5

if x < 0 or x > 10:
    print("x is either less than 0 or greater than 10")
```

**29. pass:**
`pass` is a null operation, used as a placeholder where syntax requires a statement but no action is needed.

```python
def my_function():
    pass  # Placeholder for future code implementation
```

**30. raise:**
`raise` is used to raise exceptions programmatically.

```python
x = 10
if x > 5:
    raise Exception("x should not exceed 5")
```

**31. return:**
`return` is used to exit a function and return a value.

```python
def add(x, y):
    return x + y

result = add(3, 4)
print(result)  # Output: 7
```

**32. try:**
`try` is used for exception handling, allowing code to be executed with the potential for errors to be caught.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

**33. while:**
`while` is used to create a loop that continues executing as long as a condition is `True`.

```python
x = 0
while x < 5:
    print(x)
    x += 1
```

**34. with:**
`with` is used for context management, ensuring that cleanup code is executed even if an error occurs.

```python
with open("file.txt", "r") as file:
    content = file.read()
```

**35. yield:**
`yield` is used in generator functions to produce a series of values.

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
print(next(gen))  # Output: 1
```

**36. case (Python 3.10 and later):**
`case` is used in match-case statements for pattern matching.

```python
number = 5

match number:
    case 0:
        print("Zero")
    case 1:
        print("One")
    case _:
        print("Other")
```

**37. match (Python 3.10 and later):**
`match` is used for pattern matching, replacing complex `if-elif-else` chains.

```python
number = 5

match number:
    case 0:
        print("Zero")
    case 1:
        print("One")
    case _:
        print("Other")
```

**38. case (Python 3.10 and later):**
`case` is used in match-case statements for pattern matching.

```python
number = 5

match number:
    case 0:
        print("Zero")
    case 1:
        print("One")
    case _:
        print("Other")
```

**39. match (Python 3.10 and later):**
`match` is used for pattern matching, replacing complex `if-elif-else` chains.

```python
number = 5

match number:
    case 0:
        print("Zero")
    case 1:
        print("One")
    case _:
        print("Other")
```
