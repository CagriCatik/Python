from typing import List

class Animal:
    def make_sound(self) -> str:
        return "Generic animal sound"

class Dog(Animal):
    def make_sound(self) -> str:
        return "Bark"

class Cat(Animal):
    def make_sound(self, volume: int) -> str:
        return "Meow" * volume

# Incorrect usage
animals: List[Animal] = [Dog(), Cat()]  # Mypy will catch the incorrect method signature

# Running Mypy
# $ mypy your_script.py
# Mypy will warn about incompatible method signatures in the list.
