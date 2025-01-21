from dataclasses import dataclass

@dataclass
class Author:
    name: str
    nationality: str

@dataclass
class Book:
    title: str
    author: Author
    year_published: int
    genre: str

# Creating instances
george_orwell = Author("George Orwell", "British")
animal_farm = Book("Animal Farm", george_orwell, 1945, "Satire")

# Accessing and printing information
print(f"{animal_farm.title} by {animal_farm.author.name}, published in {animal_farm.year_published}.")
