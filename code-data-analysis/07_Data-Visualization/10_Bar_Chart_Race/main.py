import pandas as pd
import bar_chart_race as bcr
import matplotlib as mpl
import warnings

# Suppress deprecation warnings
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", category=UserWarning)

# Set Matplotlib's animation writer to ffmpeg
mpl.rcParams['animation.writer'] = 'ffmpeg'

# Load the CSV file into a DataFrame
languages = pd.read_csv('languages.csv')

# Set the index column to the date and convert to datetime index
languages.index = pd.to_datetime(languages['Date'])
languages.index = languages.index.to_period('M')

# Remove the 'Date' column
languages = languages.drop(columns=['Date'])

# Create the bar chart race
bcr.bar_chart_race(df=languages, n_bars=10, steps_per_period=10, period_length=125, 
                    title='Most Popular Programming Languages', figsize=(6, 4), 
                    cmap=['forestgreen', 'skyblue'], filter_column_colors=True, 
                    bar_label_size=5, tick_label_size=30)

# Render the video
bcr.bar_chart_race(df=languages, filename='example.mp4', n_bars=20, steps_per_period=10, 
                    period_length=125, title='Most Popular Programming Languages', 
                    figsize=(6, 4), cmap=['forestgreen', 'skyblue'], filter_column_colors=True, 
                    bar_label_size=5, tick_label_size=30, dpi=300)
