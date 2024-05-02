class BankAccount:
    def __init__(self, account_holder, balance=0):
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
        else:
            print("Insufficient funds!")

# Example usage
account1 = BankAccount("Alice")
account1.deposit(1000)
account1.withdraw(500)


class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

# Example usage
rectangle = Rectangle(5, 10)
circle = Circle(7)

print(f"Rectangle Area: {rectangle.area()}")  # Output: Rectangle Area: 50
print(f"Circle Area: {circle.area()}")        # Output: Circle Area: 153.86


class UserProfile:
    def __init__(self, username, email):
        self.username = username
        self.email = email
        self.posts = []

    def create_post(self, content):
        post = {"content": content, "likes": 0}
        self.posts.append(post)
        print(f"Post created by {self.username}: {content}")

    def like_post(self, post_index):
        if 0 <= post_index < len(self.posts):
            self.posts[post_index]["likes"] += 1
            print(f"{self.username} liked the post.")
        else:
            print("Invalid post index.")

# Example usage
user1 = UserProfile("JohnDoe", "john.doe@email.com")
user1.create_post("Hello, world!")
user1.create_post("Python is amazing!")

user2 = UserProfile("AliceSmith", "alice.smith@email.com")
user2.create_post("Enjoying the weekend!")

user1.like_post(0)
user2.like_post(1)
