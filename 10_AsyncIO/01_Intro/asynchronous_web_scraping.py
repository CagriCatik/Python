import aiohttp
import asyncio
from bs4 import BeautifulSoup

async def fetch_html(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def scrape_website(url):
    html = await fetch_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract data from the HTML using BeautifulSoup
    # (Note: Adjust this part based on the structure of the website)
    data = soup.find('div', class_='content').text
    
    print(f"Data from {url}: {data}")

async def main():
    websites = ["https://example1.com", "https://example2.com", "https://example3.com"]
    
    tasks = [scrape_website(url) for url in websites]
    await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())
