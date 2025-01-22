# network_manager/__init__.py

from .wifi import connect_with_wifi
from .mobile import connect_with_mobile_data
from .ethernet import connect_with_ethernet

__all__ = ["connect_with_wifi", "connect_with_mobile_data", "connect_with_ethernet"]

def initialize_network_manager():
    print("Network Manager Initialized")
