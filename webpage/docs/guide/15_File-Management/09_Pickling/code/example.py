import os
import pickle

# Get the directory of the current script
script_dir = os.path.dirname(os.path.realpath(__file__))

# Define a class representing a Book
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"{self.title} by {self.author}, {self.pages} pages"

# Define a class representing a Library
class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def save_library(self, filename):
        pickle_path = os.path.join(script_dir, filename)
        with open(pickle_path, 'wb') as f:
            pickle.dump(self.books, f)

    @classmethod
    def load_library(cls, filename):
        library = cls()
        pickle_path = os.path.join(script_dir, filename)
        if os.path.exists(pickle_path):
            with open(pickle_path, 'rb') as f:
                library.books = pickle.load(f)
        return library

# Create an instance of the Library class
library = Library()

# Add some books to the library
library.add_book(Book("The Great Gatsby", "F. Scott Fitzgerald", 180))
library.add_book(Book("To Kill a Mockingbird", "Harper Lee", 281))
library.add_book(Book("1984", "George Orwell", 328))

# Save the library to a pickle file
library.save_library('library.pickle')

# Load the library from the pickle file
loaded_library = Library.load_library('library.pickle')

# Open the pickle file for reading in binary mode ('rb')
with open(os.path.join(script_dir, 'library.pickle'), 'rb') as f:
    # Load the data from the pickle file
    loaded_data = pickle.load(f)

# Now, you can iterate over the list of loaded objects and access their attributes
print("Loaded Data:")
for book in loaded_data:
    print("- Title:", book.title)
    print("  Author:", book.author)
    print("  Pages:", book.pages)


