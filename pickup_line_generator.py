import random

# List of pickup lines
pickup_lines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Do you have a name, or can I call you mine?",
    "If you were a vegetable, you’d be a cute-cumber!",
    "Do you have a map? I keep getting lost in your eyes.",
    "If you were a song, you’d be my favorite tune.",
]

# Randomly choose a pickup line
def random_pickup_line():
    return random.choice(pickup_lines)

# Print a random pickup line
print("Here's a pickup line for you:")
print(random_pickup_line())