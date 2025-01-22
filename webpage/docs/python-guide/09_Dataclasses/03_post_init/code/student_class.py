from dataclasses import dataclass, field
from dataclasses import post_init


@dataclass
class Student:
    name: str
    age: int
    major: str
    grades: dict
    average_grade: float = field(init=False)

    @post_init
    def calculate_average_grade(self) -> None:
        self.average_grade = sum(self.grades.values()) / len(self.grades)

    def display_student_info(self) -> None:
        print(f"Student: {self.name}\nAge: {self.age}\nMajor: {self.major}\n"
              f"Grades: {self.grades}\nAverage Grade: {self.average_grade:.2f}\n")


if __name__ == "__main__":
    student1 = Student(name="Alice", age=20, major="Computer Science", grades={"Math": 95, "English": 88, "History": 92})
    student2 = Student(name="Bob", age=22, major="Physics", grades={"Physics": 96, "Chemistry": 89, "Biology": 94})

    print("Student Information:")
    student1.display_student_info()
    student2.display_student_info()
