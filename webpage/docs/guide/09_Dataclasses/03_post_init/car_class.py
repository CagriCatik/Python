from dataclasses import dataclass, field
from dataclasses import post_init

@dataclass
class Car:
    make: str
    model: str
    year: int
    price: float
    mileage: float
    depreciated_value: float = field(init=False)

    @post_init
    def calculate_depreciated_value(self) -> None:
        depreciation_rate = 0.05
        self.depreciated_value = self.price * (1 - depreciation_rate) ** (2024 - self.year)

    def display_car_info(self) -> None:
        print(f"Make: {self.make}\nModel: {self.model}\nYear: {self.year}\n"
              f"Price: ${self.price:.2f}\nMileage: {self.mileage} miles\n"
              f"Depreciated Value: ${self.depreciated_value:.2f}\n")


if __name__ == "__main__":
    car1 = Car(make="Toyota", model="Camry", year=2019, price=25000, mileage=30000)
    car2 = Car(make="Honda", model="Accord", year=2021, price=28000, mileage=20000)

    print("Car Information:")
    car1.display_car_info()
    car2.display_car_info()
