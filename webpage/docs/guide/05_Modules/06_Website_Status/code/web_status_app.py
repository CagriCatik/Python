import requests
from requests.models import Response

class WebsiteStatusChecker:
    def __init__(self):
        self.website_url = ""

    def get_response(self, url: str) -> Response:
        """Send a GET request to the specified URL and return the response."""
        try:
            return requests.get(url)
        except requests.RequestException as e:
            raise RuntimeError(f"Failed to get response from {url}: {e}")

    def show_response_info(self, response: Response):
        """Display various information about the website response."""
        print("\nWebsite Status Information:")
        print("-" * 30)
        print(f"URL: {self.website_url}")
        print(f"Status Code: {response.status_code}")
        print(f"Online: {response.ok}")
        print(f"Links: {response.links}")
        print(f"Encoding: {response.encoding}")
        print(f"Is Redirect: {response.is_redirect}")
        print(f"Is Permanent Redirect: {response.is_permanent_redirect}")

    def check_website_status(self):
        """Check the status of a website."""
        self.website_url = input("Enter the URL to check: ").strip()

        try:
            # Get response from the URL
            response = self.get_response(self.website_url)
            
            # Show response information
            self.show_response_info(response)
        except RuntimeError as e:
            print("An error occurred:", e)

def main():
    checker = WebsiteStatusChecker()
    checker.check_website_status()

if __name__ == "__main__":
    main()
