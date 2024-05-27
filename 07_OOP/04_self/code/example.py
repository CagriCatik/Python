from datetime import datetime

class Car:
    def __init__(self, make: str, model: str, year: int):
        self.make = make
        self.model = model
        self.year = year

    def display_details(self):
        print(f"Car Details: {self.year} {self.make} {self.model}")

    def calculate_age(self):
        current_year = datetime.now().year
        car_age = current_year - self.year
        print(f"The car is {car_age} years old.")

if __name__ == "__main__":
    car1 = Car("Toyota", "Corolla", 2010)
    car2 = Car("Ford", "Mustang", 2015)

    car1.display_details()  # Output: Car Details: 2010 Toyota Corolla
    car1.calculate_age()    # Output: The car is X years old (depending on the current year)

    car2.display_details()  # Output: Car Details: 2015 Ford Mustang
    car2.calculate_age()    # Output: The car is Y years old (depending on the current year)
