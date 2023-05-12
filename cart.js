function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemIndex = cart.findIndex((item) => item.name === name);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

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
    let removeButtonCell = document.createElement("td");
    let removeButton = document.createElement("button");

    name.textContent = item.name;
    price.textContent = `RM${item.price.toFixed(2)}`;
    quantity.textContent = item.quantity;
    subtotalCell.textContent = `RM${subtotal.toFixed(2)}`;
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(item.name));

    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(subtotalCell);
    removeButtonCell.appendChild(removeButton);
    row.appendChild(removeButtonCell);
    cartItems.appendChild(row);
  });

  cartTotal.textContent = `RM${total.toFixed(2)}`;
}

renderCart();

function goToCheckout() {
  window.location.href = "checkout.html";
}