students = [
    {'name': 'Alice', 'gpa': 3.8},
    {'name': 'Bob', 'gpa': 2.9},
    {'name': 'Charlie', 'gpa': 3.5},
    {'name': 'Diana', 'gpa': 4.0}
]

threshold_gpa = 3.5
top_students = [student for student in students if student['gpa'] >= threshold_gpa]
print(top_students)
# Output: [{'name': 'Alice', 'gpa': 3.8}, {'name': 'Charlie', 'gpa': 3.5}, {'name': 'Diana', 'gpa': 4.0}]
