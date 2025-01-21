from datetime import datetime
import asyncio
import aiohttp
import logging

logging.basicConfig(level=logging.INFO)

async def check_status(url: str) -> dict:
    start_time = datetime.now()

    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response_object:
                end_time = datetime.now()

                return {
                    "website": url,
                    "status": response_object.status,
                    "start_time": start_time.strftime("%H:%M:%S"),
                    "end_time": end_time.strftime("%H:%M:%S")
                }

    except aiohttp.ClientConnectionError as conn_error:
        end_time = datetime.now()
        logging.error(f"Connection error for {url}: {str(conn_error)}")
        return {
            "website": url,
            "status": f"Connection Error: {str(conn_error)}",
            "start_time": start_time.strftime("%H:%M:%S"),
            "end_time": end_time.strftime("%H:%M:%S")
        }
    except Exception as e:
        end_time = datetime.now()
        logging.error(f"Error checking status for {url}: {str(e)}")
        return {
            "website": url,
            "status": f"Error: {str(e)}",
            "start_time": start_time.strftime("%H:%M:%S"),
            "end_time": end_time.strftime("%H:%M:%S")
        }

async def main():
    urls = [
        "https://www.bing.com",
        "https://www.google.com",
        "https://www.apple.com",
        "https://www.bbc.com",
        "https://lol"
    ]

    print("Fetching results...")

    tasks = [check_status(url) for url in urls]
    running_tasks = [asyncio.create_task(task) for task in tasks]

    results = await asyncio.gather(*running_tasks, return_exceptions=True)

    for result in results:
        print(result)

if __name__ == "__main__":
    asyncio.run(main())
