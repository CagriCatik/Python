import os
import yaml

# Get the directory of the current script
script_dir = os.path.dirname(os.path.realpath(__file__))

# Construct the absolute path to example.yaml
yaml_path = os.path.join(script_dir, 'example.yaml')

def main():
    with open(yaml_path) as file:
        data = yaml.safe_load(file)
    
    if 'employees' in data:
        employees = data['employees']
        for employee in employees:
            print(f"Name: {employee['name']}")
            print(f"Age: {employee['age']}")
            print(f"Position: {employee['position']}")
            print()

if __name__ == "__main__":
    main()
