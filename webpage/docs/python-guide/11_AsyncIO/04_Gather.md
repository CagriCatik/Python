# Using Futures for Asynchronous Tasks

Efficient handling of multiple asynchronous tasks is essential in modern programming, especially when dealing with I/O-bound operations. Python provides a robust framework for asynchronous programming through the `asyncio` library. In this guide, we will explore how to use futures in Python to manage multiple asynchronous tasks effectively.

## Prerequisites

Before diving in, ensure you have:

1. A basic understanding of asynchronous programming in Python.
2. Python 3.7 or newer installed (as `asyncio`'s key features are better supported in these versions).

## Setting Up the Code

The following function serves as the foundation for our examples. It simulates fetching data asynchronously with a delay.

```python
import asyncio

# Simulates fetching data with a delay
async def fetch_data(input_value, delay):
    await asyncio.sleep(delay)
    return {"input": input_value, "result": f"Data for {input_value}"}
```

## Understanding Futures in Python

A future represents the eventual result of an asynchronous operation. Instead of handling each task sequentially, futures allow us to initiate multiple tasks simultaneously and gather their results efficiently.

## Creating and Using Futures with `asyncio.gather()`

The `asyncio.gather()` function provides a convenient way to run multiple coroutines concurrently. Here’s how you can use it:

```python
# Main function to handle multiple tasks
async def main():
    tasks = asyncio.gather(
        fetch_data(1, 1),
        fetch_data(2, 2),
        fetch_data(3, 2)  # Simulating a task that might raise an exception
    )

    results = await tasks
    print_results(results)

# Helper function to print results
def print_results(results):
    for result in results:
        print(result["result"])

# Run the main function
asyncio.run(main())
```

In the example above, `asyncio.gather()` creates a future that collects the results of all specified tasks. The tasks are executed concurrently, significantly improving efficiency compared to running them sequentially.

## Handling Exceptions in Futures

Sometimes, tasks may raise exceptions. It’s crucial to handle these gracefully to prevent one failing task from crashing the entire program. Modify the `fetch_data` function to simulate an exception:

```python
async def fetch_data(input_value, delay, fails=False):
    await asyncio.sleep(delay)
    if fails:
        raise Exception(f"Task {input_value} failed!")
    return {"input": input_value, "result": f"Data for {input_value}"}
```

Update the `main` function to handle exceptions using the `return_exceptions=True` parameter in `asyncio.gather()`:

```python
async def main():
    tasks = asyncio.gather(
        fetch_data(1, 1),
        fetch_data(2, 2),
        fetch_data(3, 2, fails=True),
        return_exceptions=True
    )

    results = await tasks
    print_results(results)

# Updated helper function
def print_results(results):
    for result in results:
        if isinstance(result, Exception):
            print(f"An exception occurred: {result}")
        else:
            print(result["result"])

# Run the main function
asyncio.run(main())
```

Here, any exceptions raised by tasks are captured and returned as part of the results list. This allows the program to continue executing other tasks without interruption.

## Key Takeaways

1. **Concurrent Execution**: Using `asyncio.gather()`, multiple tasks can be executed simultaneously, reducing the total runtime.
2. **Exception Handling**: The `return_exceptions=True` parameter ensures that exceptions are returned as part of the results, making error handling more manageable.
3. **Improved Readability**: The separation of task execution and result printing improves the overall clarity and maintainability of the code.

## Experiment and Learn

Try modifying the examples to:
- Add more tasks with varying delays.
- Simulate different types of exceptions.
- Explore the behavior when `return_exceptions` is set to `False`.
