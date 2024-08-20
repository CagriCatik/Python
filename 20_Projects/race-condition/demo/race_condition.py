import threading
import time
import logging

# Configure logging
logging.basicConfig(
    filename='race_condition.log',  # Log file name
    level=logging.INFO,             # Log level
    format='%(asctime)s - %(threadName)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

# Creating a lock object
lock = threading.Lock()

# Function to read the content of a file with a lock
def read_file(file_path):
    with lock:
        with open(file_path, 'r') as file:
            data = file.read()
            logging.info(f"Read data: {data}")
        # Adding a small delay to simulate time-consuming operations
        time.sleep(0.5)

# Function to modify the content of a file with a lock
def modify_file(file_path, content):
    with lock:
        with open(file_path, 'w') as file:
            file.write(content)
            logging.info(f"File modified with content: {content}")
        # Adding a small delay to simulate time-consuming operations
        time.sleep(0.5)

# File path for the example
file_path = 'example.txt'

# Writing initial content to the file
with open(file_path, 'w') as file:
    file.write("Initial Content")
logging.info("Initial content written to file")

# Creating threads that will read and modify the file concurrently
threads = []
for i in range(5):
    t1 = threading.Thread(target=read_file, args=(file_path,), name=f"Reader-{i+1}")
    t2 = threading.Thread(target=modify_file, args=(file_path, f"New Content {i+1}"), name=f"Modifier-{i+1}")
    threads.append(t1)
    threads.append(t2)

# Starting the threads
for thread in threads:
    thread.start()

# Waiting for all threads to complete
for thread in threads:
    thread.join()

logging.info("All threads have completed execution")
