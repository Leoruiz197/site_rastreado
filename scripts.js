const products = [
    { name: "Produto 1", price: 10, image: "https://via.placeholder.com/150" },
    { name: "Produto 2", price: 20, image: "https://via.placeholder.com/150" },
    { name: "Produto 3", price: 30, image: "https://via.placeholder.com/150" },
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>R$ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
    `;
    productList.appendChild(productElement);
});

function addToCart(name, price) {
    alert(`${name} adicionado ao carrinho por R$ ${price.toFixed(2)}`);
}
