// Import prompt-sync module
const prompt = require('prompt-sync')({ sigint: true });

// Weather Clothing Adviser Program
function clothingAdviser(temperature, isRaining) {
    if (temperature < 0) {
        if (isRaining) {
            return "Wear a heavy coat, a waterproof jacket, and warm layers.";
        } else {
            return "Wear a heavy coat and warm layers.";
        }
    } else if (temperature >= 0 && temperature <= 10) {
        if (isRaining) {
            return "Wear a warm jacket and bring an umbrella.";
        } else {
            return "Wear a warm jacket.";
        }
    } else if (temperature >= 11 && temperature <= 20) {
        if (isRaining) {
            return "Wear a light jacket and bring an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "Wear light clothing and bring an umbrella.";
        } else {
            return "Wear light clothing.";
        }
    }
}

// Main program
const temperature = prompt("Enter the current temperature (in °C): ");
const isRaining = prompt("Is it raining? (yes/no): ").toLowerCase() === "yes";
const advice = clothingAdviser(parseInt(temperature), isRaining);
console.log(advice);
