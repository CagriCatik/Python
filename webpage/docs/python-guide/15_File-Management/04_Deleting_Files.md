# Deleting Files

Deleting files is a common operation in Python when managing file systems. Python provides built-in methods in the `os` and `pathlib` modules to delete files efficiently. This tutorial will cover how to delete files and handle exceptions to ensure safety and error handling.

## Using the `os` Module

The `os` module provides the `os.remove()` method to delete files.

### Example: Deleting a File

```python
import os

# Specify the file to delete
file_path = 'sample.txt'

# Check if the file exists before deleting
if os.path.exists(file_path):
    os.remove(file_path)
    print(f"{file_path} has been deleted.")
else:
    print(f"{file_path} does not exist.")
```

In this example:
- The `os.path.exists()` method checks whether the file exists.
- The `os.remove()` method deletes the file.
- A message is printed to confirm the operation or indicate the file does not exist.

## Using the `pathlib` Module

The `pathlib` module offers a modern, object-oriented approach to file handling. Use the `unlink()` method to delete files.

### Example: Deleting a File with `pathlib`

```python
from pathlib import Path

# Specify the file to delete
file_path = Path('sample.txt')

# Check if the file exists before deleting
if file_path.exists():
    file_path.unlink()
    print(f"{file_path} has been deleted.")
else:
    print(f"{file_path} does not exist.")
```

Here:
- The `Path` object represents the file path.
- The `exists()` method checks if the file exists.
- The `unlink()` method deletes the file.

## Handling Exceptions

When deleting files, it’s important to handle exceptions that may occur, such as permission issues or missing files.

### Example: Handling Exceptions with `os`

```python
import os

file_path = 'sample.txt'

try:
    os.remove(file_path)
    print(f"{file_path} has been deleted.")
except FileNotFoundError:
    print(f"Error: {file_path} does not exist.")
except PermissionError:
    print(f"Error: Permission denied to delete {file_path}.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

This approach ensures graceful handling of different error scenarios.

## Deleting Multiple Files

To delete multiple files, you can loop through a list of file paths.

### Example: Deleting Multiple Files

```python
import os

# List of files to delete
files = ['file1.txt', 'file2.txt', 'file3.txt']

for file_path in files:
    try:
        os.remove(file_path)
        print(f"{file_path} has been deleted.")
    except FileNotFoundError:
        print(f"Error: {file_path} does not exist.")
    except Exception as e:
        print(f"An error occurred while deleting {file_path}: {e}")
```

## Deleting Empty Folders

The `os.rmdir()` method or the `Path.rmdir()` method can be used to delete empty directories.

### Example: Deleting an Empty Folder

```python
import os

folder_path = 'empty_folder'

try:
    os.rmdir(folder_path)
    print(f"The folder {folder_path} has been deleted.")
except FileNotFoundError:
    print(f"Error: The folder {folder_path} does not exist.")
except OSError:
    print(f"Error: The folder {folder_path} is not empty or cannot be deleted.")
```

## Conclusion

Python provides powerful tools for deleting files and folders using the `os` and `pathlib` modules. By handling exceptions and verifying file existence, you can ensure safe and efficient file deletion in your programs. Use these techniques to maintain clean and organized file systems in your projects.

