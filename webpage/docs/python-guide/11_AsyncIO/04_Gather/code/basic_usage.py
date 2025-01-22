import asyncio

async def fetch_data(input_value, delay):
    await asyncio.sleep(delay)
    return {"input": input_value, "result": f"Data for {input_value}"}

async def main():
    tasks = asyncio.gather(
        fetch_data(1, 1),
        fetch_data(2, 2),
        fetch_data(3, 2)
    )
    
    results = await tasks
    print_results(results)

def print_results(results):
    for result in results:
        print(result["result"])

asyncio.run(main())
