import json
import logging
from dataclasses import dataclass, field
from uuid import UUID, uuid4
import os

logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class Note:
    id: UUID = field(init=False, default_factory=uuid4)
    title: str
    body: str

    def __post_init__(self):
        self.id = uuid4()

class NoteApp:
    def __init__(self, author: str, notes: list = None):
        self.author = author
        self._notes = notes or []
        self.file_path = os.path.join("09_Dataclasses", "06_Notes_App", "notes.json")
        self.load_notes_from_file()
        self.display_instructions()

    @staticmethod
    def display_instructions():
        logger.info("Welcome to the Notes App!")
        logger.info("Here are the commands:")
        logger.info("1. Add a new note")
        logger.info("2. Edit a note")
        logger.info("3. Delete a note")
        logger.info("4. Display all notes")
        logger.info("5. Display commands")
        logger.info("6. Display notes details")

    def load_notes_from_file(self):
        try:
            with open(self.file_path, "r") as file:
                data = json.load(file)
                self._notes = [Note(**note_data) for note_data in data]
        except (FileNotFoundError, json.JSONDecodeError):
            logger.warning("Error loading notes from file.")

    def save_notes_to_file(self):
        with open(self.file_path, "w") as file:
            data = [{"title": note.title, "body": note.body} for note in self._notes]
            json.dump(data, file)

    def add_note(self, title: str, body: str):
        if not title.strip() or not body.strip():
            logger.warning("Title and body cannot be empty. Note not added.")
            return
        new_note = Note(title=title, body=body)
        self._notes.append(new_note)
        logger.info("Note was added successfully.")
        self.save_notes_to_file()

    def edit_or_delete_note(self, edit_mode: bool):
        self.display_notes()
        note_index = int(input("Enter the index of the note to {} : ".format("edit" if edit_mode else "delete")))
        if 1 <= note_index <= len(self._notes):
            if edit_mode:
                self.edit_note(note_index)
            else:
                self.delete_note(note_index)
        else:
            logger.warning("Please select a valid note index.")

    def edit_note(self, note_index: int):
        new_title = input("Enter the new title: ")
        new_body = input("Enter the new body: ")
        try:
            current_note = self._notes[note_index - 1]
            current_note.title = new_title
            current_note.body = new_body
            logger.info("Note was updated successfully.")
            self.save_notes_to_file()
        except IndexError:
            logger.warning("Please select a valid note index.")

    def delete_note(self, note_index: int):
        try:
            deleted_note = self._notes.pop(note_index - 1)
            logger.info(f"Note '{deleted_note.title}' was deleted successfully.")
            self.save_notes_to_file()
        except IndexError:
            logger.warning("Please select a valid note index.")

    def display_notes(self):
        for i, note in enumerate(self._notes, 1):
            logger.info(f"{i}. {note.title}: {note.body}")

    def display_notes_details(self):
        total_notes = len(self._notes)
        total_characters = sum(len(note.body) for note in self._notes)
        logger.info(f"\nTotal Notes: {total_notes}")
        logger.info(f"Total Characters: {total_characters}")
        logger.info(f"Author: {self.author}")

    def run_app(self):
        while True:
            user_input = input("\nSelect an option (1-6): ")
            self.select_option(user_input)

    def select_option(self, option: str):
        if option not in {'1', '2', '3', '4', '5', '6'}:
            logger.warning("Please pick a valid option.")
            return

        if option == '1':
            title = input("Enter the title for the new note: ")
            body = input("Enter the body for the new note: ")
            self.add_note(title, body)
        elif option == '2':
            self.edit_or_delete_note(edit_mode=True)
        elif option == '3':
            self.edit_or_delete_note(edit_mode=False)
        elif option == '4':
            self.display_notes()
        elif option == '5':
            self.display_instructions()
        elif option == '6':
            self.display_notes_details()

if __name__ == "__main__":
    sample_notes = [
        # Add sample notes if needed
    ]

    my_note_app = NoteApp(author="MoKoKo", notes=sample_notes)
    my_note_app.run_app()
