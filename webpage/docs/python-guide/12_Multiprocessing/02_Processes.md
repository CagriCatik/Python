# Multiprocessing

This tutorial addresses the implementation of multiprocessing in Python to enhance program performance. It will also compare multiprocessing with threading to highlight the differences and appropriate use cases. The tutorial includes creating helper scripts for timing functions, generating timestamps, and simulating time-consuming operations. These scripts will be integrated into a main program utilizing Python's `multiprocessing` module.

## Helper Script Creation

We will start by creating a helper script to include utility functions for timing, generating timestamps, and simulating time-consuming operations.

## Helper Script: `time_utils.py`

```python
from time import perf_counter
from functools import wraps
from datetime import datetime

def get_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = perf_counter()
        result = func(*args, **kwargs)
        end_time = perf_counter()
        print(f"Time taken by {func.__name__}: {end_time - start_time:.4f} seconds")
        return result
    return wrapper

def timestamp():
    return datetime.now().strftime("%H:%M:%S")

def kill_time():
    for _ in range(10**8):
        pass
```

## Main Script with Multiprocessing

Next, we will use the `multiprocessing` module to run tasks in parallel. This will involve creating processes, starting them, and waiting for them to complete.

## Main Script: `main_multiprocessing.py`

```python
import multiprocessing as mp
from time_utils import get_time, timestamp, kill_time
import os

def worker_task(param):
    print(f"Starting process: {mp.current_process().name}, PID: {os.getpid()}, Timestamp: {timestamp()}")
    kill_time()
    print(f"Finished process: PID: {os.getpid()}, Timestamp: {timestamp()}")

@get_time
def main():
    process1 = mp.Process(name='Process_1', target=worker_task, args=('arg1',))
    process2 = mp.Process(name='Process_2', target=worker_task, args=('arg2',))

    process1.start()
    process2.start()

    process1.join()
    process2.join()

if __name__ == '__main__':
    main()
```

## Comparing with Threading

To demonstrate the performance differences, we will implement a similar task using threading.

## Threading Script: `main_threading.py`

```python
import threading
from time_utils import get_time, timestamp, kill_time
import os

def worker_task(param):
    print(f"Starting thread: {threading.current_thread().name}, PID: {os.getpid()}, Timestamp: {timestamp()}")
    kill_time()
    print(f"Finished thread: PID: {os.getpid()}, Timestamp: {timestamp()}")

@get_time
def main():
    thread1 = threading.Thread(name='Thread_1', target=worker_task, args=('arg1',))
    thread2 = threading.Thread(name='Thread_2', target=worker_task, args=('arg2',))

    thread1.start()
    thread2.start()

    thread1.join()
    thread2.join()

if __name__ == '__main__':
    main()
```

## Analysis and Explanation

### Performance and Parallelism

When you run `main_multiprocessing.py`, you will observe that the processes run in parallel, each having a unique process ID. This is true parallel execution, as each process runs independently on separate CPU cores if available.

When you run `main_threading.py`, the threads share the same process ID and execute concurrently within the same process. Due to Python's Global Interpreter Lock (GIL), true parallel execution is not achieved with threading. Threads are more suitable for I/O-bound tasks, whereas multiprocessing is better for CPU-bound tasks.

### Overhead of Process Creation

Creating processes involves more overhead compared to threads due to the need to allocate separate memory space and resources for each process. Therefore, for small tasks, threading or regular function calls may be more efficient.

## Conclusion

Multiprocessing is a powerful tool for parallelizing CPU-bound tasks in Python. It allows true parallel execution by utilizing multiple cores of the CPU. However, it comes with higher overhead compared to threading, making it more suitable for larger tasks. Threading, on the other hand, is more appropriate for I/O-bound tasks where tasks spend significant time waiting for external resources.

In subsequent lessons, we will explore advanced multiprocessing techniques and scenarios, such as process pools, inter-process communication, and handling larger-scale parallel computing tasks.

## Further Learning

- **Process Pools**: Efficiently manage and reuse multiple processes.
- **Inter-process Communication (IPC)**: Share data between processes using queues and pipes.
- **Error Handling in Multiprocessing**: Properly manage exceptions and errors in multiprocessing environments.

By mastering these concepts, you will be well-equipped to leverage multiprocessing to its fullest potential in Python applications.