// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard

console.log("--- Initializing Inventory System ---");

// 1. Data and Input Initialization
const inventory = [
{ name: "Laptop", price: 800 },
{ name: "Mouse", price: 25 }
];

const productNameInput = prompt("Enter new product name:");
const productPriceInput = prompt("Enter product price:");

const productName = productNameInput ? productNameInput.trim() : "";
const productPrice = Number(productPriceInput);

if (
productName !== "" &&
productPriceInput !== null &&
productPriceInput.trim() !== "" &&
Number.isFinite(productPrice) &&
productPrice > 0
) {
inventory.push({
name: productName,
price: productPrice
});

console.log(
    '[Prompt executed: User adds "' +
    productName +
    '" at "$' +
    productPrice +
    '"]'
);

} else {
console.log("Invalid input. Product was not added.");
}

// 2. Control Flow and Category Evaluation
function getCategory(price) {
let category;

if (price < 50) {
    category = "Budget";
} else if (price < 200) {
    category = "Standard";
} else {
    category = "Premium";
}

switch (category) {
    case "Budget":
        return "Budget";
    case "Standard":
        return "Standard";
    case "Premium":
        return "Premium";
    default:
        return "Unknown";
}

}

// 3. Loops and Flow Control
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {
if (!product.name || product.price <= 0) {
return;
}

console.log(
    "* Item: " + product.name +
    " ($" + product.price +
    ") -> Category: " + getCategory(product.price)
);

});

// Demonstrate break and continue while searching inventory.
function findProduct(targetName) {
let foundProduct = null;

for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name || inventory[i].price <= 0) {
        continue;
    }

    if (inventory[i].name.toLowerCase() === targetName.toLowerCase()) {
        foundProduct = inventory[i];
        break;
    }
}

return foundProduct;

}

// 4. Functions, Parameters, and Local Scope
function calculateTotal(items) {
let total = 0;

for (let i = 0; i < items.length; i++) {
    if (items[i].price <= 0) {
        continue;
    }

    total += items[i].price;
}

return total;

}

const calculateAfterDiscount = (price, discount = 0) => {
return price - (price * discount / 100);
};

const calculateAfterTax = (price, taxRate = 0) => {
return price + (price * taxRate / 100);
};

// 5. Array Methods and Financial Analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log("Total Inventory Value: $" + totalValue);

const affordableItems = inventory
.filter(function(product) {
return product.price > 0 && product.price < 200;
})
.map(function(product) {
return product.name;
});

console.log(
"Filtered Affordable Items (Under $200): " +
JSON.stringify(affordableItems)
);

const formattedReport = inventory.map(function(product) {
return product.name.toUpperCase() + ": $" + product.price;
});

console.log(
"Formatted Report List: " + JSON.stringify(formattedReport)
);