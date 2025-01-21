def process_file(file_path):
    try:
        file = open(file_path, 'r')
        data = file.read()
        print("File content:", data)
    except FileNotFoundError:
        print("Error: File not found!")
    finally:
        if 'file' in locals():
            file.close()
        print("File processing complete.")


# Test cases
process_file("example.txt")   # Assuming 'example.txt' exists
process_file("nonexistent.txt")   # Output: Error: File not found!, File processing complete.
