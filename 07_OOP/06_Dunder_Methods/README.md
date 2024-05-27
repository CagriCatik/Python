# Utilizing Dunder Methods in Classes

In this tutorial, we will explore the concept of dunder methods, also known as magic methods, and their application in Python classes. Dunder methods, short for "double underscore" methods, are special methods with double leading and trailing underscores (e.g., `__init__`). These methods are integral to defining the behavior of objects in Python. While we've already encountered the `__init__` method for initializing instances, we will delve deeper into other dunder methods that enhance the functionality and interactivity of our classes.

## Introduction to Dunder Methods

Dunder methods enable customization of fundamental object behaviors, such as initialization, representation, arithmetic operations, and more. It's crucial to note that these methods are not called directly by their names. Instead, they are invoked implicitly through specific syntax or functions in Python.

## Example Class: Book

To demonstrate the use of dunder methods, we'll define a `Book` class. This class will include several dunder methods to illustrate their functionalities.

## Step 1: Defining the `__init__` Method

The `__init__` method initializes class instances. Here, we'll define a `Book` class with attributes for the title and number of pages.

```python
class Book:
    def __init__(self, title: str, pages: int) -> None:
        self.title = title
        self.pages = pages
```

## Step 2: Implementing the `__len__` Method

The `__len__` method allows the use of the `len()` function on instances of the class. In our `Book` class, it will return the number of pages.

```python
    def __len__(self) -> int:
        return self.pages
```

## Step 3: Testing the `__len__` Method

We can test our `__len__` method by creating instances of the `Book` class and using the `len()` function.

```python
if __name__ == "__main__":
    pi_daily = Book("Pi Daily", 100)
    harry_potter = Book("Harry Potter", 340)

    print(len(pi_daily))  # Output: 100
    print(len(harry_potter))  # Output: 340
```

## Step 4: Implementing the `__add__` Method

The `__add__` method allows us to use the `+` operator to add instances of the class. In our `Book` class, it will combine the titles and sum the pages of two books.

```python
    def __add__(self, other: 'Book') -> 'Book':
        combined_title = f"{self.title} and {other.title}"
        combined_pages = self.pages + other.pages
        return Book(combined_title, combined_pages)
```

## Step 5: Testing the `__add__` Method

We can test our `__add__` method by creating instances of the `Book` class and using the `+` operator.

```python
if __name__ == "__main__":
    combined_books = pi_daily + harry_potter
    print(combined_books.title)  # Output: Pi Daily and Harry Potter
    print(combined_books.pages)  # Output: 440
```

## Full Implementation

Below is the full implementation of our `Book` class with the `__init__`, `__len__`, and `__add__` methods:

```python
class Book:
    def __init__(self, title: str, pages: int) -> None:
        self.title = title
        self.pages = pages

    def __len__(self) -> int:
        return self.pages

    def __add__(self, other: 'Book') -> 'Book':
        combined_title = f"{self.title} and {other.title}"
        combined_pages = self.pages + other.pages
        return Book(combined_title, combined_pages)

if __name__ == "__main__":
    pi_daily = Book("Pi Daily", 100)
    harry_potter = Book("Harry Potter", 340)

    print(len(pi_daily))  # Output: 100
    print(len(harry_potter))  # Output: 340

    combined_books = pi_daily + harry_potter
    print(combined_books.title)  # Output: Pi Daily and Harry Potter
    print(combined_books.pages)  # Output: 440
```

## Conclusion

Dunder methods are powerful tools in Python that allow developers to customize and extend the behavior of classes. By implementing methods such as `__init__`, `__len__`, and `__add__`, we can create more intuitive and functional objects. Understanding and utilizing these methods effectively can greatly enhance the design and usability of your classes.