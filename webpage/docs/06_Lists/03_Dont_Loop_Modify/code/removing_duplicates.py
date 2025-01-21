# Original list with duplicate elements
numbers = [1, 2, 3, 4, 2, 5, 6, 4]

# Method 1: Modifying list while looping
for num in numbers:
    if numbers.count(num) > 1:
        numbers.remove(num)

print("Method 1 Result:", numbers)

# Method 2: Using a temporary list
unique_numbers = []
for num in numbers:
    if num not in unique_numbers:
        unique_numbers.append(num)

print("Method 2 Result:", unique_numbers)
