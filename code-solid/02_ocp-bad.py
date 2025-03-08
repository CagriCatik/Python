class CameraSensor:
    def get_data(self):
        return "Camera data: road lanes detected"

class RadarSensor:
    def get_data(self):
        return "Radar data: object distances measured"

class AutonomousDrivingSystem:
    def process_sensors(self, sensors):
        for sensor in sensors:
            # Explicit type checking forces modification for each new sensor type
            if isinstance(sensor, CameraSensor):
                data = sensor.get_data()
                print(f"Processing camera input -> {data}")
            elif isinstance(sensor, RadarSensor):
                data = sensor.get_data()
                print(f"Processing radar input -> {data}")
            else:
                print("Unknown sensor type! Cannot process.")

# Usage of the bad design:
sensors = [CameraSensor(), RadarSensor()]
ads = AutonomousDrivingSystem()
ads.process_sensors(sensors)

# Adding a new LiDAR sensor would require modifying the process_sensors method:
class LidarSensor:
    def get_data(self):
        return "LiDAR data: 3D point cloud"

sensors.append(LidarSensor())
ads.process_sensors(sensors)  # LiDAR sensor is not handled by the current logic