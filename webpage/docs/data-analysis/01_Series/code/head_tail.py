import pandas as pd

# Reading from the "top richest in the world.csv" file
richest = pd.read_csv("datasets/TopRichestInWorld.csv")

# Using head to get the first five elements by default
head_default = richest.head()

# Using head to get the first ten elements
head_ten = richest.head(10)

# Using head with a negative number to exclude the last ten elements
head_minus_ten = richest.head(-10)

# Using tail to get the last ten elements
tail_ten = richest.tail(10)

# Using tail with a negative number to exclude the first ten elements
tail_minus_ten = richest.tail(-10)

# Displaying the results
print("Default Head (First Five Elements):\n", head_default)
print("\nHead (First Ten Elements):\n", head_ten)
print("\nHead (Exclude Last Ten Elements):\n", head_minus_ten)
print("\nTail (Last Ten Elements):\n", tail_ten)
print("\nTail (Exclude First Ten Elements):\n", tail_minus_ten)