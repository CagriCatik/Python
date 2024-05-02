import json
import os

# Use os.path.realpath to obtain the absolute path to the JSON file
json_file_path = os.path.realpath('api.json')

# Load data from the JSON file
with open(json_file_path, 'r') as file:
    data = json.load(file)

# Extract comments
comments = data['comments']

# Calculate the total number of comments
total_comments = len(comments)

# Count the number of comments per user
comment_count_per_user = {}
for comment in comments:
    username = comment['user']['username']
    comment_count_per_user[username] = comment_count_per_user.get(username, 0) + 1

# Print the results
print(f"Total number of comments: {total_comments}")
print("----------------------------")
print("Number of comments per user:")
for username, count in comment_count_per_user.items():
    print(f"- {username}: {count}")
