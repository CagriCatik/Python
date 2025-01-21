class URLGenerator:
    def __init__(self, base_url):
        self._base_url = base_url

    @property
    def base_url(self):
        return self._base_url

    @base_url.setter
    def base_url(self, value):
        self._base_url = value

    @property
    def api_endpoint(self):
        return f"{self.base_url}/api"

    @property
    def secure_url(self):
        return f"https://{self.base_url}"

    @property
    def dynamic_url(self):
        return f"{self.base_url}/dynamic"

# Example usage:
if __name__ == "__main__":
    url_gen = URLGenerator("example.com")
    print(f"API Endpoint: {url_gen.api_endpoint}")
    print(f"Secure URL: {url_gen.secure_url}")
    print(f"Dynamic URL: {url_gen.dynamic_url}")

    # Update the base URL, and all dependent properties are recalculated
    url_gen.base_url = "newexample.com"
    print(f"Updated API Endpoint: {url_gen.api_endpoint}")
    print(f"Updated Secure URL: {url_gen.secure_url}")
    print(f"Updated Dynamic URL: {url_gen.dynamic_url}")
