# Example: Financial calculation using floats
initial_balance: float = 1000.0
interest_rate: float = 0.05  # 5% interest rate

# Calculate balance after one year
final_balance = initial_balance * (1 + interest_rate)

print(f"Initial Balance: ${initial_balance}")
print(f"Final Balance after one year: ${final_balance:.2f}")


# Example: Physics simulation using floats
initial_velocity: float = 10.0  # in m/s
acceleration: float = 2.5  # in m/s^2
time: float = 4.0  # in seconds

# Calculate final position using kinematic equation
final_position = initial_velocity * time + 0.5 * acceleration * time**2

print(f"Initial Velocity: {initial_velocity} m/s")
print(f"Acceleration: {acceleration} m/s^2")
print(f"Time: {time} seconds")
print(f"Final Position: {final_position} meters")


# Example: Data analysis using floats
temperature_readings: list[float] = [20.5, 22.0, 21.8, 23.2, 19.7]

# Calculate average temperature
average_temperature = sum(temperature_readings) / len(temperature_readings)

# Find the temperature deviation from the average
temperature_deviations = [temp - average_temperature for temp in temperature_readings]

print(f"Temperature Readings: {temperature_readings}")
print(f"Average Temperature: {average_temperature:.2f}")
print(f"Temperature Deviations: {temperature_deviations}")
