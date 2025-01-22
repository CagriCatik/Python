# Python Note Taking App

This tutorial will guide you through creating a simple note-taking app in Python using data classes and regular classes. The app will allow you to add, edit, and delete notes. We will also use the `Uuid` library to generate unique identifiers for each note.

## Getting Started

### Step 1: Import Dependencies

Open your Python file and start by importing the necessary modules.

```python
from dataclasses import dataclass, field
from uuid import UUID, uuid4
```

### Step 2: Create the Note Data Class

Define the `Note` data class with a unique identifier (`id`), title, and body.

```python
@dataclass
class Note:
    id: UUID = field(init=False, default_factory=uuid4)
    title: str
    body: str

    def __post_init__(self):
        self.id = uuid4()
```

### Step 3: Display Sample Note

Create a sample note and print it to demonstrate the use of UUID.

```python
if __name__ == "__main__":
    sample_note = Note(title="Hello", body="My name is Bob")
    print(sample_note)
```

Run your program to see the generated UUID for the sample note.

### Step 4: Create the Note App Class

Define the `NoteApp` class, which will handle the note-taking application.

```python
class NoteApp:
    def __init__(self, author: str, notes: list = None):
        self.author = author
        self._notes = notes or []
        self.display_instructions()

    @staticmethod
    def display_instructions():
        print("Welcome to the Notes App!")
        print("Here are the commands:")
        print("1. Add a new note")
        print("2. Edit a note")
        print("3. Delete a note")
        print("4. Display all notes")

    # Add other methods here
```

### Step 5: Implement Add Note Functionality

Add the `_add_note` method to allow users to add new notes.

```python
def _add_note(self, title: str, body: str):
    new_note = Note(title=title, body=body)
    self._notes.append(new_note)
    print("Note was added successfully.")
```

### Step 6: Implement Edit Note Functionality

Add the `_edit_note` method to allow users to edit existing notes.

```python
def _edit_note(self, note_index: int, new_title: str, new_body: str):
    try:
        current_note = self._notes[note_index - 1]
        current_note.title = new_title
        current_note.body = new_body
        print("Note was updated successfully.")
    except (IndexError, ValueError):
        print("Please select a valid note index.")
        self._edit_note(note_index, new_title, new_body)
```

### Step 7: Implement Delete Note Functionality

Add the `_delete_note` method to allow users to delete existing notes.

```python
def _delete_note(self, note_index: int):
    try:
        deleted_note = self._notes.pop(note_index - 1)
        print(f"Note '{deleted_note.title}' was deleted successfully.")
    except (IndexError, ValueError):
        print("Please select a valid note index.")
        self._delete_note(note_index)
```

### Step 8: Complete the App

Add other necessary methods to complete the app, such as displaying all notes and handling user input.

```python
# Add methods for displaying notes and user input handling

if __name__ == "__main__":
    # Example usage
    my_note_app = NoteApp(author="John Doe")
```

Feel free to expand on this foundation and customize the app based on your requirements. Now you have a simple note-taking app in Python using data classes and regular classes.

## Changes and Additions

### Step 1: Update `NoteApp` Class

Extend the `NoteApp` class to include the new functionality.

```python
class NoteApp:
    # ... (previous methods)

    def display_notes_details(self):
        total_notes = len(self._notes)
        total_characters = sum(len(note.body) for note in self._notes)
        print(f"\nTotal Notes: {total_notes}")
        print(f"Total Characters: {total_characters}")
        print(f"Author: {self.author}")

    def run_app(self):
        while True:
            user_input = input("\nSelect an option (1-4): ")
            self.select_option(user_input)

    def select_option(self, option: str):
        if option not in {'1', '2', '3', '4'}:
            print("Please pick a valid option.")
            return

        if option == '1':
            title = input("Enter the title for the new note: ")
            body = input("Enter the body for the new note: ")
            self._add_note(title, body)
        elif option == '2':
            self._edit_note()
        elif option == '3':
            self._delete_note()
        elif option == '4':
            self.display_notes()
        elif option == '5':
            self.display_instructions()
        elif option == '6':
            self.display_notes_details()
```

### Step 2: Add Validation for Empty Notes

Add a check in the `_add_note` method to ensure the user doesn't add empty notes.

```python
def _add_note(self, title: str, body: str):
    if not title.strip() or not body.strip():
        print("Title and body cannot be empty. Note not added.")
        return
    new_note = Note(title=title, body=body)
    self._notes.append(new_note)
    print("Note was added successfully.")
```

### Step 3: Update the `run_app` Method

Modify the `run_app` method to handle the new options.

```python
def run_app(self):
    while True:
        user_input = input("\nSelect an option (1-6): ")
        self.select_option(user_input)
```

### Step 4: Test the App

Update the main section to reflect the changes and test the app.

```python
if __name__ == "__main__":
    sample_notes = [
        Note(title="Title 1", body="Hello there, Bob"),
        Note(title="Title 2", body="More text"),
    ]

    my_note_app = NoteApp(author="John Doe", notes=sample_notes)
    my_note_app.run_app()
```

## Homework Challenges

1. **Prevent Empty Notes:** Modify the app to prevent users from adding notes with empty titles or bodies.
2. **Display Commands Option:** Add a fifth option that allows users to display the commands once again.
3. **Additional Information Option:** Add a sixth option that provides details about the notes, including the total number of characters, total notes, and author information.

Feel free to experiment and enhance the app further based on your preferences and learning goals.
