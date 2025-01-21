import asyncio
from datetime import datetime

async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def dynamic_task_generation():
    tasks = []

    for i in range(1, 6):
        delay = i * 2
        tasks.append(asyncio.create_task(fetch_data(i, delay)))

    # Run tasks concurrently
    results = await asyncio.gather(*tasks)

    for idx, result in enumerate(results, start=1):
        print(f"Task {idx} result:", result)

asyncio.run(dynamic_task_generation())
