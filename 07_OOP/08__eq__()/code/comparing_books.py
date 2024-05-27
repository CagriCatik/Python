from typing import Type

class Book:
    def __init__(self, title: str, author: str, isbn: str) -> None:
        self.title = title
        self.author = author
        self.isbn = isbn

    def __eq__(self, other: Type['Book']) -> bool:
        if isinstance(other, Book):
            return (self.title == other.title and
                    self.author == other.author and
                    self.isbn == other.isbn)
        return False

    def __repr__(self) -> str:
        return f"Book(title='{self.title}', author='{self.author}', isbn='{self.isbn}')"

if __name__ == "__main__":
    book1 = Book("1984", "George Orwell", "1234567890")
    book2 = Book("1984", "George Orwell", "1234567890")
    book3 = Book("Brave New World", "Aldous Huxley", "0987654321")

    # Comparing books
    print("Book 1 == Book 1? ->", book1 == book2)  # This should print True
    print("Book 1 == Book 3? ->", book1 == book3)  # This should print False

    # Printing book objects
    print(book1)  # This should print Book(title='1984', author='George Orwell', isbn='1234567890')
    print(book3)  # This should print Book(title='Brave New World', author='Aldous Huxley', isbn='0987654321')
