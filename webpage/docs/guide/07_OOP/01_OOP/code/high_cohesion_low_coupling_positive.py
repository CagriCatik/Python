# Module A with high cohesion
class FileReader:
    def read_file(self, filename):
        # Read data from a file
        with open(filename, 'r') as file:
            data = file.read()
        return data

# Module B with high cohesion
class DataProcessor:
    def process_data(self, data):
        # Process the data (e.g., perform some calculations)
        processed_data = data.upper()
        return processed_data

# Main program with low coupling
def main():
    file_reader = FileReader()
    data_processor = DataProcessor()

    file_data = file_reader.read_file("sample.txt")
    processed_data = data_processor.process_data(file_data)

    print("Processed data:", processed_data)

    # Rest of the program

if __name__ == "__main__":
    main()
