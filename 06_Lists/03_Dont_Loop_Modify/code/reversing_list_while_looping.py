# Original list of characters
chars = ['a', 'b', 'c', 'd', 'e']

# Method 1: Reversing list while looping
for char in reversed(chars):
    chars.append(char.upper())

print("Method 1 Result:", chars)

# Method 2: Using slicing to create a reversed copy
reversed_chars = chars[::-1]
for char in reversed_chars:
    chars.append(char.upper())

print("Method 2 Result:", chars)
