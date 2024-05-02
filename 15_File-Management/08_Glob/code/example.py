import glob
import os

def find_javascript_files(directory):
    """
    Find all JavaScript files recursively in the specified directory.

    Args:
        directory (str): The directory to search in.

    Returns:
        list: A list of absolute paths to JavaScript files found.
    """
    # Ensure directory exists
    if not os.path.isdir(directory):
        raise ValueError("Directory does not exist.")

    # Search for all JavaScript files recursively
    javascript_files = glob.glob(f"{directory}/**/*.js", recursive=True)
    return javascript_files

if __name__ == "__main__":
    # Get the directory of the current script
    current_directory = os.path.dirname(os.path.realpath(__file__))

    # Find JavaScript files in the current directory and its subdirectories
    javascript_files = find_javascript_files(current_directory)

    # Print the list of JavaScript files found
    print("JavaScript files found:")
    for file in javascript_files:
        print(file)
