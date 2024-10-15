# water_level_simulation.py

import random
import time

# Constants for the tank dimensions (in cm)
MAX_HEIGHT = 100  # Maximum height of the tank in cm
WIDTH = 50        # Width of the tank in cm
DEPTH = 40        # Depth of the tank in cm

MIN_HEIGHT = 10   # Minimum water level in cm

current_level = MIN_HEIGHT

def simulate_dynamic_sensor_reading():
    """Simulate the ultrasonic sensor with dynamic water levels."""
    global current_level
    # Simulate the water level increasing or decreasing
    change = random.uniform(-1, 1)  # Randomly increase or decrease level
    current_level += change
    
    # Ensure the water level stays within the tank boundaries
    if current_level > MAX_HEIGHT:
        current_level = MAX_HEIGHT
    elif current_level < MIN_HEIGHT:
        current_level = MIN_HEIGHT

    return round(current_level, 2)

def calculate_volume_of_water(water_height, width, depth):
    """Calculate the volume of water based on the current water height."""
    volume = water_height * width * depth  # Volume in cubic centimeters (cm^3)
    volume_liters = volume / 1000  # Convert volume to liters (1 L = 1000 cm^3)
    return volume_liters

def measure_water_level_and_volume(max_height=MAX_HEIGHT, width=WIDTH, depth=DEPTH):
    distance = simulate_dynamic_sensor_reading()
    water_height = max_height - distance
    volume = calculate_volume_of_water(water_height, width, depth)
    return water_height, volume

if __name__ == "__main__":
    # Main loop for dynamic simulation with volume calculation
    try:
        while True:
            water_height, water_volume = measure_water_level_and_volume(MAX_HEIGHT, WIDTH, DEPTH)
            print(f"Simulated Water Level: {water_height} cm")
            print(f"Simulated Water Volume: {water_volume} liters")
            print("-" * 30)
            time.sleep(2)  # Delay before next measurement

    except KeyboardInterrupt:
        print("Dynamic Simulation with Volume Calculation stopped by user")
