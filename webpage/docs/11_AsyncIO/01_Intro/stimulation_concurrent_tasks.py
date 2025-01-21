import asyncio

async def task_one():
    print("Task One started")
    await asyncio.sleep(2)
    print("Task One completed")

async def task_two():
    print("Task Two started")
    await asyncio.sleep(1)
    print("Task Two completed")

async def main():
    # Simulate concurrent execution of two tasks
    await asyncio.gather(task_one(), task_two())

if __name__ == "__main__":
    asyncio.run(main())
