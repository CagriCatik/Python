import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Read the `imdb_top_1000.csv` file with the specified columns
columns = ['Series_Title', 'IMDB_Rating', 'No_of_Votes', 'Gross', 'Released_Year', 'Genre']
df = pd.read_csv('./imdb_top_1000.csv', usecols=columns)

# Convert 'Gross' column to numeric, coerce errors to handle non-numeric values
df['Gross'] = pd.to_numeric(df['Gross'], errors='coerce')

def display_title(title, data):
    print(f"\n{title}:")
    print(data)

def display_titles(titles_and_data):
    for title, data in titles_and_data:
        display_title(title, data)

# Find the lowest scored movie with the lowest amount of votes
lowest_scored_movie = df.loc[df['IMDB_Rating'].idxmin()]

# Find the highest scored movie with the highest amount of votes
highest_scored_movie = df.loc[df.groupby('IMDB_Rating')['No_of_Votes'].idxmax()]

# Find the top 5 genres
top_genres = df['Genre'].value_counts().head(5)

# What are the top 3 grossing movies?
top_grossing_movies = df.nlargest(3, 'Gross', 'all')[['Series_Title', 'Gross']]

# Average rating per year
average_rating_per_year = df.groupby('Released_Year')['IMDB_Rating'].mean().sort_values(ascending=False)

# Average rating per genre and genre counts
average_rating_per_genre = df.groupby('Genre')['IMDB_Rating'].mean().sort_values(ascending=False)
genre_counts = df['Genre'].value_counts()

# Year with the most movies
most_movies_release_year = df['Released_Year'].value_counts().idxmax()

# Total number of votes for all movies
total_votes = df['No_of_Votes'].sum()

# Visualizations
plt.figure(figsize=(10, 6))
sns.histplot(df['IMDB_Rating'], bins=20, kde=True)
plt.title('IMDb Ratings Histogram')
plt.xlabel('IMDb Rating')
plt.ylabel('Number of Movies')

# Save the plot as a PNG file
plt.savefig('./imdb_ratings_histogram.png')

# Display the plot and results
display_titles([
    ("Lowest Scored Movie with Lowest Votes", lowest_scored_movie),
    ("Highest Scored Movie with Highest Votes", highest_scored_movie),
    ("Top 5 Genres", top_genres),
    ("Top 3 Grossing Movies", top_grossing_movies),
    ("Average Rating per Year", average_rating_per_year),
    ("Average Rating per Genre", average_rating_per_genre),
    ("Number of Movies per Genre", genre_counts),
    ("Year with the Most Released Movies", most_movies_release_year),
    ("Total Number of Votes for All Movies", total_votes)
])

with open('./results.txt', 'w') as file:

    print("Lowest Scored Movie with Lowest Votes:", file=file)
    print(lowest_scored_movie, file=file)

    print("\nHighest Scored Movie with Highest Votes:", file=file)
    print(highest_scored_movie, file=file)

    print("\nTop 5 Genres:", file=file)
    print(top_genres, file=file)

    print("\nTop 3 Grossing Movies:", file=file)
    print(top_grossing_movies, file=file)

    print("\nAverage Rating per Year:", file=file)
    print(average_rating_per_year, file=file)

    print("\nAverage Rating per Genre:", file=file)
    print(average_rating_per_genre, file=file)

    print("\nNumber of Movies per Genre:", file=file)
    print(genre_counts, file=file)

    print("\nYear with the Most Released Movies:", file=file)
    print(most_movies_release_year, file=file)

    print("\nTotal Number of Votes for All Movies:", file=file)
    print(total_votes, file=file)

plt.show()
