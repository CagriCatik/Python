class InvalidOperationError(Exception):
    def __init__(self, message):
        super().__init__(message)

def perform_transaction(amount):
    if amount <= 0:
        raise InvalidOperationError("Invalid transaction amount.")
    # Perform transaction logic here

try:
    perform_transaction(-500)  # Raises InvalidOperationError
except InvalidOperationError as ioe:
    print("Error:", ioe)
