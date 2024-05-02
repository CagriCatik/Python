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

    def __eq__(self, other: Type["Car"]) -> bool:
        return super().__eq__(other) and self.car_id == other.car_id and self.color == other.color

class SpecialCar(Car):
    def __init__(self, brand: str, model: str, car_id: int, color: str, special_feature: str) -> None:
        super().__init__(brand, model, car_id, color)
        self.special_feature = special_feature

    def __eq__(self, other: Type["SpecialCar"]) -> bool:
        if isinstance(other, SpecialCar):
            return (
                super().__eq__(other)
                and self.special_feature == other.special_feature
            )
        return False

if __name__ == "__main__":
    special_car1 = SpecialCar("Tesla", "Model S", 1, "blue", "Autopilot")
    special_car2 = SpecialCar("Tesla", "Model S", 1, "blue", "Autopilot")

    result = special_car1 == special_car2
    print(f"Are special_car1 and special_car2 equal? {result}")
