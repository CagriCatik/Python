import requests
import tkinter as tk
from tkinter import messagebox
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Configuration
API_KEY = os.getenv("API_KEY")
BASE_URL = "https://returnyoutubedislikeapi.com/api/v1/videos"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

def get_dislike_count(video_id):
    try:
        # Make a GET request to the API
        response = requests.get(f"{BASE_URL}/{video_id}", headers=HEADERS)

        # Debug: Print the status code and the full response content
        print(f"HTTP Status Code: {response.status_code}")
        print("Response content:", response.content)

        # Check if the request was successful
        if response.status_code == 200:
            # Handle the case where the response is empty
            if not response.content:
                messagebox.showerror("Error", "Empty response from the API.")
                return
            
            data = response.json()
            dislikes = data.get("dislikes", "N/A")
            likes = data.get("likes", "N/A")
            view_count = data.get("viewCount", "N/A")
            like_ratio = data.get("likeRatio", "N/A")

            # Display the results in the GUI
            result_text = (
                f"Video ID: {video_id}\n"
                f"Dislikes: {dislikes}\n"
                f"Likes: {likes}\n"
                f"View Count: {view_count}\n"
                f"Like Ratio: {like_ratio:.2f}%"
            )
            result_label.config(text=result_text)
        else:
            # Handle errors when the response status is not 200
            if response.content:
                try:
                    error_message = response.json().get("message", "Unknown error")
                except ValueError:
                    error_message = "Failed to parse the error message."
            else:
                error_message = "Empty response received."

            messagebox.showerror("Error", f"Failed to retrieve data. HTTP Status Code: {response.status_code}\nError: {error_message}")
    
    except requests.exceptions.RequestException as e:
        # Handle exceptions that occur during the request
        messagebox.showerror("Error", f"An error occurred: {e}")



# Function triggered by the GUI button click
def on_submit():
    video_id = video_id_entry.get().strip()
    if video_id:
        get_dislike_count(video_id)
    else:
        messagebox.showwarning("Input Error", "Please enter a valid YouTube video ID.")

# Set up the main window
root = tk.Tk()
root.title("YouTube Dislike Viewer")

# Create and place the components in the window
tk.Label(root, text="Enter YouTube Video ID:").grid(row=0, column=0, padx=10, pady=10)
video_id_entry = tk.Entry(root, width=40)
video_id_entry.grid(row=0, column=1, padx=10, pady=10)

submit_button = tk.Button(root, text="Get Dislike Info", command=on_submit)
submit_button.grid(row=1, columnspan=2, pady=10)

result_label = tk.Label(root, text="", justify=tk.LEFT)
result_label.grid(row=2, columnspan=2, padx=10, pady=10)

# Start the Tkinter event loop
root.mainloop()
