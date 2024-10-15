import os
import toml

# Get the directory of the current script
script_dir = os.path.dirname(os.path.realpath(__file__))

# Construct the absolute path to config.toml
config_path = os.path.join(script_dir, 'config.toml')

# Load data from TOML file
with open(config_path) as file:
    toml_data = file.read()

# Parse TOML data
parsed_data = toml.loads(toml_data)

# Accessing data
print("Server IP:", parsed_data["servers"]["alpha"]["ip"])
print("Database server:", parsed_data["database"]["server"])
print("Ports:", parsed_data["database"]["ports"])
print("Is enabled:", parsed_data["database"]["enabled"])
