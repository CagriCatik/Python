# TOML

TOML (Tom's Obvious, Minimal Language) is a human-readable data serialization format designed to be easy to read and write. It is commonly used for configuration files due to its simplicity and support for nested structures. TOML provides a clear structure for representing key-value pairs, arrays, and tables, making it a popular choice among developers.

## TOML Syntax

TOML uses key-value pairs, tables, and arrays to structure data. Here's an example:

```toml
# Example TOML file
[database]
host = "127.0.0.1"
port = 5432
user = "admin"
password = "secret"

[servers]
active = true
locations = ["us-east", "us-west", "eu-central"]

[servers.backup]
enabled = false
frequency = "daily"
```

## Installing a TOML Library

To work with TOML files in Python, install the `toml` or `tomli` library. Python 3.11 and above have native support for TOML through the `tomllib` module.

### For Python 3.10 or earlier:

```bash
pip install toml
```

Or, if you prefer `tomli`:

```bash
pip install tomli
```

## Reading TOML Files in Python

You can read TOML files using the `toml` or `tomllib` module (for Python 3.11+).

### Example: Reading a TOML File

```python
import toml

# Read TOML file
data = toml.load('config.toml')

print(data)
```

For Python 3.11 and above:

```python
import tomllib

# Read TOML file
with open('config.toml', 'rb') as file:
    data = tomllib.load(file)

print(data)
```

This code parses the `config.toml` file and converts it into a Python dictionary.

## Writing TOML Files in Python

The `toml` library allows you to write Python data structures into TOML format.

### Example: Writing a TOML File

```python
import toml

# Data to write
data = {
    "database": {
        "host": "127.0.0.1",
        "port": 5432,
        "user": "admin",
        "password": "secret"
    },
    "servers": {
        "active": True,
        "locations": ["us-east", "us-west", "eu-central"],
        "backup": {
            "enabled": False,
            "frequency": "daily"
        }
    }
}

# Write to TOML file
with open('output.toml', 'w') as file:
    toml.dump(data, file)
```

This example writes the `data` dictionary to `output.toml` in TOML format.

## Using Nested Tables

TOML supports nested tables, which are represented as nested dictionaries in Python.

### Example: Nested Tables

```toml
[package]
name = "example"
version = "1.0.0"

dependencies = ["requests", "flask"]

[package.settings]
enabled = true
features = ["debug", "logging"]
```

In Python, this TOML file would load as:

```python
{
    "package": {
        "name": "example",
        "version": "1.0.0",
        "dependencies": ["requests", "flask"],
        "settings": {
            "enabled": True,
            "features": ["debug", "logging"]
        }
    }
}
```

## Error Handling

When working with TOML files, handle exceptions to manage syntax errors or missing files gracefully.

### Example: Handling Errors

```python
import toml

try:
    data = toml.load('config.toml')
    print(data)
except toml.TomlDecodeError as e:
    print(f"TOML Syntax Error: {e}")
except FileNotFoundError:
    print("The specified file does not exist.")
```

## Use Cases for TOML

1. **Configuration Files**: TOML is ideal for defining settings and preferences in a structured, human-readable format.
2. **Dependency Management**: Tools like `poetry` use TOML for managing dependencies in Python projects.
3. **Data Serialization**: TOML can be used for lightweight data exchange between systems.

## Conclusion

TOML is a powerful and user-friendly format for configuration and data serialization. With Python's `toml` library or the built-in `tomllib` (Python 3.11+), you can easily read, write, and manipulate TOML files in your projects. Its simplicity and readability make it an excellent choice for developers looking for a structured, human-readable format.

