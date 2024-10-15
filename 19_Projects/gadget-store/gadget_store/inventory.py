# gadget_store/inventory.py

class Inventory:
    def __init__(self):
        self.items = {}

    def add_item(self, item_id, item_name, quantity):
        self.items[item_id] = {'name': item_name, 'quantity': quantity}

    def get_item(self, item_id):
        return self.items.get(item_id, 'Item not found')

    def list_items(self):
        return self.items
