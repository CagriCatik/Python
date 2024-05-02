import asyncio

async def fetch_data(input_value, delay, fails=False):
    await asyncio.sleep(delay)
    if fails:
        raise Exception("Something went wrong!")
    return {"input": input_value, "result": f"Data for {input_value}"}

async def main():
    tasks = asyncio.gather(
        fetch_data(1, 1),
        fetch_data(2, 2),
        fetch_data(3, 2, fails=True),
        return_exceptions=True
    )
    
    results = await tasks
    print_results(results)

def print_results(results):
    for result in results:
        if isinstance(result, Exception):
            print(f"An exception occurred: {result}")
        else:
            print(result["result"])

asyncio.run(main())
