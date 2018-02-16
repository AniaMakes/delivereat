var placeOrderButton = document.getElementById("place-order");

placeOrderButton.addEventListener("click", moveToOrderPage);

function moveToOrderPage(event){
  event.preventDefault();

// create a drop down to start with, keep hidden by default, and reveal on button click

  const quantityPicker = document.getElementsByClassName("quantity-picker");

  Array.from(quantityPicker).forEach(item => item.style.visibility = "visible");

  placeOrderButton.style.visibility = "hidden";

}
