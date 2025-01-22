from __future__ import annotations

class Fruit:
    def __init__(self, name: str, quantity: str, price_per_kilo: float, Israir: bool = None):
        self.name = name
        self.quantity = quantity
        self.price_per_kilo = price_per_kilo
        self.Israir = Israir

    def __post_init__(self):
        if self.Israir:
            self.price_per_kilo *= 2
        if "premium" in self.name.lower():
            self.price_per_kilo *= 1.5

if __name__ == "__main__":
    apple = Fruit(name="Apple", quantity="200g", price_per_kilo=5.0)
    orange = Fruit(name="Premium Orange", quantity="150g", price_per_kilo=4.0, Israir=False)
    passion = Fruit(name="Passion Fruit", quantity="100g", price_per_kilo=50.0, Israir=True)

    print(apple)
    print(orange)
    print(passion)
