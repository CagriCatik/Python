from dataclasses import dataclass
from typing import List

@dataclass
class Song:
    title: str
    artist: str
    duration: int  # in seconds

@dataclass
class Playlist:
    name: str
    songs: List[Song]

# Creating instances
song1 = Song("Bohemian Rhapsody", "Queen", 367)
song2 = Song("Hotel California", "Eagles", 391)
playlist_rock_classics = Playlist("Rock Classics", [song1, song2])

# Accessing and printing information
print(f"Playlist: {playlist_rock_classics.name}")
for i, song in enumerate(playlist_rock_classics.songs, start=1):
    print(f"{i}. {song.title} by {song.artist} ({song.duration} seconds)")
