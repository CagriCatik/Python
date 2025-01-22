import threading

def process_file(file_name):
    try:
        # Read and process the file
        with open(file_name, 'r') as file:
            # For demonstration, let's count the number of lines in each file
            lines = file.readlines()
            print(f"File {file_name} has {len(lines)} lines.")
    except FileNotFoundError:
        print(f"Error: File {file_name} not found.")

def main():
    file_names = ["file1.txt", "file2.txt", "file3.txt"]
    threads = []

    # Create and start threads for each file
    for file_name in file_names:
        thread = threading.Thread(target=process_file, args=(file_name,))
        threads.append(thread)
        thread.start()

    # Wait for all threads to finish
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    main()
