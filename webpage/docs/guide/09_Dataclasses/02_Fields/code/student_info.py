from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    age: int
    grades: dict = field(default_factory=dict)

    def add_grade(self, subject: str, grade: float):
        self.grades[subject] = grade

    def calculate_average_grade(self):
        if not self.grades:
            return 0.0
        return sum(self.grades.values()) / len(self.grades)

# Creating instances
student1 = Student(name="Alice", age=20)
student2 = Student(name="Bob", age=22, grades={"Math": 85, "History": 90, "English": 88})

# Adding grades and calculating average
student1.add_grade("Physics", 78)
student2.add_grade("Science", 92)

# Displaying student information
print(student1)
print(student2)
print("Average Grade for Bob:", student2.calculate_average_grade())
