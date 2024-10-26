import random
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk

# List of pickup lines
pickup_lines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Do you have a name, or can I call you mine?",
    "If you were a vegetable, you’d be a cute-cumber!",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you French? Because Eiffel for you.",
    "If you were a fruit, you’d be a fine-apple!",
]

# Function to get a random pickup line
def get_random_pickup_line():
    line = random.choice(pickup_lines)
    label.config(text=line)

# Set up the main application window
app = tk.Tk()
app.title("Aesthetic Pickup Line Generator")
app.geometry("500x400")

# Add a background image
bg_image = Image.open("background.jpg")  # Ensure this image exists in your directory
bg_image = bg_image.resize((500, 400), Image.ANTIALIAS)
bg_photo = ImageTk.PhotoImage(bg_image)

# Place the background
background_label = tk.Label(app, image=bg_photo)
background_label.place(x=0, y=0, relwidth=1, relheight=1)

# Style the Label to display the pickup line
style = ttk.Style()
style.configure("TLabel", font=("Helvetica", 14), foreground="#FFFFFF", background="#333333")
label = ttk.Label(app, text="Click below for a pickup line!", style="TLabel", wraplength=400, justify="center")
label.place(relx=0.5, rely=0.3, anchor="center")

# Style the Button
style.configure("TButton", font=("Helvetica", 12, "bold"), foreground="#000000", background="#FFFFFF")
button = ttk.Button(app, text="Get Pickup Line", style="TButton", command=get_random_pickup_line)
button.place(relx=0.5, rely=0.7, anchor="center")

# Run the app
app.mainloop()

