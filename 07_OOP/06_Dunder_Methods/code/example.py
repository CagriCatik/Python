class Vector:
    def __init__(self, x: float, y: float) -> None:
        self.x = x
        self.y = y

    def __repr__(self) -> str:
        return f"Vector(x={self.x}, y={self.y})"

    def __add__(self, other: 'Vector') -> 'Vector':
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other: 'Vector') -> 'Vector':
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar: float) -> 'Vector':
        return Vector(self.x * scalar, self.y * scalar)

if __name__ == "__main__":
    vector1 = Vector(2, 3)
    vector2 = Vector(4, 1)
    
    print(f"vector1: {vector1}")  # Output: vector1: Vector(x=2, y=3)
    print(f"vector2: {vector2}")  # Output: vector2: Vector(x=4, y=1)
    
    vector_sum = vector1 + vector2
    print(f"vector_sum: {vector_sum}")  # Output: vector_sum: Vector(x=6, y=4)
    
    vector_diff = vector1 - vector2
    print(f"vector_diff: {vector_diff}")  # Output: vector_diff: Vector(x=-2, y=2)
    
    vector_scaled = vector1 * 3
    print(f"vector_scaled: {vector_scaled}")  # Output: vector_scaled: Vector(x=6, y=9)
