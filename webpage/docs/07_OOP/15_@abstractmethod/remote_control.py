from abc import ABC, abstractmethod

class RemoteControl(ABC):
    @abstractmethod
    def power_on(self):
        pass

    @abstractmethod
    def power_off(self):
        pass

class TV(RemoteControl):
    def __init__(self, brand):
        self.brand = brand
        self.is_powered_on = False

    def power_on(self):
        if not self.is_powered_on:
            self.is_powered_on = True
            print(f"{self.brand} TV is now powered on.")
        else:
            print(f"{self.brand} TV is already powered on.")

    def power_off(self):
        if self.is_powered_on:
            self.is_powered_on = False
            print(f"{self.brand} TV is now powered off.")
        else:
            print(f"{self.brand} TV is already powered off.")

if __name__ == "__main__":
    samsung_tv = TV(brand="Samsung")

    samsung_tv.power_on()
    samsung_tv.power_off()
