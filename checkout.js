function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.querySelector("#cart-items");
  let cartTotal = document.querySelector("#cart-total");
  let total = 0;

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let row = document.createElement("tr");
    let name = document.createElement("td");
    let price = document.createElement("td");
    let quantity = document.createElement("td");
    let subtotalCell = document.createElement("td");

    name.textContent = item.name;
    price.textContent = `RM${item.price.toFixed(2)}`;
    quantity.textContent = item.quantity;
    subtotalCell.textContent = `RM${subtotal.toFixed(2)}`;

    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(subtotalCell);
    cartItems.appendChild(row);
  });

  cartTotal.textContent = `RM${total.toFixed(2)}`;
}

renderCart();

function goToCheckout() {
  window.location.href = "checkout.html";
}

function goBack() {
  history.back();
}

function Pay() {
  alert("You will receive your receipt in your email.");
}
