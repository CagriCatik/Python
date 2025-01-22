class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        # User-friendly representation
        return f'Point at ({self.x}, {self.y})'

    def __repr__(self):
        # Detailed, unambiguous representation
        return f'Point(x={self.x}, y={self.y})'

# Create an instance of Point
p = Point(3, 4)

# Demonstrating str() and repr()
print("Using str():", str(p))   # Output: Point at (3, 4)
print("Using repr():", repr(p)) # Output: Point(x=3, y=4)

# Demonstrating fallback behavior
class SimplePoint:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f'SimplePoint(x={self.x}, y={self.y})'

sp = SimplePoint(1, 2)
print("Fallback to repr() when str() is not defined:", str(sp))  # Output: SimplePoint(x=1, y=2)
print("Using repr():", repr(sp))                                # Output: SimplePoint(x=1, y=2)

# Debugging example
import logging
logging.basicConfig(level=logging.DEBUG)

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Vector(x={self.x}, y={self.y})'

vector = Vector(5, 7)
logging.debug(repr(vector))  # Output in log: DEBUG:root:Vector(x=5, y=7)

# Display example
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f'"{self.title}" by {self.author}'

book = Book('1984', 'George Orwell')
print("Book str() representation:", str(book))  # Output: "1984" by George Orwell
