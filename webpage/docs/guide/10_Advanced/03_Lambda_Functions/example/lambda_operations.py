operations = {"add": lambda x, y: x + y, "multiply": lambda x, y: x * y, "subtract": lambda x, y: x - y}

# Using the dynamic functions
result_add = operations["add"](3, 5)
result_multiply = operations["multiply"](4, 6)
result_subtract = operations["subtract"](10, 3)

print(result_add, result_multiply, result_subtract)
# Output: 8 24 7
