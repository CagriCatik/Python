# YAML

YAML (YAML Ain't Markup Language) is a human-readable data serialization format. It is widely used for configuration files, data exchange between applications, and as a language-independent alternative to XML or JSON. YAML's simple and readable syntax makes it popular among developers.

## YAML Syntax

YAML uses indentation and whitespace to define its structure. It supports various data types such as mappings (key-value pairs), sequences (arrays/lists), strings, integers, floats, booleans, and null values.

### Example YAML Syntax

```yaml
key1: value1
key2: value2
nested_key:
  - item1
  - item2
```

## Installing PyYAML

PyYAML is a Python library for working with YAML files. To install it, use Python’s package manager, pip:

```bash
pip install pyyaml
```

## Reading YAML Files in Python

The `yaml` module in Python allows you to read YAML files. Use the `yaml.safe_load()` function to safely load YAML data from a file or a string.

### Example: Reading YAML Files

```python
import yaml

# Reading YAML file
with open('data.yaml', 'r') as file:
    data = yaml.safe_load(file)

print(data)
```

This code reads the contents of `data.yaml` and parses it into a Python dictionary.

## Writing YAML Files in Python

To write data to a YAML file, use the `yaml.dump()` function. It serializes Python data into a YAML-formatted string.

### Example: Writing YAML Files

```python
import yaml

# Data to write
data = {
    'key1': 'value1',
    'key2': [1, 2, 3],
    'key3': {'nested_key': 'nested_value'}
}

# Writing YAML file
with open('output.yaml', 'w') as file:
    yaml.dump(data, file)
```

This code writes the given dictionary to `output.yaml` in YAML format.

## Advanced Usage

### Handling Custom Objects

PyYAML supports serialization and deserialization of custom objects. You can define custom `representer` and `constructor` functions to serialize and deserialize custom objects, respectively.

### Example: Handling Custom Objects

```python
class CustomObject:
    def __init__(self, value):
        self.value = value

# Define representer
import yaml

def custom_representer(dumper, data):
    return dumper.represent_scalar('!CustomObject', data.value)

def custom_constructor(loader, node):
    value = loader.construct_scalar(node)
    return CustomObject(value)

# Register representer and constructor
yaml.add_representer(CustomObject, custom_representer)
yaml.add_constructor('!CustomObject', custom_constructor)

# Serialize and Deserialize
obj = CustomObject('example_value')
serialized = yaml.dump(obj)
print(serialized)

deserialized = yaml.safe_load(serialized)
print(deserialized.value)
```

### Handling Anchors and Aliases

YAML allows anchors (`&`) and aliases (`*`) to reference the same data elsewhere in the document. PyYAML fully supports anchors and aliases.

### Example: Using Anchors and Aliases

```yaml
base: &base
  key1: value1
  key2: value2

alias:
  <<: *base
  key3: value3
```

PyYAML can parse and dump YAML with anchors and aliases, preserving references.

## Conclusion

YAML is a versatile and human-readable format for data serialization. By leveraging PyYAML, you can easily read, write, and manipulate YAML files in Python. From basic key-value mappings to advanced features like custom objects and anchors, PyYAML provides a comprehensive toolkit for working with YAML data.

