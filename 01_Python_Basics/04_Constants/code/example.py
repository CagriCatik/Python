import math

# Constants for a mathematical formula
GRAVITY = 9.8  # Acceleration due to gravity (m/s^2)
TIME = 5       # Time duration (seconds)

# Calculate the distance using the formula: distance = 0.5 * gravity * time^2
distance = 0.5 * GRAVITY * TIME**2

# Display the calculated distance
print(f"The object traveled a distance of {distance} meters in {TIME} seconds.")


# Configuration constants for a simulation
SIMULATION_SPEED = 0.05    # Speed of the simulation
MAX_ITERATIONS = 100       # Maximum number of simulation iterations
INITIAL_TEMPERATURE = 300  # Initial temperature in Kelvin

# Simulation loop
for iteration in range(MAX_ITERATIONS):
    # Perform simulation calculations
    temperature = INITIAL_TEMPERATURE - (iteration * SIMULATION_SPEED)

    # Display current iteration and temperature
    print(f"Iteration {iteration + 1}: Temperature = {temperature} K")

# Note: The simulation does not modify constants; it uses them for calculations.


# Physical constants
SPEED_OF_LIGHT = 3.0e8      # Speed of light in meters per second
PLANCK_CONSTANT = 6.63e-34  # Planck constant in Joule-seconds

# Calculate the energy of a photon using the formula: E = h * f
frequency = 5.0e14  # Frequency in Hertz
energy = PLANCK_CONSTANT * frequency

# Display the calculated energy
print(f"The energy of a photon with frequency {frequency} Hz is {energy} Joules.")
