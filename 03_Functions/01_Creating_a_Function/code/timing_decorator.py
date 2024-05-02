import time

def timing_decorator(func):
    """A decorator to measure the execution time of a function."""
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"{func.__name__} took {execution_time:.5f} seconds to execute")
        return result
    return wrapper

@timing_decorator
def time_consuming_function():
    """An example time-consuming function."""
    time.sleep(3)
    print("Function execution complete")

# Example usage
time_consuming_function()
