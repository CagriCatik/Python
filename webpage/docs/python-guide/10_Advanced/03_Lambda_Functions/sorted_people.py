people = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 22},
    {"name": "David", "age": 30},
]

sorted_people = sorted(people, key=lambda x: (x["age"], x["name"]), reverse=False)
print(sorted_people)