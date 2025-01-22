# 1. False
has_money = False
print(has_money)  # Output: False
print(int(False))  # Output: 0

# 2. None
selected_user = None
print(selected_user)  # Output: None

# 3. True
is_admin = True
print(is_admin)  # Output: True
print(int(True))  # Output: 1

# 4. and
a, b, c = 5, 10, 15
if a < b and b < c:
    print("Both conditions are true.")

# 5. as
import math as m
print(m.sqrt(16))  # Output: 4.0

# 6. assert
database_connected = True
assert database_connected, "Database not connected!"

# 7. async
import asyncio
async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(2)
    print("Data fetched!")

asyncio.run(fetch_data())

# 8. await
async def main():
    result = await fetch_data()
    print("Done:", result)

asyncio.run(main())

# 9. break
for i in range(10):
    if i == 5:
        break
    print(i)

# 10. class
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

car1 = Car("Toyota", "Corolla")
print(car1.make, car1.model)

# 11. continue
numbers = [1, 2, 0, 4, 5]
for num in numbers:
    if num == 0:
        continue
    print("Number:", num)

# 12. def
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# 13. del
x = 10
del x
# print(x)  # This will raise a NameError since x is deleted

# 14. elif
temperature = 30
if temperature > 30:
    print("It's hot!")
elif temperature == 30:
    print("It's warm!")
else:
    print("It's cold!")

# 15. else
is_sunny = False
if is_sunny:
    print("Let's go outside!")
else:
    print("Stay indoors.")

# 16. except
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)

# 17. finally
try:
    file = open("test.txt", "r")
except FileNotFoundError:
    print("File not found.")
finally:
    print("This runs no matter what.")

# 18. for
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 19. from
from math import pi
print(pi)  # Output: 3.141592653589793

# 20. global
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # Output: 1

# 21. if
number = 10
if number > 5:
    print("Number is greater than 5")

# 22. import
import random
print(random.randint(1, 10))  # Output: A random integer between 1 and 10

# 23. in
letters = ['a', 'b', 'c']
if 'a' in letters:
    print("'a' is in the list")

# 24. is
a = [1, 2, 3]
b = a
print(a is b)  # Output: True

# 25. lambda
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5

# 26. nonlocal
def outer_func():
    x = 10
    def inner_func():
        nonlocal x
        x += 5
        print(x)
    inner_func()

outer_func()  # Output: 15

# 27. not
is_tired = False
print(not is_tired)  # Output: True

# 28. or
x = 10
if x < 5 or x > 8:
    print("x is either less than 5 or greater than 8")

# 29. pass
def placeholder_function():
    pass  # TODO: Implement this function later

# 30. raise
def check_age(age):
    if age < 18:
        raise ValueError("Age must be at least 18.")
    return "Access granted."

try:
    print(check_age(15))
except ValueError as e:
    print(e)

# 31. return
def multiply(x, y):
    return x * y

result = multiply(4, 5)
print(result)  # Output: 20

# 32. try
try:
    value = int("abc")
except ValueError:
    print("Conversion failed!")

# 33. while
count = 0
while count < 3:
    print("Counting:", count)
    count += 1

# 34. with
with open("test.txt", "w") as file:
    file.write("Hello, World!")

# 35. yield
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num)

# 36. case (Python 3.10+)
number = 3
match number:
    case 1:
        print("One")
    case 2:
        print("Two")
    case _:
        print("Other")

# 37. match (Python 3.10+)
shape = "circle"
match shape:
    case "circle":
        print("It's a circle")
    case "square":
        print("It's a square")
    case _:
        print("Unknown shape")

# 38. case (Python 3.10+)
# This is already covered above

# 39. match (Python 3.10+)
# This is already covered above
