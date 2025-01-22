from typing import Generator

def fibonacci_sequence() -> Generator[int, None, None]:
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Use the generator to get the first 10 Fibonacci numbers
fibonacci_gen = fibonacci_sequence()
for _ in range(10):
    print(next(fibonacci_gen))
