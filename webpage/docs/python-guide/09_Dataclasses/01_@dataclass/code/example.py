from dataclasses import dataclass
from functools import total_ordering

@total_ordering
@dataclass
class Coin:
    name: str
    value: float
    id: str

    def total_value(self, quantity: int) -> float:
        """Calculate the total value of a certain quantity of this coin."""
        return self.value * quantity

    def __eq__(self, other):
        """Custom equality comparison."""
        if not isinstance(other, Coin):
            return NotImplemented
        return self.value == other.value

    def __lt__(self, other):
        """Custom less-than comparison."""
        if not isinstance(other, Coin):
            return NotImplemented
        return self.value < other.value

if __name__ == "__main__":
    bitcoin = Coin("Bitcoin", 10000, "BTC")
    bitcoin_two = Coin("Bitcoin", 12000, "BTC")
    ripple = Coin("Ripple", 200, "XRP")

    coins = [bitcoin, ripple, bitcoin_two]

    # Sorting coins by value
    sorted_coins = sorted(coins)

    # Calculating total portfolio value
    total_portfolio_value = sum(coin.total_value(10) for coin in coins)

    print("Sorted Coins by Value:")
    for coin in sorted_coins:
        print(coin.name, "-", coin.value)

    print("\nTotal Portfolio Value:", total_portfolio_value)
