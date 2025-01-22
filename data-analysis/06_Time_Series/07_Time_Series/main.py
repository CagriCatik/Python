import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from mplfinance.original_flavor import candlestick_ohlc
from matplotlib.dates import date2num

def read_csv_and_convert_date():
    # Read the CSV file
    apple_stocks = pd.read_csv('AAPL.csv')

    # Display info before converting date to datetime
    print("Info before conversion:")
    print(apple_stocks.info())

    # Convert 'date' column to datetime and set it as index
    apple_stocks['date'] = pd.to_datetime(apple_stocks['date'])
    apple_stocks.set_index('date', inplace=True)

    # Display info after setting index to datetime
    print("\nInfo after setting index to datetime:")
    print(apple_stocks.info())

    return apple_stocks

def read_csv_with_parse_dates():
    # Alternative method using parse_dates argument while reading CSV
    apple_stocks = pd.read_csv('AAPL.csv', parse_dates=['date'], index_col='date')

    # Display index names
    print("\nIndex names:")
    print(apple_stocks.index.names)

    return apple_stocks

def plot_closing_prices(apple_stocks):
    # Plot closing prices over time
    plt.figure(figsize=(12, 6))
    plt.plot(apple_stocks.index, apple_stocks['close'], color='blue', label='Closing Price')
    plt.title('Apple Stock Closing Prices Over Time')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.grid(True)
    plt.legend()
    plt.show()

def plot_volume(apple_stocks):
    # Plot volume over time
    plt.figure(figsize=(12, 6))
    plt.bar(apple_stocks.index, apple_stocks['volume'], color='orange', label='Volume')
    plt.title('Apple Stock Volume Over Time')
    plt.xlabel('Date')
    plt.ylabel('Volume')
    plt.grid(True)
    plt.legend()
    plt.show()

def calculate_and_plot_rolling_mean(apple_stocks):
    # Calculate rolling mean
    rolling_mean = apple_stocks['close'].rolling(window=20).mean()

    # Plot closing prices and rolling mean
    plt.figure(figsize=(12, 6))
    plt.plot(apple_stocks.index, apple_stocks['close'], color='blue', label='Closing Price')
    plt.plot(rolling_mean.index, rolling_mean, color='red', label='Rolling Mean (20 days)')
    plt.title('Apple Stock Closing Prices and Rolling Mean')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.grid(True)
    plt.legend()
    plt.show()

def plot_candlestick_chart(apple_stocks):
    # Resample data to weekly frequency
    weekly_apple_stocks = apple_stocks.resample('W').agg({'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last'})

    # Convert date to numerical format
    weekly_apple_stocks.reset_index(inplace=True)
    weekly_apple_stocks['date'] = weekly_apple_stocks['date'].apply(date2num)

    # Plot candlestick chart
    plt.figure(figsize=(12, 6))
    ax = plt.subplot()
    candlestick_ohlc(ax, weekly_apple_stocks[['date', 'open', 'high', 'low', 'close']].values, width=0.6, colorup='green', colordown='red')
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
    ax.set_title('Weekly Candlestick Chart for Apple Stock')
    ax.set_xlabel('Date')
    ax.set_ylabel('Price')
    plt.xticks(rotation=45)
    plt.grid(True)
    plt.show()

def main():
    apple_stocks = read_csv_and_convert_date()
    plot_closing_prices(apple_stocks)
    plot_volume(apple_stocks)
    calculate_and_plot_rolling_mean(apple_stocks)

    apple_stocks = read_csv_with_parse_dates()
    plot_candlestick_chart(apple_stocks)

if __name__ == "__main__":
    main()
