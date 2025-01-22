from dataclasses import dataclass
from typing import List

@dataclass
class Employee:
    name: str
    position: str
    salary: float

@dataclass
class Department:
    name: str
    employees: List[Employee]

@dataclass
class Company:
    name: str
    departments: List[Department]

# Creating instances
employee1 = Employee("Alice", "Software Engineer", 90000.0)
employee2 = Employee("Bob", "Data Scientist", 95000.0)
engineering = Department("Engineering", [employee1, employee2])
hr = Department("Human Resources", [Employee("Charlie", "HR Manager", 85000.0)])
my_company = Company("TechCorp", [engineering, hr])

# Accessing and printing information
print(f"{my_company.name} Company Structure:")
for department in my_company.departments:
    print(f"\nDepartment: {department.name}")
    for employee in department.employees:
        print(f"{employee.name} - {employee.position} - Salary: ${employee.salary:.2f}")
