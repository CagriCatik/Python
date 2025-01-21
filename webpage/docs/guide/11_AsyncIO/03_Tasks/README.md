# Async IO Tasks Tutorial

Tasks are scheduled and independently managed coroutines, providing flexibility in handling asynchronous operations.

## Prerequisites

Ensure you have the `asyncio` library available in your Python environment.

```python
import asyncio
from datetime import datetime
```

## Example: Running a Task

Let's start with a basic example using the `asyncio.create_task` method to create and run a non-blocking task.

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

This example demonstrates that while the task is fetching data asynchronously, other code can continue to run concurrently.

## Example: Canceling a Task

In some cases, you might want to cancel a task if it takes too long. Here's an example:

```python
async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(2, 10))
    await asyncio.sleep(1)  # Give the task time to start
    task.cancel("Took too long")
  
    try:
        data = await task
        print("Retrieved data:", data)
    except asyncio.CancelledError:
        print("Task was canceled.")
```

This example cancels the task after one second and demonstrates handling the cancellation with a try-except block.

## Example: Accessing Task Result and Checking Completion

You can access the result of a task and check if it's completed. Here's an example:

```python
async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def main():
    task = asyncio.create_task(fetch_data(3, 3))
  
    try:
        data = task.result()  # Try to access the result without waiting
        print("Retrieved data without waiting:", data)
    except asyncio.InvalidStateError as e:
        print(f"Error: {e}")

    await asyncio.sleep(4)  # Give the task time to complete
    try:
        data = await task
        print("Retrieved data after waiting:", data)
    except asyncio.CancelledError:
        print("Task was canceled.")
  
    print("Is the task done?", task.done())

asyncio.run(main())
```

This example showcases attempting to access the result without waiting and checking if the task is done before retrieving the result.

## Example: Setting a Timeout for a Task

To prevent tasks from taking too long, you can set a timeout. Here's an example:

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

This example sets a timeout of 3 seconds, indicating that if the task takes longer, it should raise a `TimeoutError`. The code then handles this exception appropriately.
