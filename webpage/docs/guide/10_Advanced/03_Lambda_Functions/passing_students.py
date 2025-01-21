students = [
    {"name": "Alice", "math_score": 90, "lit_score": 85},
    {"name": "Bob", "math_score": 75, "lit_score": 95},
    {"name": "Charlie", "math_score": 80, "lit_score": 88},
]

passing_students = list(filter(lambda x: x["math_score"] > 80 and x["lit_score"] > 80, students))

print(passing_students)
# Output: [{'name': 'Alice', 'math_score': 90, 'lit_score': 85}]
