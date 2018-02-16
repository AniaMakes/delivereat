let placeOrderButton = document.getElementById("place-order");
placeOrderButton.addEventListener("click", moveToOrderPage);

let proceedToSummary = document.getElementById("proceedToSummary")

function moveToOrderPage(event){
  event.preventDefault();

  const quantityPicker = document.getElementsByClassName("quantity-picker");

  Array.from(quantityPicker).forEach(item => item.style.visibility = "visible");

  placeOrderButton.style.visibility = "hidden";
  proceedToSummary.style.visibility = "visible";
}

document.getElementById("orderForm").addEventListener("submit", tallyUp);

function tallyUp(event){
  event.preventDefault();
  let incomingSelection = Array.from(event.path[0]);

  let order = [];

  incomingSelection.forEach(function(selectOption){
    if (selectOption.value.split("-")[1] > 0){
      order.push(selectOption.value);
    }
  })

  console.log(order);
}
