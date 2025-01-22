# Asynchronous Programming with Asyncio

This tutorial will guide you through the basics of using Asyncio in Python for asynchronous programming. Asyncio is a built-in module that allows you to write asynchronous code, enabling more efficient handling of tasks that involve waiting, such as network requests or I/O operations.

## Getting Started

To begin using Asyncio, follow these steps:

1. Import the `asyncio` module.
2. Import the `task` type from `asyncio`.

```python
import asyncio
from asyncio import Task
```

Now, let's set up the main entry point for our script and make it asynchronous.

```python
async def main():
    # Your synchronous code goes here
    pass

if __name__ == "__main__":
    asyncio.run(main())
```

Ensure that your script has an asynchronous main entry point as shown above. This is essential for running your code asynchronously with Asyncio.

## Creating an Asynchronous Function

Let's create an asynchronous function (coroutine) called `fetch_data` to simulate fetching data asynchronously.

```python
from datetime import datetime

async def fetch_data(input_data):
    print("Fetching data...")
  
    start_time = datetime.now()
  
    # Simulate asynchronous task using asyncio.sleep
    await asyncio.sleep(3)
  
    end_time = datetime.now()
  
    print("Data retrieved.")
  
    return {
        'input': input_data,
        'start_time': start_time.strftime("%M:%S"),
        'end_time': end_time.strftime("%M:%S")
    }
```

In this example, the `fetch_data` function simulates fetching data asynchronously with a 3-second pause. The `await` keyword is used to indicate asynchronous behavior.

## Using the Asynchronous Function

Now, let's use the `fetch_data` function inside our main entry point to demonstrate asynchronous execution.

```python
async def main():
    data_one = await fetch_data(1)
    data_two = await fetch_data(2)

    print(f"Data one: {data_one}")
    print(f"Data two: {data_two}")

if __name__ == "__main__":
    asyncio.run(main())
```

In this example, we await the execution of the `fetch_data` function for both `data_one` and `data_two`. However, this still runs synchronously, as we're waiting for each function to complete before moving on to the next.

## Creating Tasks for Concurrent Execution

To fully leverage asynchronous programming, create tasks to run multiple asynchronous functions concurrently. Modify the main entry point as follows:

```python
async def main():
    task_one = asyncio.create_task(fetch_data(1))
    task_two = asyncio.create_task(fetch_data(2))

    data_one = await task_one
    data_two = await task_two

    print(f"Data one: {data_one}")
    print(f"Data two: {data_two}")
```

By creating tasks using `asyncio.create_task`, we can initiate multiple asynchronous functions simultaneously. This allows the script to run more efficiently, making the most of asynchronous capabilities.
