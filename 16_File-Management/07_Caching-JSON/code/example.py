import json
import requests
import os


def fetch_data(*, update=False, json_cache='data.json', url):
    json_cache = os.path.realpath(json_cache)  # Get absolute path for cache file
    try:
        if update:
            json_data = None
        else:
            with open(json_cache, 'r') as file:
                json_data = json.load(file)
                print('Fetched data from the local cache.')

    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f'No local cache found: {e}')
        json_data = None

    if not json_data:
        print('Fetching new JSON data...')
        response = requests.get(url)
        json_data = response.json()

        with open(json_cache, 'w') as file:
            json.dump(json_data, file)
            print('Creating local cache.')

    return json_data


if __name__ == '__main__':
    api_url = 'https://jsonplaceholder.typicode.com/comments'
    cache_file = 'comments.json'

    data = fetch_data(url=api_url, json_cache=cache_file)

    print(data)
