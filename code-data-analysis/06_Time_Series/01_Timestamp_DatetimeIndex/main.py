import pandas as pd

def display_timestamp(input_text):
    """
    Display the timestamp for the given input text.
    """
    timestamp = pd.Timestamp(input_text)
    print(timestamp)

def display_result(input_text):
    """
    Display the result of converting input text to datetime.
    """
    datetime_result = pd.to_datetime(input_text, errors='coerce', format='%Y-%m-%d')
    print(datetime_result)

# Creating a timestamp using various formats
timestamp1 = pd.Timestamp('2021-12-01')
print("Timestamp 1:", timestamp1)

# Demonstrating different formats for creating timestamps
def display_timestamp_formats():
    formats = ['12-01-2021', '12.01.2021', '12/01/2021', 'December 01, 2021']
    for fmt in formats:
        display_timestamp(fmt)

print("Timestamps with different formats:")
display_timestamp_formats()

# Creating timestamp from nanoseconds since epoch
timestamp2 = pd.Timestamp(1610995200000000000)  # Nanoseconds since midnight of 1970-01-01
print("Timestamp 2:", timestamp2)

# Creating timestamp by passing individual components
timestamp3 = pd.Timestamp(year=2024, month=3, day=19, hour=10, minute=30, second=15)
print("Timestamp 3:", timestamp3)

# Converting to datetime
datetime1 = pd.to_datetime('2021-12-01', format='%Y-%m-%d')
print("Datetime 1:", datetime1)

# Handling errors during conversion
datetime2 = pd.to_datetime(['2021-12-01', '99-99-9999'], errors='coerce', format='%Y-%m-%d')
print("Datetime 2 (with errors):")
print(datetime2)

# Handling non-existent dates
datetime3 = pd.to_datetime(['2024-02-30', '2024-99-01'], errors='coerce', format='%Y-%m-%d')
print("Datetime 3 (handling non-existent dates):")
print(datetime3)
