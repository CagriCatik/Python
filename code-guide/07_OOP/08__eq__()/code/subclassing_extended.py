from typing import Type

class Vehicle:
    def __init__(self, brand: str, model: str) -> None:
        self.brand = brand
        self.model = model

    def __eq__(self, other: Type["Vehicle"]) -> bool:
        return self.__dict__ == other.__dict__

class Car(Vehicle):
    def __init__(self, brand: str, model: str, car_id: int, color: str) -> None:
        super().__init__(brand, model)
        self.car_id = car_id
        self.color = color

    # Extend the comparison logic to include car-specific attributes
    def __eq__(self, other: Type["Car"]) -> bool:
        return super().__eq__(other) and self.car_id == other.car_id and self.color == other.color

if __name__ == "__main__":
    car1 = Car("BMW", "X5", 1, "red")
    car2 = Car("BMW", "X5", 1, "red")

    result = car1 == car2
    print(f"Are car1 and car2 equal? {result}")
