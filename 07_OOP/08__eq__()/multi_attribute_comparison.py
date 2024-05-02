from typing import Type

class Car:
    def __init__(self, brand: str, car_id: int, color: str) -> None:
        self.brand = brand
        self.car_id = car_id
        self.color = color

    def __eq__(self, other: Type["Car"]) -> bool:
        # Customize the comparison logic to consider multiple attributes
        return (
            self.brand == other.brand
            and self.car_id == other.car_id
            and self.color == other.color
        )

if __name__ == "__main__":
    car1 = Car("BMW", 1, "red")
    car2 = Car("BMW", 1, "red")

    result = car1 == car2
    print(f"Are car1 and car2 equal? {result}")
