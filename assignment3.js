// Assignment 3: Conditional Statements

// 1. If-else statement
let score = 85;

if (score >= 90) {
    console.log("Score: " + score);
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Score: " + score);
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Score: " + score);
    console.log("Grade: C");
} else {
    console.log("Score: " + score);
    console.log("Grade: F");
}

// 2. Ternary operator
let resultStatus = score >= 40 ? "Passed" : "Failed";

console.log("Status: " + resultStatus);