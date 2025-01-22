# Student Information Tuple
student1 = ("Alice", 20, ["Math", "Physics", "Computer Science"])
student2 = ("Bob", 22, ["History", "English", "Biology"])

# Accessing Tuple Elements
print(f"{student1[0]} is {student1[1]} years old and enrolled in: {student1[2]}")

# Immutable, but you can create a new tuple with modifications
updated_student1 = student1[:2] + (21,) + (student1[2] + ["Statistics"],)
print(f"Updated {student1[0]}'s age and courses: {updated_student1[1]}, {updated_student1[2]}")


from typing import Tuple

# Annotated Geographic Coordinates
coordinates1: Tuple[float, float] = (37.7749, -122.4194)  # San Francisco
coordinates2: Tuple[float, float] = (40.7128, -74.0060)    # New York

# Function to calculate distance between two coordinates
def calculate_distance(coord1: Tuple[float, float], coord2: Tuple[float, float]) -> float:
    return ((coord1[0] - coord2[0])**2 + (coord1[1] - coord2[1])**2)**0.5

# Calculate distance between San Francisco and New York
distance_sf_ny = calculate_distance(coordinates1, coordinates2)
print(f"Distance between San Francisco and New York: {distance_sf_ny} units")


# System Configuration Tuples
system_config1 = ("Laptop", (1920, 1080), ["Chrome", "VSCode", "Python"])
system_config2 = ("Desktop", (2560, 1440), ["Firefox", "Eclipse", "Java"])

# Displaying System Information
print(f"{system_config1[0]} with resolution {system_config1[1]} has software: {system_config1[2]}")

# Immutable, but creating a new tuple for modifications
updated_config1 = (system_config1[0], (2560, 1440), system_config1[2] + ["Sublime Text"])
print(f"Updated {system_config1[0]}'s resolution and software: {updated_config1[1]}, {updated_config1[2]}")
