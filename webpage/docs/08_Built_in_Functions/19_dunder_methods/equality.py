class Person:
    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city
    
    def __eq__(self, other):
        return (
            self.name == other.name and 
            self.age == other.age and 
            self.city == other.city
        )

# Example usage:
person1 = Person("Alice", 30, "New York")
person2 = Person("Alice", 30, "New York")
person3 = Person("Bob", 25, "Los Angeles")

print(person1 == person2)  # Output: True
print(person1 == person3)  # Output: False
