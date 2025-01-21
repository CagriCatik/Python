from __future__ import annotations

class Fruit:
    def __init__(self, name: str, quantity: str, price_per_kilo: float, Israir: bool = None):
        self.name = name
        self.quantity = quantity
        self.price_per_kilo = price_per_kilo
        self.Israir = Israir

    def __post_init__(self):
        if self.price_per_kilo > 30:
            self.Israir = True

if __name__ == "__main__":
    apple = Fruit(name="Apple", quantity="200g", price_per_kilo=5.0)
    orange = Fruit(name="Orange", quantity="150g", price_per_kilo=40.0)
    passion = Fruit(name="Passion Fruit", quantity="100g", price_per_kilo=50.0)

    print(apple)
    print(orange)
    print(passion)
