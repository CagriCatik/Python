import aiohttp
import asyncio

async def fetch_data_from_api(api_url):
    async with aiohttp.ClientSession() as session:
        async with session.get(api_url) as response:
            return await response.json()

async def main():
    api_urls = ["https://api.example.com/endpoint1", "https://api.example.com/endpoint2", "https://api.example.com/endpoint3"]
    
    tasks = [fetch_data_from_api(url) for url in api_urls]
    responses = await asyncio.gather(*tasks)

    # Process responses
    for idx, data in enumerate(responses):
        print(f"Data from API {idx + 1}: {data}")

if __name__ == "__main__":
    asyncio.run(main())
