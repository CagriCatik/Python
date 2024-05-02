class Playlist:
    def __init__(self, songs):
        self.songs = songs
    
    def __getitem__(self, title):
        return [song for song in self.songs if song["title"] == title]

# Example usage:
songs = [
    {"title": "Shape of You", "artist": "Ed Sheeran"},
    {"title": "Blinding Lights", "artist": "The Weeknd"},
    {"title": "Dance Monkey", "artist": "Tones and I"}
]
playlist = Playlist(songs)

print(playlist["Blinding Lights"])  # Output: [{'title': 'Blinding Lights', 'artist': 'The Weeknd'}]
