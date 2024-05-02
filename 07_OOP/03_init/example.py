# Author and Book Classes
class Author:
    def __init__(self, name, nationality):
        self.name = name
        self.nationality = nationality

class Book:
    def __init__(self, title, genre, author):
        self.title = title
        self.genre = genre
        self.author = author

# Instances of Author and Book
author1 = Author("J.K. Rowling", "British")
book1 = Book("Harry Potter and the Philosopher's Stone", "Fantasy", author1)

author2 = Author("Haruki Murakami", "Japanese")
book2 = Book("Norwegian Wood", "Fiction", author2)


# DatabaseConnection Class
class DatabaseConnection:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.connect_to_database()

    def connect_to_database(self):
        # Implement database connection logic here
        print(f"Connected to the database using: {self.connection_string}")

# Instances with different database connection strings
db_connection1 = DatabaseConnection("mysql://user:password@localhost/mydatabase")
db_connection2 = DatabaseConnection("postgresql://user:password@localhost/anotherdb")


# Employee Class
class Employee:
    def __init__(self, name, position, salary=50000, skills=None):
        self.name = name
        self.position = position
        self.salary = salary
        self.skills = skills if skills is not None else []

# Instances with different initialization scenarios
employee1 = Employee("John Doe", "Software Engineer", 75000, ["Python", "JavaScript"])
employee2 = Employee("Jane Smith", "Data Scientist")
