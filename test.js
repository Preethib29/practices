const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (number % 2 === 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
    }

    rl.close();
});
