from typing import List, Tuple, TypeVar

T = TypeVar('T', int, float, str)

def process_items(items: List[T]) -> Tuple[T, T]:
    # Mypy will ensure that the items are of the same type
    return items[0], items[-1]

# Incorrect usage
mixed_items: List[T] = [1, 2.5, 'three']  # Mypy will catch the mixed types

# Running Mypy
# $ mypy your_script.py
# Mypy will warn about incompatible types in the list of mixed_items.
