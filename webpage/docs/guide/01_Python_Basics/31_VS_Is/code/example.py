# Comparing equality vs identity in Python

def compare_values(a, b):
    print(f"Comparing values {a} and {b}")
    print(f"{a} == {b}: {a == b}")  # Value comparison
    print(f"{a} is {b}: {a is b}")  # Identity comparison
    print(f"ID of {a}: {id(a)}")
    print(f"ID of {b}: {id(b)}")
    print("-" * 40)

#  Small integers (within the cached range)
a = 200
b = 200
compare_values(a, b)

# Larger integers (outside the cached range)
a = 1000
b = 1000
compare_values(a, b)

# Checking None with 'is'
var = None
if var is None:
    print("var is None")
else:
    print(f"var is {var}")

print("-" * 40)

# Custom class objects
class Animal:
    pass

cat = Animal()
dog = Animal()
compare_values(cat, dog)

# Additional examples with identity
same_cat = cat
compare_values(cat, same_cat)

# Example with immutable singleton
var = None
if var is None:
    print("Correct check: var is None")
else:
    print("Incorrect check")

# Comparing different types
x = 10
y = "10"
compare_values(x, y)

# Immutable objects with same values
str1 = "hello"
str2 = "hello"
compare_values(str1, str2)
