import asyncio

async def read_messages(reader):
    while True:
        data = await reader.read(100)
        if not data:
            break
        print(f"Received: {data.decode()}")

async def send_messages(writer):
    while True:
        message = input("Enter message: ")
        writer.write(message.encode())
        await writer.drain()

async def main():
    reader, writer = await asyncio.open_connection('127.0.0.1', 8888)

    await asyncio.gather(read_messages(reader), send_messages(writer))

if __name__ == "__main__":
    asyncio.run(main())
