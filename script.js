const productsSection = document.getElementById("products");

const products = [
    { name: "Product 1", price: 19.99 },
    { name: "Product 2", price: 29.99 },
    { name: "Product 3", price: 9.99 },
    // Add more products here
];

function displayProducts() {
    productsSection.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

displayProducts();
