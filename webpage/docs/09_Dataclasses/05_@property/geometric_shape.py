import math

class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive.")
        self._radius = value

    @property
    def diameter(self):
        return 2 * self.radius

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    @property
    def circumference(self):
        return 2 * math.pi * self.radius

# Example usage:
if __name__ == "__main__":
    circle = Circle(5)
    print(f"Radius: {circle.radius}")
    print(f"Diameter: {circle.diameter}")
    print(f"Area: {circle.area}")
    print(f"Circumference: {circle.circumference}")

    # Update the radius, and all dependent properties are recalculated
    circle.radius = 7
    print(f"Updated Radius: {circle.radius}")
    print(f"Updated Diameter: {circle.diameter}")
    print(f"Updated Area: {circle.area}")
    print(f"Updated Circumference: {circle.circumference}")
