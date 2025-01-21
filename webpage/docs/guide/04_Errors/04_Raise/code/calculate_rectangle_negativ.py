def calculate_rectangle_area(length, width):
    if length <= 0 or width <= 0:
        raise ValueError("Length and width must be positive.")
    return length * width

try:
    area = calculate_rectangle_area(5, 4)
    print("Area of the rectangle:", area)  # Output: Area of the rectangle: 20

    area = calculate_rectangle_area(-2, 6)  # Raises ValueError
except ValueError as ve:
    print("Error:", ve)
