function incrementNumber() {
  var inputField = document.getElementById("myNumber");
  if (parseInt(inputField.value) < parseInt(inputField.max)) {
    inputField.value = parseInt(inputField.value) + 1;
  }
}

function decrementNumber() {
  var inputField = document.getElementById("myNumber");
  if (parseInt(inputField.value) > parseInt(inputField.min)) {
    inputField.value = parseInt(inputField.value) - 1;
  }
}
