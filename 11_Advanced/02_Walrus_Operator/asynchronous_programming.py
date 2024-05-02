import asyncio

async def fetch_data(url):
    print(f"Fetching data from {url}")
    # Simulating an asynchronous task, e.g., fetching data from a web API
    await asyncio.sleep(2)
    print(f"Data fetched successfully from {url}")

async def main():
    # List of URLs to fetch data from
    urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3']

    # Create tasks for fetching data concurrently
    tasks = [fetch_data(url) for url in urls]

    # Run tasks concurrently
    await asyncio.gather(*tasks)

# Run the asynchronous program
asyncio.run(main())
