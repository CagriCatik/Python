# main.py

import network_manager

# Initialize the network manager
network_manager.initialize_network_manager()

# Use the connection functions
network_manager.connect_with_wifi()
network_manager.connect_with_mobile_data()
network_manager.connect_with_ethernet()

# Using star import
from network_manager import *
connect_with_wifi()
connect_with_mobile_data()
connect_with_ethernet()
