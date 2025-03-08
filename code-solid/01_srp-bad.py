class OBDSystem:
    """
    Represents an On-Board Diagnostics (OBD) system that handles both data collection and report generation.
    This design violates the Single Responsibility Principle.
    """
    def __init__(self):
        self.data = []
    
    def collect_data(self):
        # Simulate reading sensor data (e.g., speed, fuel level)
        self.data.append("Speed: 100 km/h")
        self.data.append("Fuel: 50%")
    
    def generate_report(self):
        # Generate a simple report from the collected data
        report_lines = []
        for entry in self.data:
            report_lines.append(f"Report Entry: {entry}")
        return "\n".join(report_lines)

# Usage of the bad design:
obd = OBDSystem()
obd.collect_data()
print(obd.generate_report())