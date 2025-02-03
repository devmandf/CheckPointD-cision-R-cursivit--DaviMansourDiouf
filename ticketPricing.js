// Import prompt-sync module
const prompt = require('prompt-sync')({ sigint: true });

// Ticket Pricing Program
function determineTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Main program
const age = prompt("Enter your age: ");
const price = determineTicketPrice(parseInt(age));
console.log(`The price of the movie ticket is $${price}.`);
