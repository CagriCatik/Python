# water_level_gui.py

import tkinter as tk
from water_level_simulation import measure_water_level_and_volume, MAX_HEIGHT, WIDTH, DEPTH

class WaterLevelGUI:
    def __init__(self, master):
        self.master = master
        master.title("Water Level Monitoring System")

        self.label = tk.Label(master, text="Water Level Monitoring", font=("Arial", 16))
        self.label.pack(pady=10)

        self.water_level_label = tk.Label(master, text="Water Level: 0 cm", font=("Arial", 14))
        self.water_level_label.pack(pady=5)

        self.water_volume_label = tk.Label(master, text="Water Volume: 0 liters", font=("Arial", 14))
        self.water_volume_label.pack(pady=5)

        self.update_button = tk.Button(master, text="Update", command=self.update_measurement)
        self.update_button.pack(pady=10)

        self.quit_button = tk.Button(master, text="Quit", command=master.quit)
        self.quit_button.pack(pady=10)

        self.update_measurement()

    def update_measurement(self):
        # Measure water level and volume
        water_height, water_volume = measure_water_level_and_volume(MAX_HEIGHT, WIDTH, DEPTH)
        
        # Update labels
        self.water_level_label.config(text=f"Water Level: {water_height} cm")
        self.water_volume_label.config(text=f"Water Volume: {water_volume} liters")
        
        # Automatically update every 2 seconds
        self.master.after(2000, self.update_measurement)

def main():
    root = tk.Tk()
    gui = WaterLevelGUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()
