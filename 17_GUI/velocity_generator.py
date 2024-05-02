import pyqtgraph as pg
from PyQt5.QtGui import QGuiApplication
from PyQt5.QtCore import QTimer
import time

class Vehicle:
    def __init__(self):
        # Create the Qt Application
        self.app = QGuiApplication([])

        # Create a Plot Widget
        self.win = pg.GraphicsLayoutWidget(show=True)
        self.win.setWindowTitle('Real-time Velocity Profile')
        self.p = self.win.addPlot(title='Real-time Velocity Profile')
        self.p.setLabel('left', 'Velocity', units='km/h')
        self.p.setLabel('bottom', 'Time')

        # Create a PlotDataItem for plotting
        self.curve = self.p.plot()

        # Initialize data lists
        self.t_data = []
        self.v_data = []

        # Initialize start time
        self.start_time = time.time()

        # Set up a timer to update the plot
        self.timer = QTimer()
        self.timer.timeout.connect(self.update)
        self.timer.start(100)  # Update every 100 ms

    def generate_velocity_profile(self, t):
        # Function to generate velocity profile
        if t < 5:
            velocity = 60
            print("Phase 1: It should be 60 km/h ->", velocity)
        elif t < 10:
            velocity = 60 + (t - 5) * (100 - 60) / 5
            print("Phase 2: It should be continuously increasing to 100 km/h ->", velocity)
        elif t < 15:
            velocity = 100 + (t - 10) * (140 - 100) / 5
            print("Phase 3: It should be continuously increasing to 140 km/h ->", velocity)
        elif t < 20:
            velocity = 140 - (t - 15) * (140 - 80) / 5
            print("Phase 4: It should be continuously decreasing to 80 km/h ->", velocity)
        else:
            velocity = 80
            print("Phase 5: It should be constant 80 km/h ->", velocity)
        return velocity

    def update(self):
        # Update function for real-time plotting
        # Get current time
        t = time.time()

        # Calculate duration
        duration = t - self.start_time

        # Generate velocity
        velocity = self.generate_velocity_profile(duration)
        self.v_data.append(velocity)
        self.t_data.append(duration)

        # Update plot data
        self.curve.setData(self.t_data, self.v_data)

        # Autoscale plot
        self.p.enableAutoRange()

    def get_current_velocity(self):
        # Function to get the current velocity
        if self.v_data:
            return self.v_data[-1]
        else:
            return None

if __name__ == "__main__":
    # Initialize the RealTimePlot object
    velocity = Vehicle()

    # Start the Qt event loop
    velocity.app.exec_()
