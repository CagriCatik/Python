class DateTime:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day
    
    def __format__(self, format_spec):
        if format_spec == "yyyy-mm-dd":
            return f"{self.year}-{self.month:02d}-{self.day:02d}"
        elif format_spec == "mm/dd/yyyy":
            return f"{self.month:02d}/{self.day:02d}/{self.year}"
        else:
            raise ValueError("Unsupported format specifier")

# Example usage:
date = DateTime(2024, 4, 7)
print(f"{date:yyyy-mm-dd}")  # Output: 2024-04-07
print(f"{date:mm/dd/yyyy}")  # Output: 04/07/2024
