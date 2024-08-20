# gadget_store/transactions.py

class Transaction:
    def __init__(self, transaction_id, customer, item, quantity):
        self.transaction_id = transaction_id
        self.customer = customer
        self.item = item
        self.quantity = quantity

    def get_summary(self):
        return {
            'transaction_id': self.transaction_id,
            'customer': self.customer.get_details(),
            'item': self.item,
            'quantity': self.quantity
        }
