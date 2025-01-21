import json
import os
import csv

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

def save_to_csv(data, csv_filename):
    with open(csv_filename, 'w', newline='') as csvfile:
        fieldnames = ['id', 'body', 'postId', 'userId', 'username']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        if isinstance(data, list):  # Check if data is a list
            for comment in data:
                user_info = comment.get('user', {})
                user_id = user_info.get('id', -1)  # Use -1 as default user ID
                username = user_info.get('username', 'Anonymous')  # Use 'Anonymous' as default username
                writer.writerow({
                    'id': comment['id'],
                    'body': comment['body'],
                    'postId': comment['postId'],
                    'userId': user_id,
                    'username': username
                })
        elif isinstance(data, dict):  # Check if data is a dictionary
            for comment in data.get('comments', []):
                user_info = comment.get('user', {})
                user_id = user_info.get('id', -1)  # Use -1 as default user ID
                username = user_info.get('username', 'Anonymous')  # Use 'Anonymous' as default username
                writer.writerow({
                    'id': comment['id'],
                    'body': comment['body'],
                    'postId': comment['postId'],
                    'userId': user_id,
                    'username': username
                })


if __name__ == '__main__':
    import requests

    api_url = 'https://jsonplaceholder.typicode.com/comments'
    cache_file = 'comments.json'

    data = fetch_data(url=api_url, json_cache=cache_file)
    
    if data:
        save_to_csv(data, 'comments.csv')
        print("Data saved to comments.csv")
