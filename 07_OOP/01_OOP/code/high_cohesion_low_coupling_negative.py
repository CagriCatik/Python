# A module with low cohesion and high coupling
class DataHandler:
    def process_and_save_data(self, data, filename):
        # Process data and save it to a file
        processed_data = data.upper()
        self.save_to_file(processed_data, filename)

    def save_to_file(self, processed_data, filename):
        # Save processed data to a file
        with open(filename, 'w') as file:
            file.write(processed_data)

# Main program tightly coupled with internal details
def main():
    data_handler = DataHandler()

    # Main program has to handle both processing and saving to a file
    data = "Sample data"
    output_filename = "output.txt"
    data_handler.process_and_save_data(data, output_filename)

    # Rest of the program

if __name__ == "__main__":
    main()
