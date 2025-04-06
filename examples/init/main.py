# main.py

# Import the functions and package-level variable directly from the package.
from my_package import greet, farewell, __version__

def main():
    name = "Alice"
    print(greet(name))      # Expected output: "Hello, Alice!"
    print(farewell(name))   # Expected output: "Goodbye, Alice!"
    print(f"Package version: {__version__}")

if __name__ == "__main__":
    main()
