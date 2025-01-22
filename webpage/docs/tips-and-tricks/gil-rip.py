import time
import threading
import multiprocessing
import math
import sys

def print_version_and_gil_status():
    print(f"Python version: {sys.version}")
    # In a real-world scenario, check if the GIL is disabled here

def compute_factorial(n):
    return math.factorial(n)

def single_threaded_compute(numbers):
    return [compute_factorial(n) for n in numbers]

def multi_threaded_compute(numbers):
    threads = []
    results = []
    
    def thread_func(n):
        results.append(compute_factorial(n))
    
    for n in numbers:
        thread = threading.Thread(target=thread_func, args=(n,))
        threads.append(thread)
        thread.start()
    
    for thread in threads:
        thread.join()
    
    return results

def multi_process_compute(numbers):
    with multiprocessing.Pool() as pool:
        return pool.map(compute_factorial, numbers)

def measure_time(func, numbers):
    start_time = time.time()
    result = func(numbers)
    end_time = time.time()
    return result, end_time - start_time

def main():
    print_version_and_gil_status()
    
    numbers = [50000 + i for i in range(20)]
    
    # Measure performance in single-threaded mode
    _, single_threaded_time = measure_time(single_threaded_compute, numbers)
    
    # Measure performance in multi-threaded mode
    _, multi_threaded_time = measure_time(multi_threaded_compute, numbers)
    
    # Measure performance in multi-process mode
    _, multi_process_time = measure_time(multi_process_compute, numbers)
    
    print(f"Single-threaded time: {single_threaded_time:.2f}s")
    print(f"Multi-threaded time: {multi_threaded_time:.2f}s")
    print(f"Multi-process time: {multi_process_time:.2f}s")

if __name__ == "__main__":
    main()
