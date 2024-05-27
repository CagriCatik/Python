from typing import Generator

def is_prime(num: int) -> bool:
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def prime_numbers() -> Generator[int, None, None]:
    num = 2
    while True:
        if is_prime(num):
            yield num
        num += 1

# Use the generator to get the first 10 prime numbers
prime_gen = prime_numbers()
for _ in range(10):
    print(next(prime_gen))
