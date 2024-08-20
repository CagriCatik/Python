# draw_pitch.py

import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Arc

def draw_pitch():
    # Create figure
    fig, ax = plt.subplots(figsize=(10.5, 6.8))

    # Pitch Outline & Centre Line
    plt.plot([0, 0, 105, 105, 0], [0, 68, 68, 0, 0], color="black")
    plt.plot([52.5, 52.5], [0, 68], color="black")
    
    # Left Penalty Area
    plt.plot([16.5, 16.5, 0, 0, 16.5], [13.84, 54.16, 54.16, 13.84, 13.84], color="black")
    
    # Right Penalty Area
    plt.plot([105, 105, 88.5, 88.5, 105], [13.84, 54.16, 54.16, 13.84, 13.84], color="black")
    
    # Left 6-yard Box
    plt.plot([5.5, 5.5, 0, 0, 5.5], [24.84, 43.16, 43.16, 24.84, 24.84], color="black")
    
    # Right 6-yard Box
    plt.plot([105, 105, 99.5, 99.5, 105], [24.84, 43.16, 43.16, 24.84, 24.84], color="black")
    
    # Prepare Circles; Center Circle, Penalty Spots, and Kick-off Circle
    center_circle = Circle((52.5, 34), 9.15, color="black", fill=False)
    center_spot = Circle((52.5, 34), 0.8, color="black")
    left_pen_spot = Circle((11, 34), 0.8, color="black")
    right_pen_spot = Circle((94, 34), 0.8, color="black")
    
    # Draw Circles
    ax.add_patch(center_circle)
    ax.add_patch(center_spot)
    ax.add_patch(left_pen_spot)
    ax.add_patch(right_pen_spot)
    
    # Draw Arcs
    left_arc = Arc((11, 34), height=18.3, width=18.3, angle=0, theta1=308, theta2=52, color="black")
    right_arc = Arc((94, 34), height=18.3, width=18.3, angle=0, theta1=128, theta2=232, color="black")
    
    ax.add_patch(left_arc)
    ax.add_patch(right_arc)
    
    # Tidy Axes
    plt.xlim(-5, 110)
    plt.ylim(-5, 73)
    plt.axis('off')

    return fig, ax
