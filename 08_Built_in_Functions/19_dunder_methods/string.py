class Book:
    def __init__(self, title, author, genre):
        self.title = title
        self.author = author
        self.genre = genre
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        return f"Book(title='{self.title}', author='{self.author}', genre='{self.genre}')"

# Example usage:
book = Book("Harry Potter", "J.K. Rowling", "Fantasy")
print(str(book))   # Output: Harry Potter by J.K. Rowling
print(repr(book))  # Output: Book(title='Harry Potter', author='J.K. Rowling', genre='Fantasy')
