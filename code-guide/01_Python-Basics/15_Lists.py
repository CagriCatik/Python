# Creating a list of dictionaries to store student information
students = [
    {"name": "Alice", "age": 20, "grades": [85, 90, 92]},
    {"name": "Bob", "age": 22, "grades": [78, 80, 88]},
    {"name": "Charlie", "age": 21, "grades": [95, 91, 89]}
]

# Calculating the average grade for each student
for student in students:
    average_grade = sum(student["grades"]) / len(student["grades"])
    student["average_grade"] = average_grade

# Filtering students with an average grade above 85
high_achievers = [student["name"] for student in students if student["average_grade"] > 85]

print("Students with an average grade above 85:", high_achievers)


# Creating a list of dictionaries to represent inventory items
inventory = [
    {"product": "Laptop", "quantity": 10, "price": 1200.00},
    {"product": "Smartphone", "quantity": 30, "price": 800.00},
    {"product": "Headphones", "quantity": 15, "price": 150.00}
]

# Updating the inventory after a sale
sale_item = {"product": "Laptop", "quantity_sold": 3}
for item in inventory:
    if item["product"] == sale_item["product"]:
        item["quantity"] -= sale_item["quantity_sold"]

# Calculating the total value of the inventory
total_value = sum(item["quantity"] * item["price"] for item in inventory)

print("Updated Inventory:", inventory)
print("Total Value of Inventory:", total_value)


# Creating a to-do list using a list of dictionaries
todo_list = [
    {"task": "Complete project proposal", "priority": "High", "completed": False},
    {"task": "Prepare for meeting", "priority": "Medium", "completed": True},
    {"task": "Exercise for 30 minutes", "priority": "Low", "completed": False}
]

# Filtering incomplete high-priority tasks
high_priority_tasks = [task["task"] for task in todo_list if not task["completed"] and task["priority"] == "High"]

# Marking a task as completed
task_to_complete = "Complete project proposal"
for task in todo_list:
    if task["task"] == task_to_complete:
        task["completed"] = True

print("Incomplete High-Priority Tasks:", high_priority_tasks)
print("Updated To-Do List:", todo_list)
