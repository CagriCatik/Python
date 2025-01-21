import pandas as pd
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def create_date_dataframe(dates):
    """Create a DataFrame with given dates."""
    try:
        # Find the time between each one of these dates
        time_between_dates = dates.to_series().diff().dropna()

        # Create a DataFrame with the dates as the index
        df = pd.DataFrame(index=dates)

        # Add columns for day name, month name, and year
        df['Day'] = df.index.day_name()
        df['Month'] = df.index.month_name()
        df['Year'] = df.index.year

        # Fill in gaps with every missing date
        df = df.resample('D').ffill()

        # Convert DatetimeIndex to PeriodIndex
        df.index = df.index.to_period('D')

        logging.info("DataFrame successfully created.")
        return df

    except Exception as e:
        logging.error(f"An error occurred: {e}")

def main():
    try:
        # Create a DatetimeIndex with 3 different timestamps
        dates = pd.to_datetime(['2024-03-24', '2024-03-25', '2024-03-27'])

        # Create DataFrame
        df = create_date_dataframe(dates)
        print(df)

    except Exception as e:
        logging.error(f"An error occurred in the main function: {e}")

if __name__ == "__main__":
    main()
