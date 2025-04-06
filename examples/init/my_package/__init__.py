# my_package/__init__.py

# Import specific functions from the submodules for easier access.
from .module1 import greet
from .module2 import farewell

# Define a package-level variable.
__version__ = "1.0.0"

# Optional: Print a message when the package is imported.
print(f"my_package v{__version__} has been imported!")
