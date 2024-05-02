from dataclasses import dataclass, field
from typing import List

@dataclass
class Employee:
    name: str
    age: int
    position: str
    salary: float
    projects: List[str] = field(default_factory=list)

# Creating instances
employee1 = Employee(name="John Doe", age=30, position="Software Engineer", salary=80000)
employee2 = Employee(name="Jane Smith", age=28, position="Data Scientist", salary=90000, projects=["Project A", "Project B"])

# Displaying employee information
print(employee1)
print(employee2)
