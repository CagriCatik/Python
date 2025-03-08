# OCP-compliant example: Using abstraction to support new sensors without modifying core logic
from abc import ABC, abstractmethod

class Sensor(ABC):
    @abstractmethod
    def get_data(self):
        """
        Retrieves sensor data.
        """
        pass

class CameraSensor(Sensor):
    def get_data(self):
        return "Camera data: road lanes detected"

class RadarSensor(Sensor):
    def get_data(self):
        return "Radar data: object distances measured"

class AutonomousDrivingSystem:
    def process_sensors(self, sensors):
        for sensor in sensors:
            data = sensor.get_data()  # No need to check sensor type
            print(f"Processing sensor input -> {data}")

# Usage of the OCP-compliant design:
sensors = [CameraSensor(), RadarSensor()]

# New sensor type added without modifying AutonomousDrivingSystem
class LidarSensor(Sensor):
    def get_data(self):
        return "LiDAR data: 3D point cloud"

sensors.append(LidarSensor())
ads = AutonomousDrivingSystem()
ads.process_sensors(sensors)