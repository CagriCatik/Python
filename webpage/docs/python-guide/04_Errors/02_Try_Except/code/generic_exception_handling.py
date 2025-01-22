try:
    file = open("nonexistent_file.txt", "r")
    content = file.read()
    file.close()
except FileNotFoundError as e:
    print(f"Error: File not found - {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
