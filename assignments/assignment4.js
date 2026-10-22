console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log(""); // Blank line
console.log("-- First number > 10 divisible by 6 --");

let number = 11;

while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log("Found:", number);
        break;
    }
    number++;
}

console.log(""); // Blank line
console.log("-- Do While Example --");

let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log("Number:", count);

} while (count < 5);