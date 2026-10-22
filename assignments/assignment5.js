// Assignment 5: Function Architecture and Scope

// 1. Standard function with default parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

console.log("Standard Function Area (Default 5x4): " + calculateArea());

// 2. Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

console.log("Arrow Function Area (Custom 10x3): " + calculateAreaArrow(10, 3));

// 3. Demonstrate block scope
{
    let blockVar = "I am inside the block";
}

// Attempt to access blockVar outside the block
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: " + error);
}