from dataclasses import dataclass, field
from dataclasses import post_init


@dataclass
class Book:
    title: str
    author: str
    pages: int
    price: float
    discount: float = 0.1
    discounted_price: float = field(init=False)

    @post_init
    def calculate_discounted_price(self) -> None:
        self.discounted_price = self.price * (1 - self.discount)

    def display_info(self) -> None:
        print(f"Title: {self.title}\nAuthor: {self.author}\nPages: {self.pages}\n"
              f"Price: ${self.price:.2f}\nDiscounted Price: ${self.discounted_price:.2f}\n")


if __name__ == "__main__":
    book1 = Book(title="The Great Gatsby", author="F. Scott Fitzgerald", pages=180, price=25.99)
    book2 = Book(title="To Kill a Mockingbird", author="Harper Lee", pages=281, price=29.99, discount=0.15)

    print("Book Information:")
    book1.display_info()
    book2.display_info()
