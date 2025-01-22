# Website Status Project

This project aims to create a simple website status checker in Python. The program allows users to input a URL and provides information about the status of the website, including its online status, response code, presence of links, encoding, and whether it's a redirect or a permanent redirect.

## Installation

Before running the project, ensure you have the necessary library installed. You can install it via pip:

```bash
pip install requests
```

## Usage

1. Open your terminal.
2. Clone this repository.
3. Navigate to the project directory.
4. Run the Python script using the command `python website_status.py`.
5. Enter the URL you want to check when prompted.

## Implementation Details

The project is implemented in Python and uses the `requests` library to simplify the process of retrieving information from the given URL.

### Functions

#### `get_response(url: str) -> Response`

This function takes a URL as input and returns a response object containing information about the website.

#### `show_response_info(response: Response)`

This function takes a response object as input and displays various information about the website, including status code, online status, links, encoding, redirects, and permanent redirects.

### Main Entry Point

The main entry point of the program retrieves a response from a specified website URL using the `get_response` function and then displays the response information using the `show_response_info` function.

## Example

Running the program with a valid URL will provide information such as the status code, online status, links, encoding, redirects, and permanent redirects. For invalid or non-existent URLs, appropriate error messages will be displayed.

## Live Template (Optional)

The project creator used a PyCharm live template to speed up workflow, which automatically generates the main entry point syntax. This is not essential for running the project but can be useful for enhancing productivity.

## Conclusion

This project demonstrates a simple yet effective way to check the status of a website using Python. It provides valuable insights into website health and can be further extended or customized as per specific requirements.
