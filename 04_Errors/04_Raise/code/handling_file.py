def read_file(filename):
    try:
        with open(filename, 'r') as file:
            contents = file.read()
        return contents
    except FileNotFoundError:
        raise FileNotFoundError(f"File '{filename}' not found.")

try:
    content = read_file("sample.txt")  # Assuming sample.txt does not exist
    print("File contents:", content)
except FileNotFoundError as fnf_error:
    print("Error:", fnf_error)
