class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        self._celsius = value

    @property
    def kelvin(self):
        return self.celsius + 273.15

    @property
    def fahrenheit(self):
        return (self.celsius * 9/5) + 32

    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

# Example usage:
if __name__ == "__main__":
    temp = Temperature(25)
    print(f"Celsius: {temp.celsius}")
    print(f"Kelvin: {temp.kelvin}")
    print(f"Fahrenheit: {temp.fahrenheit}")

    # Update temperature in Fahrenheit, and Celsius is recalculated
    temp.fahrenheit = 77
    print(f"Updated Celsius: {temp.celsius}")
    print(f"Updated Kelvin: {temp.kelvin}")
    print(f"Updated Fahrenheit: {temp.fahrenheit}")
