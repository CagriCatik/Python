import sys

class GroceryList:
    def __init__(self):
        self.groceries = []

    def add_item(self, item):
        """Adds an item to the grocery list."""
        self.groceries.append(item)
        print(f"'{item}' has been added to the list.")

    def remove_item(self, item):
        """Removes an item from the grocery list."""
        if item in self.groceries:
            self.groceries.remove(item)
            print(f"'{item}' has been removed from the list.")
        else:
            print(f"'{item}' not found in the list.")

    def display(self):
        """Displays all items in the grocery list."""
        if not self.groceries:
            print("The grocery list is empty.")
        else:
            print("\n--- Grocery List ---")
            for i, item in enumerate(self.groceries, start=1):
                print(f"{i}. {item.capitalize()}")
            print("--------------------")

def welcome_message():
    """Displays the welcome message and instructions."""
    print("Welcome to Groceries!")
    print("Instructions:")
    print("1. Add an item")
    print("2. Remove an item")
    print("3. List all items")
    print("0. Exit")

def is_valid_option(user_input):
    """Checks if the user input is a valid option."""
    return user_input in ['0', '1', '2', '3']

def main():
    grocery_list = GroceryList()
    welcome_message()

    while True:
        user_input = input("\nEnter your choice: ").strip()

        if not user_input.isdigit() or not is_valid_option(user_input):
            print("Please enter a valid option (0, 1, 2, 3).")
            continue

        choice = int(user_input)
        if choice == 1:
            new_item = input("What item would you like to add? ").strip().capitalize()
            if new_item:
                grocery_list.add_item(new_item)
            else:
                print("Item name cannot be empty.")
        elif choice == 2:
            item_to_remove = input("What item would you like to remove? ").strip().capitalize()
            grocery_list.remove_item(item_to_remove)
        elif choice == 3:
            grocery_list.display()
        elif choice == 0:
            print("Exiting the program...")
            sys.exit()

if __name__ == "__main__":
    main()
