let cart = [];

fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");
    products.forEach(p => {
      container.innerHTML += `
        <div>
          <img src="${p.image}" width="150">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick='addToCart(${JSON.stringify(p)})'>Agregar</button>
        </div>
      `;
    });
  });

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(p => {
    cartList.innerHTML += `<li>${p.name} - $${p.price}</li>`;
  });
}

function checkout() {
  alert("Después conectamos MercadoPago 🚀");
}