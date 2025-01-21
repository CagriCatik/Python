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
        self._convert_quantity_to_grams()

    def _convert_quantity_to_grams(self):
        if "kg" in self.quantity:
            self.quantity = str(float(self.quantity.replace("kg", "")) * 1000) + "g"

if __name__ == "__main__":
    apple = Fruit(name="Apple", quantity="2kg", price_per_kilo=5.0)
    orange = Fruit(name="Orange", quantity="150g", price_per_kilo=4.0, Israir=False)
    passion = Fruit(name="Passion Fruit", quantity="0.5kg", price_per_kilo=50.0, Israir=True)

    print(apple)
    print(orange)
    print(passion)
