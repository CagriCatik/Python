# generate_player_heatmap.py

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import kde
from draw_pitch import draw_pitch

# Simulate player movement data (assuming 1 position per second for 90 minutes)
np.random.seed(42)  # for reproducibility
n_seconds = 90 * 60  # 90 minutes in seconds

# Generate random walk data for the player
x_coords = np.cumsum(np.random.uniform(-1, 1, n_seconds)) % 105  # random movement in x direction
y_coords = np.cumsum(np.random.uniform(-1, 1, n_seconds)) % 68   # random movement in y direction

# Ensure the player stays within the pitch bounds
x_coords = np.clip(x_coords, 0, 105)
y_coords = np.clip(y_coords, 0, 68)

# Combine into an array of coordinates
player_positions = np.vstack((x_coords, y_coords))

# Perform Kernel Density Estimation (KDE) on the data
k = kde.gaussian_kde(player_positions)

# Create grid over the pitch
x_grid, y_grid = np.mgrid[0:105:100j, 0:68:100j]
grid_coords = np.vstack([x_grid.ravel(), y_grid.ravel()])

# Evaluate KDE on grid
z = k(grid_coords)
z = z.reshape(x_grid.shape)

# Plot heatmap
fig, ax = draw_pitch()
ax.imshow(z.T, origin='lower', cmap='hot', extent=[0, 105, 0, 68], alpha=0.6)
plt.title('Player Movement Heatmap (90 minutes)')
plt.show()


