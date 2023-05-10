let quantity = document.getElementById("myNumber");

function incrementNumber() {
  quantity.value++;
}

function decrementNumber() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function addToCart() {
  let item = {
    name: "MAXX FITNESS FID BENCH W/ARM PAD & LEG DEVELOPER",
    price: 495.0,
    quantity: parseInt(quantity.value),
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}
