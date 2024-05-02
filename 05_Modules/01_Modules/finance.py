# finance.py

def compound_interest(principal, rate, time):
    """Calculate compound interest."""
    return principal * (1 + rate) ** time

def present_value(future_value, rate, time):
    """Calculate present value."""
    return future_value / ((1 + rate) ** time)

def future_value(principal, rate, time):
    """Calculate future value."""
    return principal * (1 + rate) ** time
