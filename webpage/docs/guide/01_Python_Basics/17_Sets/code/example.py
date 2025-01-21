# Example 1: Set Operations

# Creating two sets
set_a = {1, 2, 3, 4, 5}
set_b = {3, 4, 5, 6, 7}

# Union of two sets
union_result = set_a.union(set_b)
print("Union:", union_result)

# Intersection of two sets
intersection_result = set_a.intersection(set_b)
print("Intersection:", intersection_result)

# Difference between two sets
difference_result = set_a.difference(set_b)
print("Difference (set_a - set_b):", difference_result)

# Symmetric difference (elements in either set, but not both)
symmetric_difference_result = set_a.symmetric_difference(set_b)
print("Symmetric Difference:", symmetric_difference_result)


# Example 2: Removing Duplicates from a List using a Set

# Original list with duplicates
original_list = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 5]

# Using a set to remove duplicates
unique_set = set(original_list)

# Converting the set back to a list
unique_list = list(unique_set)

print("Original List:", original_list)
print("List with Duplicates Removed:", unique_list)


# Example 3: Finding Common Elements in Multiple Sets

# Creating three sets
set_1 = {1, 2, 3, 4, 5}
set_2 = {3, 4, 5, 6, 7}
set_3 = {5, 6, 7, 8, 9}

# Finding common elements among the sets
common_elements = set_1.intersection(set_2, set_3)

print("Set 1:", set_1)
print("Set 2:", set_2)
print("Set 3:", set_3)
print("Common Elements:", common_elements)
