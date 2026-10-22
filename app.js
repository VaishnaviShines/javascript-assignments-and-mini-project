const inventory = [
{ name: "Laptop", price: 800 },
{ name: "Mouse", price: 25 },
{ name: "Monitor", price: 150 }
];

const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const inventoryBody = document.getElementById("inventoryBody");
const productCount = document.getElementById("productCount");
const totalValue = document.getElementById("totalValue");
const affordableProducts = document.getElementById("affordableProducts");
const message = document.getElementById("message");

function getCategory(price) {
if (price < 50) {
return "Budget";
} else if (price < 200) {
return "Standard";
} else {
return "Premium";
}
}

function renderDashboard() {
inventoryBody.innerHTML = "";

inventory.forEach(function(product) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${getCategory(product.price)}</td>
    `;

    inventoryBody.appendChild(row);
});

const total = inventory.reduce(function(sum, product) {
    return sum + product.price;
}, 0);

productCount.textContent = inventory.length;
totalValue.textContent = "$" + total.toFixed(2);

const affordable = inventory
    .filter(function(product) {
        return product.price < 200;
    })
    .map(function(product) {
        return product.name;
    });

affordableProducts.textContent = affordable.length
    ? affordable.join(", ")
    : "No products under $200";

}

productForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = productNameInput.value.trim();
const price = Number(productPriceInput.value);

if (!name || !Number.isFinite(price) || price <= 0) {
    message.textContent = "Enter a valid product name and price.";
    return;
}

inventory.push({
    name: name,
    price: price
});

renderDashboard();

message.textContent = name + " added successfully!";

productForm.reset();

});

renderDashboard();