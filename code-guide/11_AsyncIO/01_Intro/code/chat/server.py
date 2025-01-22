import asyncio

clients = []

async def handle_client(reader, writer):
    addr = writer.get_extra_info('peername')
    clients.append(writer)
    print(f"New client: {addr}")

    while True:
        data = await reader.read(100)
        if not data:
            print(f"Client {addr} disconnected")
            clients.remove(writer)
            writer.close()
            await writer.wait_closed()
            break
        
        message = data.decode()
        print(f"Received {message} from {addr}")
        
        for client in clients:
            if client != writer:
                client.write(data)
                await client.drain()

async def main():
    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)
    async with server:
        await server.serve_forever()

if __name__ == "__main__":
    asyncio.run(main())
