# Financial calculation example
principal_amount = 100000.5678
interest_rate = 0.045
time_period_years = 5

# Calculate compound interest
compound_interest = principal_amount * (1 + interest_rate)**time_period_years - principal_amount

# Display the unrounded compound interest
print("Unrounded Compound Interest:", compound_interest)

# Round to three decimal places for financial precision
rounded_compound_interest = round(compound_interest, 3)

# Display the rounded compound interest
print("Rounded Compound Interest:", rounded_compound_interest)


# Scientific measurement example
measurement_result = 0.00004567891234
measurement_error = 0.000000012345

# Summing up the measurement result and error
total_measurement = measurement_result + measurement_error

# Display the unrounded total measurement
print("Unrounded Total Measurement:", total_measurement)

# Round to significant figures for scientific accuracy
rounded_total_measurement = round(total_measurement, 8)

# Display the rounded total measurement
print("Rounded Total Measurement:", rounded_total_measurement)


# Statistical analysis example
data_set = [2.345, 1.234, 3.456, 4.567, 2.789, 5.678]

# Calculate the mean of the data set
mean_value = sum(data_set) / len(data_set)

# Display the unrounded mean value
print("Unrounded Mean Value:", mean_value)

# Round to four decimal places for statistical precision
rounded_mean_value = round(mean_value, 4)

# Display the rounded mean value
print("Rounded Mean Value:", rounded_mean_value)
