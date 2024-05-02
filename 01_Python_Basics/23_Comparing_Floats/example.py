import math

# Define two large float values
large_a = 1.0e20
large_b = 1.0000001e20

# Check if the large numbers are close with a relative tolerance of 0.0001%
result = math.isclose(large_a, large_b, rel_tol=0.0001)

print(result)  # This will print True


##################################################


import math

# Define two small float values
small_a = 1e-10
small_b = 1.000001e-10

# Check if the small numbers are close with an absolute tolerance of 1e-11
result = math.isclose(small_a, small_b, abs_tol=1e-11)

print(result)  # This will print True


####################################################


import math

# Define two float values with different magnitudes
mixed_a = 1.0e5
mixed_b = 1.0001e5

# Check if the mixed numbers are close with a relative tolerance of 0.001% and an absolute tolerance of 100
result = math.isclose(mixed_a, mixed_b, rel_tol=0.001, abs_tol=100)

print(result)  # This will print True
