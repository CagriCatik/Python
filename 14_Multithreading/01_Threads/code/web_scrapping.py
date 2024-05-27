import threading
import requests
from bs4 import BeautifulSoup

def scrape_url(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Extract information from the webpage
    # For demonstration, let's print the title of the webpage
    print(f"Title of {url}: {soup.title.string}")

def main():
    urls = ["https://example.com/page1", "https://example.com/page2", "https://example.com/page3"]
    threads = []

    # Create and start threads for each URL
    for url in urls:
        thread = threading.Thread(target=scrape_url, args=(url,))
        threads.append(thread)
        thread.start()

    # Wait for all threads to finish
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    main()
