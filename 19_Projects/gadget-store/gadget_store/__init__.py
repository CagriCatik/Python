# gadget_store/__init__.py

import logging
from .customers import Customer
from .inventory import Inventory
from .transactions import Transaction

__version__ = '1.0.0'
__author__ = 'Jane Doe'
__license__ = 'MIT'

# Configure logging
logging.basicConfig(filename='gadget_store.log', level=logging.INFO)
logging.info('Gadget Store package initialized.')

# Pre-fetch best sellers (simulated example)
def fetch_best_sellers():
    # This would be a call to an API in a real-world scenario
    return ["Gadget A", "Gadget B", "Gadget C"]

best_sellers = fetch_best_sellers()

__all__ = ['Customer', 'Inventory', 'Transaction', 'best_sellers']

# Example constants and configurations
DATABASE_URI = 'sqlite:///gadget_store.db'
API_KEY = 'your_api_key_here'
