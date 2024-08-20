# Automating Folder Creation from a List Using Python

Instead of using Excel functions and batch files, we can accomplish the same task using Python. Python provides a more flexible and powerful way to automate tasks such as folder creation. In this tutorial, we will walk through the process of reading a list of names from an Excel file and automatically creating corresponding folders using Python.

## Objective

The objective of this tutorial is to use Python to automate the creation of multiple directories based on a list of names stored in an Excel spreadsheet. This approach is more scalable and easier to integrate into larger automation scripts or systems.

## Prerequisites

Before proceeding, ensure you have the following:

1. **Python 3.x** installed on your system.
2. **pip** for installing required packages.
3. **An Excel file** containing the list of names (e.g., `suppliers.xlsx`).
4. Basic understanding of Python scripting.

## Required Python Libraries

You will need to install a few Python libraries to handle Excel files and filesystem operations:

- `pandas`: For reading Excel files.
- `openpyxl`: For handling Excel file formats.
- `os`: Standard Python library for interacting with the operating system.

You can install `pandas` and `openpyxl` using pip:

```bash
pip install pandas openpyxl
```

## Step-by-Step Implementation

### 1. Importing the Necessary Libraries

Start by importing the required libraries:

```python
import os
import pandas as pd
```

- **`os`**: This module provides a way of using operating system-dependent functionality like reading or writing to the file system.
- **`pandas`**: This is a powerful data manipulation library that will help us read the Excel file.

### 2. Reading the Excel File

Assume you have an Excel file named `suppliers.xlsx` with the list of names in the first column of the first sheet. The file might look something like this:

| Supplier Names |
|----------------|
| Supplier1      |
| Supplier2      |
| Supplier3      |

You can read this file using pandas:

```python
# Load the Excel file
excel_file = 'suppliers.xlsx'

# Read the first sheet of the Excel file
df = pd.read_excel(excel_file, sheet_name=0)

# Extract the list of supplier names
supplier_names = df.iloc[:, 0].tolist()
```

- **`pd.read_excel`**: Reads the Excel file into a DataFrame.
- **`df.iloc[:, 0].tolist()`**: Extracts the first column (supplier names) and converts it into a Python list.

### 3. Creating Folders Based on the List

Now that you have a list of supplier names, you can create corresponding folders. The `os` module will be used to create directories:

```python
# Directory where you want to create folders
base_directory = './suppliers_folders'

# Ensure the base directory exists
if not os.path.exists(base_directory):
    os.makedirs(base_directory)

# Iterate through the list of supplier names and create folders
for name in supplier_names:
    # Construct the path for the new folder
    folder_path = os.path.join(base_directory, name)
    
    # Create the directory if it does not exist
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
        print(f"Folder created: {folder_path}")
    else:
        print(f"Folder already exists: {folder_path}")
```

- **`os.path.exists`**: Checks if a directory or file already exists.
- **`os.makedirs`**: Creates the directory specified by the path. If the directory already exists, it does nothing.
- **`os.path.join`**: Joins one or more path components intelligently, handling different operating system path separators.

### 4. Error Handling and Logging

To make the script more robust, it's good practice to add error handling and logging. This will help identify issues such as invalid folder names or permission errors.

```python
import logging

# Setup basic logging
logging.basicConfig(filename='folder_creation.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# Iterate through the list of supplier names and create folders
for name in supplier_names:
    try:
        # Remove leading/trailing spaces and invalid characters from folder names
        sanitized_name = name.strip().replace(' ', '_')
        
        # Construct the path for the new folder
        folder_path = os.path.join(base_directory, sanitized_name)
        
        # Create the directory if it does not exist
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            logging.info(f"Folder created: {folder_path}")
        else:
            logging.warning(f"Folder already exists: {folder_path}")
    except Exception as e:
        logging.error(f"Error creating folder for {name}: {str(e)}")
```

- **`logging.basicConfig`**: Configures the logging module to write messages to a file, with timestamps and severity levels.
- **`try...except` block**: Catches and logs any errors that occur during folder creation.

## 5. Running the Script

Save the script to a Python file, for example, `create_folders.py`, and run it in your command line:

```bash
python create_folders.py
```

## 6. Verifying the Results

After running the script, navigate to the `suppliers_folders` directory. You should see a folder for each supplier listed in your Excel file. The `folder_creation.log` file will contain a log of all actions taken by the script, including any errors encountered.

## Advanced Considerations

### 6.1 Handling Special Characters

In some cases, supplier names might contain special characters that are not valid in folder names. The script provided above sanitizes folder names by replacing spaces with underscores, but you may need to extend this to handle other invalid characters. For example:

```python
import re

# Function to sanitize folder names
def sanitize_folder_name(name):
    # Replace invalid characters with an underscore
    return re.sub(r'[<>:"/\\|?*]', '_', name.strip())
```

### 6.2 Creating Nested Folders

If you need to create a nested folder structure (e.g., Year/Month/SupplierName), you can extend the script by modifying the `folder_path`:

```python
# Example: Creating nested folders
for name in supplier_names:
    year = "2024"  # Example of a fixed value, this could be dynamic
    month = "08"   # Example of a fixed value, this could be dynamic
    folder_path = os.path.join(base_directory, year, month, sanitize_folder_name(name))
    
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
        logging.info(f"Nested folder created: {folder_path}")
```

 