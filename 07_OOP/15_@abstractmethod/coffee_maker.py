from abc import ABC, abstractmethod

class Appliance(ABC):
    def __init__(self, brand, version_number):
        self.brand = brand
        self.version_number = version_number
        self.is_turned_on = False

    @abstractmethod
    def turn_on(self):
        pass

    @abstractmethod
    def turn_off(self):
        pass

class CoffeeMaker(Appliance):
    def __init__(self, brand, version_number, coffee_type):
        super().__init__(brand, version_number)
        self.coffee_type = coffee_type

    def turn_on(self):
        if self.is_turned_on:
            print(f"{self.brand} coffee maker is already turned on.")
        else:
            self.is_turned_on = True
            print(f"{self.brand} coffee maker is now turned on. Brewing {self.coffee_type} coffee.")

    def turn_off(self):
        if self.is_turned_on:
            self.is_turned_on = False
            print(f"{self.brand} coffee maker is now turned off.")
        else:
            print(f"{self.brand} coffee maker is already turned off.")

if __name__ == "__main__":
    coffee_maker = CoffeeMaker(brand="JavaMaster", version_number=2, coffee_type="Espresso")

    coffee_maker.turn_on()
    coffee_maker.turn_off()
