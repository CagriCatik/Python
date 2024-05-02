import asyncio
import aiofiles
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def read_file(file_name):
    try:
        async with aiofiles.open(file_name, 'r') as file:
            content = await file.read()
        return content
    except FileNotFoundError:
        logger.warning(f"File not found: {file_name}")
        return ""

async def write_file(file_name, content):
    async with aiofiles.open(file_name, 'w') as file:
        await file.write(content)

async def main():
    files = ["file1.txt", "file2.txt", "file3.txt"]

    # Create empty placeholder files if they don't exist
    for file in files:
        if not os.path.exists(file):
            open(file, 'w').close()

    logger.info("Reading files asynchronously.")
    read_tasks = [read_file(file) for file in files]
    content_list = await asyncio.gather(*read_tasks)

    logger.info("Writing files asynchronously.")
    write_tasks = [write_file(f"copy_{file}", content) for file, content in zip(files, content_list)]
    await asyncio.gather(*write_tasks)

    logger.info("Script execution completed.")

if __name__ == "__main__":
    asyncio.run(main())
