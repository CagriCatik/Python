import pandas as pd
import logging
import matplotlib.pyplot as plt

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

 

def create_dates():
    """Create a datetime index with three different timestamps."""
    try:
        dates = pd.to_datetime(['2013-01-01', '2016-01-01', '2017-01-01'])
        logging.info("Datetime index created successfully.")
        return dates
    except Exception as e:
        logging.error(f"Error creating datetime index: {e}")

def find_time_between_dates(dates):
    """Find the time between each one of the dates."""
    try:
        time_between_dates = dates.to_series().diff().dropna()
        logging.info("Time between dates calculated successfully.")
        return time_between_dates
    except Exception as e:
        logging.error(f"Error finding time between dates: {e}")

def create_dataframe_with_date_info(dates):
    """Create a DataFrame with dates as index and add columns for day name, month name, and year."""
    try:
        df = pd.DataFrame(index=dates)
        df['Day'] = df.index.day_name()
        df['Month'] = df.index.month_name()
        df['Year'] = df.index.year
        logging.info("DataFrame created with date information successfully.")
        return df
    except Exception as e:
        logging.error(f"Error creating DataFrame with date information: {e}")

def fill_missing_dates(df):
    """Fill in the gaps of the DataFrame with every missing date and ensure no missing values."""
    try:
        start_date = df.index.min()
        end_date = df.index.max()
        new_dates = pd.date_range(start=start_date, end=end_date, freq='D')
        df = df.reindex(new_dates)
        df['Day'] = df.index.day_name()
        df['Month'] = df.index.month_name()
        df['Year'] = df.index.year
        logging.info("Missing dates filled successfully.")
        return df
    except Exception as e:
        logging.error(f"Error filling missing dates: {e}")

def convert_to_period_index(df):
    """Convert the DateTimeIndex to a PeriodIndex representing a whole day per date."""
    try:
        df.index = df.index.to_period('D')
        logging.info("DateTimeIndex converted to PeriodIndex successfully.")
    except Exception as e:
        logging.error(f"Error converting DateTimeIndex to PeriodIndex: {e}")
 

def main():
    try:
 

        # Step 2: Create datetime index with three different timestamps
        dates = create_dates()

        # Step 3: Find time between each date
        time_between_dates = find_time_between_dates(dates)

        # Step 4: Create DataFrame with date information
        df = create_dataframe_with_date_info(dates)

        # Step 5: Fill in missing dates
        df = fill_missing_dates(df)

        # Step 6: Convert to PeriodIndex
        convert_to_period_index(df)

        print(df)
    except Exception as e:
        logging.error(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
