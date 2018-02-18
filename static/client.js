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

  //send order to the server

  postData("http://localhost:8080/tallyUp", order)
    .then(function (data){
      console.log("I received data: ", data);
    })
    .catch(error => console.error(error));

}


function postData(url, data) {
  // makes sure that data is in JSON format
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer', // *client
  })
  .then(response => response.json()
) // parses response to JSON
}
