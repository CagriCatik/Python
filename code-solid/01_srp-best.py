class OBDDataCollector:
    """
    Responsible solely for collecting diagnostic data from vehicle sensors.
    Adheres to the Single Responsibility Principle by focusing only on data collection.
    """
    def __init__(self):
        self.data = []
    
    def collect_data(self):
        # Simulate reading sensor data
        self.data.clear()  # Clear previous data
        self.data.append("Speed: 100 km/h")
        self.data.append("Fuel: 50%")
        return self.data

class OBDReportGenerator:
    """
    Responsible solely for generating reports from diagnostic data.
    This class has one well-defined responsibility: report generation.
    """
    def generate_report(self, data):
        # Generate a formatted report based on the collected data
        report_lines = [f"Report Entry: {entry}" for entry in data]
        return "\n".join(report_lines)

# Usage of the SRP-compliant design:
collector = OBDDataCollector()
diagnostic_data = collector.collect_data()  # Only collects sensor data

reporter = OBDReportGenerator()
print(reporter.generate_report(diagnostic_data))  # Only generates report from data