// Assignment 2: Operators, Expressions, and Input Handling

let bill = Number(prompt("Enter your bill amount:"));

let tipPercentage = Number(prompt("Enter tip percentage:"));

// Calculate the tip
let tip = bill * tipPercentage / 100;

// Calculate the total
let total = bill + tip;

// Display the results
console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);