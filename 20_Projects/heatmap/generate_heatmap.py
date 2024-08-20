# generate_heatmap.py

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import kde
from draw_pitch import draw_pitch

# Generate simulated data points
np.random.seed(42)  # for reproducibility
n_points = 500  # number of data points

# Randomly distribute points across the pitch dimensions
x_coords = np.random.uniform(0, 105, n_points)
y_coords = np.random.uniform(0, 68, n_points)

# Combine into an array of coordinates
data_points = np.vstack((x_coords, y_coords))

# Plot the data points on the pitch
fig, ax = draw_pitch()
ax.scatter(x_coords, y_coords, color='red', s=10, alpha=0.5)
plt.show()

# Perform Kernel Density Estimation (KDE) on the data
k = kde.gaussian_kde(data_points)

# Create grid over the pitch
x_grid, y_grid = np.mgrid[0:105:100j, 0:68:100j]
grid_coords = np.vstack([x_grid.ravel(), y_grid.ravel()])

# Evaluate KDE on grid
z = k(grid_coords)
z = z.reshape(x_grid.shape)

# Plot heatmap
fig, ax = draw_pitch()
ax.imshow(z.T, origin='lower', cmap='hot', extent=[0, 105, 0, 68], alpha=0.6)
plt.show()
