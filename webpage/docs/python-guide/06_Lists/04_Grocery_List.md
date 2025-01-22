# Grocery List App

This Python project implements a simple grocery list application where users can add, remove, list, and exit items from their grocery list.

## How to Use

1. Run the Python script.
2. Follow the on-screen instructions to perform various actions:
   - Enter `1` to add an item.
   - Enter `2` to remove an item.
   - Enter `3` to list all items.
   - Enter `0` to exit the program.

## Functionalities

### Welcome Message

Upon starting the program, users are greeted with a welcome message and instructions on how to use the application.

### Add Item

Users can add items to their grocery list by entering the item name when prompted.

### Remove Item

Users can remove items from their grocery list by entering the name of the item they wish to remove when prompted.

### List Items

Users can view all the items currently on their grocery list.

### Valid Option Check

The program checks whether the user input is a valid option and prompts the user to enter a valid option if necessary.

### Exit Program

Users can exit the program at any time by entering `0`.

## Bugs and Enhancements

- Currently, if the user tries to add an item without entering anything, it will add an empty string as an item. This behavior needs to be fixed.
- Optionally, users can enhance the program by adding a fourth option that allows them to modify an existing list item.

## Additional Notes

- The program handles cases where users try to remove an item that does not exist in the grocery list.
- Enumerate is used to display items in the list starting from 1 instead of 0 for better user understanding.
- This project serves as a simple exercise to practice Python programming skills.
