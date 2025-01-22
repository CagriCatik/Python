text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

# Counting word frequency using enumerate
word_count = {}
for index, word in enumerate(text.split(), start=1):
    if word in word_count:
        word_count[word].append(index)
    else:
        word_count[word] = [index]

# Displaying results
for word, positions in word_count.items():
    print(f"{word}: {len(positions)} occurrences at positions {positions}")


import math

# A complex algorithm to find prime numbers using enumerate
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# Enumerating and filtering prime numbers
numbers = [15, 23, 37, 50, 67, 82, 97]
prime_indices = [index for index, num in enumerate(numbers) if is_prime(num)]

# Displaying results
print(f"Prime numbers at indices: {prime_indices}")


list1 = [1, 3, 5, 7, 9]
list2 = [2, 4, 6, 8, 10]

# Enumerating and comparing elements pairwise
for index, (element1, element2) in enumerate(zip(list1, list2), start=1):
    if element1 > element2:
        print(f"Element at index {index}: {element1} is greater than {element2}")
    elif element1 < element2:
        print(f"Element at index {index}: {element1} is less than {element2}")
    else:
        print(f"Element at index {index}: {element1} is equal to {element2}")
