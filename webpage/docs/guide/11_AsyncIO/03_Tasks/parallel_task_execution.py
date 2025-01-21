import asyncio
from datetime import datetime

async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def parallel_execution():
    tasks = [fetch_data(i, 2) for i in range(1, 6)]

    # Run tasks concurrently
    results = await asyncio.gather(*tasks)
    
    for idx, result in enumerate(results, start=1):
        print(f"Task {idx} result:", result)

asyncio.run(parallel_execution())
