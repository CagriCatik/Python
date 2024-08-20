# example_usage.py
import sys
import os

# Add the parent directory to the system path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from gadget_store import Customer, Inventory, Transaction, best_sellers
from gadget_store import Customer, Inventory, Transaction, best_sellers

# Create a new customer
customer = Customer(customer_id=1, name="John Doe", email="john@example.com")

# Create an inventory and add some items
inventory = Inventory()
inventory.add_item(item_id=101, item_name="Gadget A", quantity=10)
inventory.add_item(item_id=102, item_name="Gadget B", quantity=5)

# Create a transaction
transaction = Transaction(transaction_id=201, customer=customer, item="Gadget A", quantity=2)

# Log transaction summary
print(transaction.get_summary())

# List all items in inventory
print(inventory.list_items())

# Display best sellers
print("Best Sellers:", best_sellers)
