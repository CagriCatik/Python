# Post Initializers

We'll create a simple example of a `Fruit` class with attributes such as name, grams, price per kilo, and total price. The post initializer will be used to calculate the total price based on the grams and price per kilo after the original initializer is called.

## Step 1: Import Data Classes

```python
from dataclasses import dataclass, field, post_init
```

Import the necessary modules for data classes, fields, and post initialization.

## Step 2: Create the Fruit Data Class

```python
@dataclass
class Fruit:
    name: str
    grams: float
    price_per_kilo: float
    total_price: float = field(init=False)

    @post_init
    def calculate_total_price(self) -> None:
        self.total_price = self.grams / 1000 * self.price_per_kilo

    def describe(self) -> None:
        print(f"{self.grams}g of {self.name} costs ${self.total_price:.2f}")
```

Define the `Fruit` class with attributes and the post initializer to calculate the total price. Also, include a `describe` method to print a quick description of the fruit.

## Step 3: Test the Post Initializer

```python
if __name__ == "__main__":
    apple = Fruit(name="Apple", grams=1500, price_per_kilo=5)
    orange = Fruit(name="Orange", grams=2500, price_per_kilo=7)

    print("Fruit Objects:")
    print(apple)
    print(orange)

    print("\nFruit Descriptions:")
    apple.describe()
    orange.describe()
```

In the main block, create instances of `Fruit` (apple and orange) and print both the objects and their descriptions using the `describe` method.

## Step 4: Run the Code

Execute the script to observe the output, which should include the fruit objects and their respective descriptions with the total price calculated using the post initializer.

**Note:** The tutorial also mentions a limitation of using post initializers for the total price and suggests an alternative approach using computed properties, which will be covered in a future lecture.
