# Asynchronous Website Status Checker

This Python project demonstrates how to create an asynchronous website status checker using the power of asynchronous tasks. By leveraging Python's `asyncio` library, the program efficiently fetches the status of multiple websites concurrently, providing detailed information about each request.

## Prerequisites

Ensure you have the required library installed by running the following command:

```bash
pip install requests
```

## Code Implementation

Below is the complete implementation of the asynchronous website status checker:

```python
from datetime import datetime
import asyncio
import requests

async def check_status(url: str) -> dict:
    start_time = datetime.now()

    try:
        # Using 'to_thread' to make a synchronous function asynchronous
        response_object = await asyncio.to_thread(requests.get, url)
        end_time = datetime.now()

        # Return a dictionary containing website details
        return {
            "website": url,
            "status": response_object.status_code,
            "start_time": start_time.strftime("%H:%M:%S"),
            "end_time": end_time.strftime("%H:%M:%S")
        }

    except Exception as e:
        end_time = datetime.now()
        # Return exception details if an error occurs
        return {
            "website": url,
            "status": f"Error: {str(e)}",
            "start_time": start_time.strftime("%H:%M:%S"),
            "end_time": end_time.strftime("%H:%M:%S")
        }

async def main():
    # List of websites to check
    tasks = asyncio.gather(
        check_status("https://www.bing.com"),
        check_status("https://www.google.com"),
        check_status("https://www.apple.com"),
        check_status("https://www.bbc.com"),
        check_status("https://lol"),
        return_exceptions=True
    )

    print("Fetching results...")
    results = await tasks

    # Display results
    for result in results:
        print(result)

if __name__ == "__main__":
    asyncio.run(main())
```

## How It Works

1. **Function `check_status(url)`**:
    - Fetches the status of a given URL asynchronously.
    - Uses `asyncio.to_thread` to execute the synchronous `requests.get` function in a thread pool.
    - Captures the start and end times to provide detailed timing information.
    - Handles exceptions gracefully, returning error details if a request fails.

2. **Function `main()`**:
    - Gathers all website status-checking tasks using `asyncio.gather()`.
    - Fetches results concurrently and prints the output for each website.

3. **Asynchronous Execution**:
    - Tasks are run concurrently, reducing the total execution time.
    - The program does not block while waiting for individual requests to complete.

## How to Run

Save the script to a file (e.g., `website_status_checker.py`) and run it using the following command:

```bash
python website_status_checker.py
```

## Example Output

Here is an example of the output you might see when running the script:

```
Fetching results...
{'website': 'https://www.bing.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}
{'website': 'https://www.google.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}
{'website': 'https://www.apple.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}
{'website': 'https://www.bbc.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}
{'website': 'https://lol', 'status': 'Error: Invalid URL', 'start_time': '12:01:45', 'end_time': '12:01:45'}
```

## Key Features

- **Concurrent Requests**: By using `asyncio.gather()`, multiple requests are handled concurrently, minimizing execution time.
- **Detailed Output**: Each result includes the website URL, HTTP status code (or error message), and the start and end times for the request.
- **Graceful Error Handling**: Invalid URLs or failed requests are captured and reported without disrupting the execution.

## Applications

This asynchronous website status checker can be extended for various use cases, such as:
- Monitoring website uptime.
- Fetching metadata from multiple APIs concurrently.
- Building scalable network tools.

By using this approach, you can efficiently manage multiple network requests in your Python applications.

