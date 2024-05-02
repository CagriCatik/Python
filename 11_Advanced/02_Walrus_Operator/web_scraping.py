import requests
from bs4 import BeautifulSoup

# Specify the URL to scrape
url = 'https://example.com'

# Send an HTTP request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all the links from the page
    links = [link.get('href') for link in soup.find_all('a')]

    # Display the links
    print(links)
else:
    print(f"Failed to retrieve content. Status code: {response.status_code}")
