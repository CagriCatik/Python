from typing import Generator

def filter_names(names: list, condition: callable) -> Generator[str, None, None]:
    for name in names:
        if condition(name):
            yield name

# List of names
all_names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"]

# Use the generator to get names starting with 'A'
starts_with_a_gen = filter_names(all_names, lambda x: x.startswith('A'))

# Print filtered names
print(list(starts_with_a_gen))
