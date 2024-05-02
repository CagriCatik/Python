# Creating a regular set
normal_set = {1, 2, 3, 4, 5}

# Converting the regular set to a frozen set
frozen_set = frozenset(normal_set)

# Attempting to modify the regular set (allowed)
normal_set.add(6)
print("Modified Regular Set:", normal_set)

# Attempting to modify the frozen set (raises AttributeError)
try:
    frozen_set.add(6)
except AttributeError as e:
    print(f"AttributeError: {e}")

# Output:
# Modified Regular Set: {1, 2, 3, 4, 5, 6}
# AttributeError: 'frozenset' object has no attribute 'add'


# Creating a dataset with potential duplicates
data_with_duplicates = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 5]

# Creating a frozen set to remove duplicates
unique_data_set = frozenset(data_with_duplicates)

print("Original Dataset:", data_with_duplicates)
print("Unique Dataset:", unique_data_set)

# Output:
# Original Dataset: [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 5]
# Unique Dataset: frozenset({1, 2, 3, 4, 5, 6, 7, 8})

# Creating two sets
set_a = {1, 2, 3, 4, 5}
set_b = {3, 4, 5, 6, 7}

# Creating frozen sets for immutable set operations
frozen_set_a = frozenset(set_a)
frozen_set_b = frozenset(set_b)

# Performing set operations without modifying original sets
union_result = frozen_set_a.union(frozen_set_b)
intersection_result = frozen_set_a.intersection(frozen_set_b)

print("Union of Sets A and B:", union_result)
print("Intersection of Sets A and B:", intersection_result)

# Output:
# Union of Sets A and B: frozenset({1, 2, 3, 4, 5, 6, 7})
# Intersection of Sets A and B: frozenset({3, 4, 5})

