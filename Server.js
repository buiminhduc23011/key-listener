const { GlobalKeyboardListener } = require("node-global-key-listener");

const listener = new GlobalKeyboardListener();

// Variable to hold the keys pressed
let typedString = '';

listener.addListener((event) => {
    // If the key is not "Enter", append it to the typedString
    console.log(event);
    if (event.rawKey.name !== 'RETURN') {
        typedString += event.rawKey.name;
    } else {
        // When "Enter" is pressed, print the typed string and reset it
        console.log(`Typed text: ${typedString}`);
        typedString = ''; // Reset the string after printing
    }
});

// Bắt đầu lắng nghe
console.log("Listening for keyboard events...");
