# 1. append()
# Scenario: Task management application where users can add tasks to their to-do list.
tasks = [
    {"task": "Write report", "deadline": "2024-08-31", "priority": "High"},
    {"task": "Prepare presentation", "deadline": "2024-09-05", "priority": "Medium"},
]
new_task = {"task": "Book flights", "deadline": "2024-09-10", "priority": "Low"}
tasks.append(new_task)
print("After append:", tasks)

# 2. extend()
# Scenario: Data processing pipeline combining results from multiple sources.
results_source_1 = [23, 45, 67]
results_source_2 = [78, 89, 90]
all_results = []
all_results.extend(results_source_1)
all_results.extend(results_source_2)
print("After extend:", all_results)

# 3. insert()
# Scenario: Music playlist application where users can reorder songs.
playlist = ["Song A", "Song B", "Song D"]
playlist.insert(2, "Song C")
print("After insert:", playlist)

# 4. remove()
# Scenario: E-commerce application where users remove items from their shopping cart.
shopping_cart = ["Apple", "Banana", "Cherry", "Banana"]
shopping_cart.remove("Banana")
print("After remove:", shopping_cart)

# 5. pop()
# Scenario: Stack data structure for undo functionality.
undo_stack = ["Action1", "Action2", "Action3"]
last_action = undo_stack.pop()
print("After pop:", undo_stack)
print("Popped action:", last_action)

# 6. reverse()
# Scenario: Photo gallery application where users view images in reverse chronological order.
photo_gallery = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
photo_gallery.reverse()
print("After reverse:", photo_gallery)

# 7. sort()
# Scenario: Contact management application where users sort contacts alphabetically.
contacts = ["Charlie", "Alice", "Bob"]
contacts.sort()
print("After sort:", contacts)

# 8. copy()
# Scenario: Creating a template from an existing list of tasks without affecting the original list.
original_tasks = ["Task 1", "Task 2", "Task 3"]
tasks_template = original_tasks.copy()
tasks_template.append("Task 4")
print("Original tasks after copy and modification:", original_tasks)
print("Template tasks after modification:", tasks_template)

# 9. index()
# Scenario: Text processing application to find the position of a specific keyword.
words = ["python", "is", "a", "powerful", "language"]
position = words.index("powerful")
print("Index of 'powerful':", position)

# 10. count()
# Scenario: Survey analysis tool counting how many times a response was selected.
responses = ["Yes", "No", "Yes", "Yes", "No", "Yes"]
yes_count = responses.count("Yes")
print("Count of 'Yes':", yes_count)
