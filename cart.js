let cart = [];

fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(p => {
      container.innerHTML += `
        <div class="bg-white p-4 shadow hover:scale-105 transition">
          <img src="${p.image}" class="w-full h-48 object-cover">
          <h3 class="font-bold mt-2">${p.name}</h3>
          <p>$${p.price}</p>
          <button class="bg-black text-white w-full mt-2 p-2"
            onclick='addToCart(${JSON.stringify(p)})'>
            Agregar
          </button>
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
  alert("Después conectamos MercadoPago 🔥");
}