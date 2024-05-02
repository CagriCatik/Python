# Dunder Methods in Python Classes Tutorial

In this tutorial, we'll explore the concept of dunder methods (double underscore methods) and how they can be used to enhance the functionality of your classes. We'll cover the `__init__` dunder method and the `__len__` and `__add__` dunder methods with practical examples.

## 1. The `__init__` Dunder Method

The `__init__` dunder method, also known as the initializer, is used to initialize a class when an instance of it is created. Let's create a simple class called `Book` and define the `__init__` method:

```python
class Book:
    def __init__(self, title: str, pages: int) -> None:
        self.title = title
        self.pages = pages
```

Now, let's instantiate a couple of books:

```python
if __name__ == "__main__":
    # Creating instances of the Book class
    pi_daily = Book("Pi Daily", 100)
    harry_potter = Book("Harry Potter", 340)

    # Using the initialized values
    print(pi_daily.title)  # Output: Pi Daily
    print(harry_potter.pages)  # Output: 340
```

## 2. The `__len__` Dunder Method

The `__len__` dunder method allows us to define the behavior of the built-in `len()` function for instances of our class. In this example, we'll define `__len__` to return the number of pages in a book:

```python
class Book:
    # ... (previous code)

    def __len__(self) -> int:
        return self.pages
```

Now, let's use the `len()` function with our book instances:

```python
if __name__ == "__main__":
    # ... (previous code)

    # Using the len() function with book instances
    print(len(pi_daily))  # Output: 100
    print(len(harry_potter))  # Output: 340
```

## 3. The `__add__` Dunder Method

The `__add__` dunder method allows us to define the behavior of the `+` operator for instances of our class. We'll use it to concatenate two books:

```python
class Book:
    # ... (previous code)

    def __add__(self, other: "Book") -> "Book":
        combined_title = f"{self.title} and {other.title}"
        combined_pages = self.pages + other.pages
        return Book(combined_title, combined_pages)
```

Now, let's try adding two books together:

```python
if __name__ == "__main__":
    # ... (previous code)

    # Adding two books together
    combined_books = pi_daily + harry_potter
    print(combined_books.title)  # Output: Pi Daily and Harry Potter
    print(combined_books.pages)  # Output: 440
```
