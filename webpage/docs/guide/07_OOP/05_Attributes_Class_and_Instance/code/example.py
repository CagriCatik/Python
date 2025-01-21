class Vehicle:
    # Class attribute
    category = "transport"

    def __init__(self, make, model):
        # Instance attributes
        self.make = make
        self.model = model

    def display_info(self):
        return f"Make: {self.make}, Model: {self.model}, Category: {Vehicle.category}"


# Creating instances of Vehicle
car = Vehicle("Toyota", "Corolla")
bike = Vehicle("Honda", "CBR")

# Accessing class attribute via the class
print("Class attribute accessed via class:", Vehicle.category)

# Accessing class attribute via instances
print("Class attribute accessed via car instance:", car.category)
print("Class attribute accessed via bike instance:", bike.category)

# Accessing instance attributes
print("Car instance - make:", car.make)
print("Car instance - model:", car.model)
print("Bike instance - make:", bike.make)
print("Bike instance - model:", bike.model)

# Displaying information using a method
print("Car info:", car.display_info())
print("Bike info:", bike.display_info())

# Modifying class attribute
Vehicle.category = "automobile"
print("\nAfter modifying class attribute:")

# Accessing modified class attribute via instances
print("Class attribute accessed via car instance:", car.category)
print("Class attribute accessed via bike instance:", bike.category)

# Displaying information using a method after modification
print("Car info:", car.display_info())
print("Bike info:", bike.display_info())

# Modifying instance attribute
car.model = "Camry"
print("\nAfter modifying car's instance attribute:")

# Accessing modified instance attribute
print("Car instance - make:", car.make)
print("Car instance - model:", car.model)

# Displaying information using a method after instance modification
print("Car info:", car.display_info())
print("Bike info:", bike.display_info())


# Example: Combining Class and Instance Attributes
class Employee:
    # Class attribute
    company_name = "TechCorp"

    def __init__(self, name, position):
        # Instance attributes
        self.name = name
        self.position = position

    def display_info(self):
        return f"Name: {self.name}, Position: {self.position}, Company: {Employee.company_name}"


# Creating instances of Employee
emp1 = Employee("Alice", "Developer")
emp2 = Employee("Bob", "Manager")

# Accessing class and instance attributes
print("\nEmployee instances:")
print(emp1.display_info())
print(emp2.display_info())

# Modifying class attribute
Employee.company_name = "Innovatech"
print("\nAfter modifying class attribute:")

# Accessing modified class attribute via instances
print(emp1.display_info())
print(emp2.display_info())
