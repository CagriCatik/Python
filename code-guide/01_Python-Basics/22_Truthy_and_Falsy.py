class CustomObject:
    def __init__(self, value):
        self.value = value

    def __bool__(self):
        return self.value % 2 == 0

# CustomObject with an even value is considered truthy
truthy_object = CustomObject(4)
print(bool(truthy_object))  # Evaluates to True

# CustomObject with an odd value is considered falsy
falsy_object = CustomObject(3)
print(bool(falsy_object))   # Evaluates to False


########################################################

import os

def check_file_existence(file_path):
    """
    Check if a file exists and is not empty.
    """
    if os.path.isfile(file_path) and os.path.getsize(file_path):
        return True
    else:
        return False

file_path_existing = 'example.txt'
file_path_nonexistent = 'nonexistent.txt'

print(check_file_existence(file_path_existing))       # Evaluates to True
print(check_file_existence(file_path_nonexistent))    # Evaluates to False



########################################################


class Database:
    def __init__(self):
        self.data = {'user1': {'name': 'Alice', 'age': 28},
                     'user2': {'name': 'Bob', 'age': 32}}

    def query_user(self, user_id):
        """
        Query user data from the database.
        """
        return self.data.get(user_id, None)

# Database instance
db = Database()

# Querying existing and non-existing users
existing_user_data = db.query_user('user1')
non_existing_user_data = db.query_user('user3')

# Check if the query result is truthy before processing
if existing_user_data:
    print(f"User found: {existing_user_data['name']}, Age: {existing_user_data['age']}")
else:
    print("User not found")

if non_existing_user_data:
    print(f"User found: {non_existing_user_data['name']}, Age: {non_existing_user_data['age']}")
else:
    print("User not found")
