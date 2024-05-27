# Asynchronous Operations with Futures in Python

In this tutorial, we will explore the concept of futures in Python to efficiently handle multiple asynchronous tasks. Instead of creating individual tasks and awaiting each one separately, we will use futures to initiate multiple tasks simultaneously.

## Prerequisites

Make sure you have a basic understanding of asynchronous programming in Python and have the necessary libraries installed. If not, consider revisiting the previous lecture.

## Code Setup

```python
import asyncio

# Our asynchronous function fetching data with a delay
async def fetch_data(input_value, delay):
    await asyncio.sleep(delay)
    return {"input": input_value, "result": f"Data for {input_value}"}
```

## Creating a Future

In the main entry point of your program, create a future using `asyncio.gather()`. A future represents the eventual result of an asynchronous operation.

```python
# Creating a future to handle multiple tasks
async def main():
    tasks = asyncio.gather(
        fetch_data(1, 1),
        fetch_data(2, 2),
        fetch_data(3, 2),  # Simulating a task that will raise an exception
        return_exceptions=True  # Return exceptions instead of failing
    )
  
    results = await tasks
    print_results(results)

# Printing results in a readable format
def print_results(results):
    for result in results:
        if isinstance(result, Exception):
            print(f"An exception occurred: {result}")
        else:
            print(result["result"])

# Running the main function
asyncio.run(main())
```

In the example above, we create a future named `tasks` using `asyncio.gather()`. This allows us to start all tasks simultaneously. The `return_exceptions=True` parameter ensures that exceptions are returned instead of causing the entire operation to fail.

## Handling Exceptions

To demonstrate exception handling within the `asyncio.gather()` function, modify your asynchronous function to raise an exception based on a parameter:

```python
async def fetch_data(input_value, delay, fails=False):
    await asyncio.sleep(delay)
    if fails:
        raise Exception("Something went wrong!")
    return {"input": input_value, "result": f"Data for {input_value}"}
```

Now, when calling `fetch_data(3, 2, fails=True)`, it will simulate a task that raises an exception. The `asyncio.gather()` function, with `return_exceptions=True`, ensures that the exceptions are captured and returned along with the results. By using futures and `asyncio.gather()`, you can efficiently handle multiple asynchronous tasks in a single block of code. Additionally, you learned how to handle exceptions within the gathering process and print results in a more readable format. Experiment with these concepts to enhance your understanding of asynchronous programming in Python.
