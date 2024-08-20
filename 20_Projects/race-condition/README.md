# Race Condition and How to Solve It with `threading.Lock`

## Introduction to Race Conditions

A race condition in software development is a situation that occurs in concurrent or multi-threaded programs when multiple threads or processes attempt to access and manipulate shared resources simultaneously. This condition can lead to unpredictable behavior, inconsistent results, and, ultimately, a breakdown in the expected operation of the program.

### Understanding Race Conditions through an Example

To illustrate a race condition, consider a scenario where you have a file that needs to be both read and modified concurrently by multiple threads. Let’s examine the following two functions:

1. **`read_file()`**: This function reads the content of a file.
2. **`modify_file()`**: This function overwrites the file with a new string.

In a multi-threaded environment, where several threads are executing these functions concurrently, a race condition may arise. This occurs because multiple threads may access the file at the same time, leading to some threads reading the file before it is modified, while others may read it after the modification. The result is inconsistent and unpredictable behavior, where different threads may get different versions of the file content depending on the timing of their execution.

### Example Code Demonstrating a Race Condition

Consider the following Python code that exemplifies a race condition:

```python
import threading

# Function to read the content of a file
def read_file(file_path):
    with open(file_path, 'r') as file:
        data = file.read()
        print(f"Read data: {data}")

# Function to modify the content of a file
def modify_file(file_path, content):
    with open(file_path, 'w') as file:
        file.write(content)
        print("File modified")

# File path for the example
file_path = 'example.txt'

# Writing initial content to the file
with open(file_path, 'w') as file:
    file.write("Initial Content")

# Creating threads that will read and modify the file concurrently
threads = []
for _ in range(5):
    t1 = threading.Thread(target=read_file, args=(file_path,))
    t2 = threading.Thread(target=modify_file, args=(file_path, "New Content"))
    threads.append(t1)
    threads.append(t2)

# Starting the threads
for thread in threads:
    thread.start()

# Waiting for all threads to complete
for thread in threads:
    thread.join()
```

In this example, multiple threads are created to execute `read_file()` and `modify_file()` concurrently. Since there is no synchronization mechanism in place, these threads may interfere with each other, leading to inconsistent reads and writes.

### The Consequence: Unpredictable Behavior

When you run the code, you will observe that some threads might read the file before it is modified, displaying the initial content, while others might read the modified content. This inconsistency arises due to the race condition, where the timing of thread execution determines the result.

## Mitigating Race Conditions with `threading.Lock`

To avoid race conditions, it is essential to ensure that shared resources are accessed by only one thread at a time. This can be achieved using a synchronization primitive known as a **lock**.

### Introducing `threading.Lock`

The `threading.Lock` object in Python acts as a gatekeeper that controls access to shared resources. By acquiring the lock before accessing a shared resource, a thread can ensure exclusive access, preventing other threads from interfering until the lock is released.

### Modified Example with `threading.Lock`

Let’s modify the previous example to use `threading.Lock` to prevent the race condition:

```python
import threading

# Creating a lock object
lock = threading.Lock()

# Function to read the content of a file with a lock
def read_file(file_path):
    with lock:
        with open(file_path, 'r') as file:
            data = file.read()
            print(f"Read data: {data}")

# Function to modify the content of a file with a lock
def modify_file(file_path, content):
    with lock:
        with open(file_path, 'w') as file:
            file.write(content)
            print("File modified")

# File path for the example
file_path = 'example.txt'

# Writing initial content to the file
with open(file_path, 'w') as file:
    file.write("Initial Content")

# Creating threads that will read and modify the file concurrently
threads = []
for _ in range(5):
    t1 = threading.Thread(target=read_file, args=(file_path,))
    t2 = threading.Thread(target=modify_file, args=(file_path, "New Content"))
    threads.append(t1)
    threads.append(t2)

# Starting the threads
for thread in threads:
    thread.start()

# Waiting for all threads to complete
for thread in threads:
    thread.join()
```

### Explanation of the Modified Code

In this updated example, we introduce a lock by creating a `threading.Lock` object. Both `read_file()` and `modify_file()` functions are modified to acquire the lock before accessing the file. The `with lock:` statement ensures that only one thread can enter the critical section (i.e., the code block where the file is accessed) at a time. Once a thread completes its operation and exits the critical section, it releases the lock, allowing the next thread to proceed.

### The Result: Consistent and Predictable Behavior

When this modified code is executed, you will notice that the race condition no longer occurs. Each thread executes in an orderly fashion, with one thread reading or modifying the file at a time, leading to consistent and predictable results.

 