import asyncio
from datetime import datetime

async def fetch_data(input_data, delay):
    await asyncio.sleep(delay)
    return {"input_data": input_data, "timestamp": str(datetime.now())}

async def process_data(data):
    # Simulate data processing
    await asyncio.sleep(2)
    return f"Processed data: {data}"

async def task_chaining():
    initial_task = asyncio.create_task(fetch_data(1, 3))
    processed_data_task = asyncio.create_task(process_data(await initial_task))

    # Wait for the results
    data = await asyncio.gather(initial_task, processed_data_task)

    print("Initial data:", data[0])
    print("Processed data:", data[1])

asyncio.run(task_chaining())
