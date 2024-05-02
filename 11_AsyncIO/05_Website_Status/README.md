
# Asynchronous Website Status Checker

In this Python project, we will create an asynchronous website status checker using the power of asynchronous tasks. This program efficiently fetches the status of multiple websites and provides detailed information about each request.

## Prerequisites

Ensure you have the required libraries installed by running:

```bash
pip install requests
```

## Code Implementation

```python
from datetime import datetime
import asyncio
from requests import response

async def check_status(url: str) -> dict:
    start_time = datetime.now()
  
    try:
        # Using 'to_thread' to make a synchronous function asynchronous
        response_object: response = await asyncio.to_thread(requests.get, url, None)
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

    for result in results:
        print(result)

if __name__ == "__main__":
    asyncio.run(main())
```

## How to Run

Save the code in a file (e.g., `website_status_checker.py`) and run it using the following command:

```bash
python website_status_checker.py
```

This script checks the status of several websites concurrently, displaying the results including status codes, start and end times, and any exceptions encountered during the process. The use of asynchronous tasks ensures efficient execution, allowing requests to seemingly occur simultaneously.
