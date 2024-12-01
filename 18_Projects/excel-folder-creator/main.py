import os
import pandas as pd
import logging
import re

# Set up logging
logging.basicConfig(filename='folder_creation.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# Function to sanitize folder names
def sanitize_folder_name(name):
    """
    Replace invalid characters for folder names with an underscore.
    """
    return re.sub(r'[<>:"/\\|?*]', '_', name.strip())

# Main function to create folders
def create_folders_from_excel(excel_file, sheet_name=0, column_index=0, base_directory='./suppliers_folders'):
    """
    Read the Excel file, extract the names, and create folders.
    """
    try:
        # Load the Excel file
        df = pd.read_excel(excel_file, sheet_name=sheet_name)

        # Extract the list of names from the specified column
        names = df.iloc[:, column_index].tolist()

        # Ensure the base directory exists
        if not os.path.exists(base_directory):
            os.makedirs(base_directory)
            logging.info(f"Base directory created: {base_directory}")

        # Create folders for each name in the list
        for name in names:
            sanitized_name = sanitize_folder_name(name)
            folder_path = os.path.join(base_directory, sanitized_name)

            if not os.path.exists(folder_path):
                os.makedirs(folder_path)
                logging.info(f"Folder created: {folder_path}")
            else:
                logging.warning(f"Folder already exists: {folder_path}")

    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")
        print(f"An error occurred: {str(e)}")

# Execute the script
if __name__ == "__main__":
    # Replace 'suppliers.xlsx' with your Excel file path
    create_folders_from_excel('template.xlsx', sheet_name=0, column_index=0, base_directory='./suppliers_folders')

    print("Folder creation process completed. Check 'folder_creation.log' for details.")
