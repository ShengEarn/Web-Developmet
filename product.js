let quantity = document.getElementById("myNumber");

function incrementNumber() {
  quantity.value++;
}

function decrementNumber() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function addToCart(name, price, quantityId) {
  let item = {
    name: name,
    price: price,
    quantity: parseInt(document.getElementById(quantityId).value),
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

function goBack() {
  history.back();
}
