from typing import Dict

def process_config(config: Dict[str, Dict[str, int]]) -> None:
    for section, values in config.items():
        for key, value in values.items():
            # Mypy will catch if the value is not an integer
            print(f"Section: {section}, Key: {key}, Value: {value}")

# Incorrect usage
config_data = {
    'section1': {'key1': 42, 'key2': 'invalid'},  # Mypy will catch the string in 'key2'
    'section2': {'key3': 99, 'key4': 3.14},        # Mypy will catch the float in 'key4'
}

# Running Mypy
# $ mypy your_script.py
# This will provide warnings about incorrect types in the configuration data.
