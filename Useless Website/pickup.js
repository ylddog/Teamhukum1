// Random pickup lines array
const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a camera? Every time I look at you, I smile.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Are you a parking ticket? Because you've got 'Fine' written all over you.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Ariel? Because we mermaid for each other.",
    "Are you a parking ticket? Because you've got 'Fine' written all over you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a cat, you'd purr-fect.",
    "Are you a time traveler? Because I can't imagine my future without you.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "If you were words on a page, you'd be fine print.",
    "Are you a keyboard? Because you're just my type.",
    "Are you a 45-degree angle? Because you're acute-y.",
    "Do you have a name, or can I call you mine?",
    "If beauty were time, you'd be an eternity.",
    "Are you a star? Because your beauty lights up the night.",
    "Do you believe in fate? Because I think we were mint-choco-destined.",
    "Are you a bank loan? Because you have my interest!",
    "Do you have a sunroof? Because my love for you is through the roof.",
    "If you were a fruit, you'd be a fineapple.",
    "Are you a beaver? Because daaaaam.",
    "Do you have a sunburn, or are you always this hot?",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Are you a parking ticket? Because you've got 'Fine' written all over you.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "If you were words on a page, you'd be fine print.",
    "Are you a camera? Because every time I see you, I smile.",
    "If you were a cat, you'd purr-fect.",
    "Are you a time traveler? Because I can't imagine my future without you.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a time traveler? Because I can't imagine my future without you.",
    "Do you have a name, or can I call you mine?",
    "If beauty were time, you'd be an eternity.",
    "Are you a star? Because your beauty lights up the night.",
    "Do you believe in fate? Because I think we were mint-choco-destined.",
    "Are you a bank loan? Because you have my interest!",
    "Do you have a sunroof? Because my love for you is through the roof.",
    "If you were a fruit, you'd be a fineapple.",
    "Are you a beaver? Because daaaaam.",
    "Do you have a sunburn, or are you always this hot?",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Are you a parking ticket? Because you've got 'Fine' written all over you.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "If you were words on a page, you'd be fine print.",
    "Are you a camera? Because every time I see you, I smile.",
    "If you were a cat, you'd purr-fect.",
    "Are you a time traveler? Because I can't imagine my future without you.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a camera? Because every time I see you, I smile.",
    "Do you have a Band-Aid? Because I",
    // Add more pickup lines as needed
];

// Function to get a random pickup line
function getRandomPickupLine() {
    return pickupLines[Math.floor(Math.random() * pickupLines.length)];
}

// Function to update the pickup line content
function updatePickupLine() {
    document.getElementById("pickupLine").innerText = getRandomPickupLine();
}

// Function to be called when the "Generate" button is clicked
function generatePickupLine() {
    updatePickupLine();
}

// Initially generate a pickup line
updatePickupLine();