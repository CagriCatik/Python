import asyncio
import asyncpg

async def connect_to_database():
    connection = await asyncpg.connect(user='user', password='password', database='mydatabase', host='localhost')
    return connection

async def fetch_data_from_database(query, connection):
    result = await connection.fetch(query)
    return result

async def main():
    query1 = "SELECT * FROM table1;"
    query2 = "SELECT * FROM table2;"

    connection = await connect_to_database()

    tasks = [fetch_data_from_database(query, connection) for query in [query1, query2]]
    results = await asyncio.gather(*tasks)

    for query, result in zip([query1, query2], results):
        print(f"Results of query '{query}':\n{result}\n")

    await connection.close()

if __name__ == "__main__":
    asyncio.run(main())
