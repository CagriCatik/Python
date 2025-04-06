import sys
import random
from typing import Protocol, List

from PySide6.QtCore import QTimer, Qt
from PySide6.QtWidgets import (
    QApplication,
    QMainWindow,
    QWidget,
    QVBoxLayout,
    QHBoxLayout,
    QLabel,
    QPushButton,
    QFrame,
)


# 1. Define a common Sensor protocol for loose coupling.
class Sensor(Protocol):
    sensor_id: str

    def get_reading(self) -> float:
        """Return the sensor reading as a float."""
        ...


# 2. Implement individual sensor classes with high cohesion.
class SpeedSensor:
    def __init__(self, sensor_id: str):
        self.sensor_id = sensor_id

    def get_reading(self) -> float:
        # Simulate speed in km/h with random fluctuation.
        return 80.0 + random.uniform(-15, 20)


class FuelSensor:
    def __init__(self, sensor_id: str):
        self.sensor_id = sensor_id

    def get_reading(self) -> float:
        # Simulate fuel level as a percentage with random fluctuation.
        return 50.0 + random.uniform(-10, 10)


class TemperatureSensor:
    def __init__(self, sensor_id: str):
        self.sensor_id = sensor_id

    def get_reading(self) -> float:
        # Simulate engine temperature in Celsius with random fluctuation.
        return 90.0 + random.uniform(-5, 15)


# 3. Create a Dashboard class that aggregates sensor data.
class Dashboard:
    def __init__(self, sensors: List[Sensor]):
        self.sensors = sensors

    def get_sensor_data(self) -> List[str]:
        data = []
        for sensor in self.sensors:
            reading = sensor.get_reading()
            sensor_id = sensor.sensor_id
            message = f"{sensor_id}: {reading:.2f}"
            # Evaluate reading and add warning if necessary.
            if isinstance(sensor, SpeedSensor) and reading > 100:
                message += " (High speed!)"
            elif isinstance(sensor, FuelSensor) and reading < 30:
                message += " (Low fuel!)"
            elif isinstance(sensor, TemperatureSensor) and reading > 100:
                message += " (High temp!)"
            data.append(message)
        return data


# 4. Build the fancy PySide6 GUI.
class MainWindow(QMainWindow):
    def __init__(self, dashboard: Dashboard):
        super().__init__()
        self.dashboard = dashboard
        self.setWindowTitle("Automotive Dashboard")
        self.resize(600, 400)
        self.setStyleSheet("""
            QMainWindow {
                background-color: qlineargradient(
                    spread:pad, x1:0, y1:0, x2:1, y2:1, 
                    stop:0 #2c3e50, stop:1 #3498db
                );
            }
            QLabel {
                color: white;
                font-size: 18px;
                font-weight: bold;
                padding: 10px;
            }
            QPushButton {
                background-color: #e67e22;
                border: none;
                color: white;
                padding: 10px;
                font-size: 16px;
                border-radius: 5px;
            }
            QPushButton:hover {
                background-color: #d35400;
            }
            QFrame {
                background-color: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                margin: 10px;
            }
        """)

        # Central widget and main layout.
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.main_layout = QVBoxLayout()
        self.central_widget.setLayout(self.main_layout)

        # Create a frame to contain sensor labels.
        self.sensor_frame = QFrame()
        self.sensor_layout = QVBoxLayout()
        self.sensor_frame.setLayout(self.sensor_layout)
        self.main_layout.addWidget(self.sensor_frame)

        # Create a QLabel for each sensor reading.
        self.labels = []
        for sensor in self.dashboard.sensors:
            label = QLabel(f"{sensor.sensor_id}: ---")
            label.setAlignment(Qt.AlignCenter)
            self.sensor_layout.addWidget(label)
            self.labels.append(label)

        # Horizontal layout for the refresh button.
        self.button_layout = QHBoxLayout()
        self.main_layout.addLayout(self.button_layout)

        # Add a refresh button.
        self.refresh_button = QPushButton("Refresh Readings")
        self.refresh_button.clicked.connect(self.update_readings)
        self.button_layout.addStretch()
        self.button_layout.addWidget(self.refresh_button)
        self.button_layout.addStretch()

        # Set up a timer to auto-refresh every 3 seconds.
        self.timer = QTimer()
        self.timer.timeout.connect(self.update_readings)
        self.timer.start(10)

        # Initial update.
        self.update_readings()

    def update_readings(self):
        sensor_data = self.dashboard.get_sensor_data()
        for label, data in zip(self.labels, sensor_data):
            label.setText(data)


# 5. Main entry point.
if __name__ == "__main__":
    app = QApplication(sys.argv)

    # Instantiate individual sensor objects.
    speed_sensor = SpeedSensor("Speed Sensor")
    fuel_sensor = FuelSensor("Fuel Sensor")
    temp_sensor = TemperatureSensor("Temp Sensor")

    # Group sensors and create the dashboard.
    sensors = [speed_sensor, fuel_sensor, temp_sensor]
    dashboard = Dashboard(sensors)

    # Create and show the main window.
    main_window = MainWindow(dashboard)
    main_window.show()

    sys.exit(app.exec())
