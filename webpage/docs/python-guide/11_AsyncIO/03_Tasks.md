# Tasks for Asynchronous Operations

Tasks are independently managed coroutines that provide flexibility in handling asynchronous operations. Using tasks in Python, you can schedule, execute, and manage concurrent workflows efficiently.

## Prerequisites

Before getting started, ensure the following:

1. The `asyncio` library is available in your Python environment.
2. Python 3.7 or newer is installed for better compatibility and performance.

Here’s an essential import for this guide:

```python
import asyncio
from datetime import datetime
```

## Example 1: Running a Task

The `asyncio.create_task` method allows you to create and run a non-blocking task. Here’s a basic example:

```python
async def fetch_data(input_data, delay):
    # Simulate fetching data from an API with a specified delay
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(1, 3))
    print("Running other code while the task is active.")
    await asyncio.sleep(1)  # Simulate other code running concurrently
    data = await task
    print("Retrieved data:", data)

asyncio.run(main())
```

### Explanation:
- The `create_task` method schedules the coroutine `fetch_data` to run concurrently.
- While the task executes, other code can run without blocking.
- The program retrieves the task result after it completes.

## Example 2: Canceling a Task

You might need to cancel a task if it exceeds a predefined duration. Here’s how:

```python
async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(2, 10))
    await asyncio.sleep(1)  # Allow the task to start
    task.cancel("Took too long")
  
    try:
        data = await task
        print("Retrieved data:", data)
    except asyncio.CancelledError:
        print("Task was canceled.")

asyncio.run(main())
```

### Key Points:
- `task.cancel()` sends a cancellation request to the task.
- The `CancelledError` exception is raised when the task is canceled.
- A `try-except` block handles the cancellation.

## Example 3: Accessing Task Result and Checking Completion

Tasks allow you to access their results and check their completion status:

```python
async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(3, 3))

    try:
        data = task.result()  # Attempt to access the result immediately
        print("Retrieved data without waiting:", data)
    except asyncio.InvalidStateError as e:
        print(f"Error: {e}")

    await asyncio.sleep(4)  # Wait for the task to complete
    try:
        data = await task
        print("Retrieved data after waiting:", data)
    except asyncio.CancelledError:
        print("Task was canceled.")

    print("Is the task done?", task.done())

asyncio.run(main())
```

### Highlights:
- Use `task.result()` to access the result of a task.
- The `InvalidStateError` is raised if the result is accessed before the task completes.
- The `task.done()` method checks if the task has finished.

## Example 4: Setting a Timeout for a Task

To prevent tasks from running indefinitely, use `asyncio.wait_for` to set a timeout:

```python
async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(5, 30))

    try:
        data = await asyncio.wait_for(task, timeout=3)
        print("Retrieved data within the timeout:", data)
    except asyncio.TimeoutError:
        print("Request took too long. Try again.")
    except asyncio.CancelledError:
        print("Task was canceled.")

asyncio.run(main())
```

### Insights:
- The `asyncio.wait_for` method enforces a timeout on task execution.
- A `TimeoutError` is raised if the task exceeds the specified time limit.
- The task can still be canceled manually if needed.

## Key Takeaways

1. **Scheduling Tasks**: Use `asyncio.create_task` to schedule coroutines for concurrent execution.
2. **Task Cancellation**: Tasks can be canceled using the `cancel()` method, and cancellations should be handled appropriately.
3. **Result Handling**: Access task results using `task.result()` after ensuring the task is complete.
4. **Timeout Management**: Enforce execution limits with `asyncio.wait_for` to handle tasks exceeding desired durations.