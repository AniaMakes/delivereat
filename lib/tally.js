function tallyUpSingleOrder(incomingOrder, menu){
  //incomingOrder is an array of strings in format code - dash - quantity
  // function outputs an object with two keys : order content & total sum to pay
  // order content, for each line has name of the item and quntity ordered

  let order = {
    orderContent:[],
    total: 0
  };

  let typeOfFood = Object.getOwnPropertyNames(menu);

  console.log(typeOfFood);

  incomingOrder.forEach(function(itemOrdered){
    const foodCode = itemOrdered.split("-")[0];
    const quantity = itemOrdered.split("-")[1];

    typeOfFood.forEach(function (typeOfFoodKey){
      let contentOfType = menu[typeOfFoodKey];

      contentOfType.forEach(function(menuItem){
        if (menuItem.code == foodCode){
          order.orderContent.push([menuItem.name, quantity]);
          order.total += menuItem.price * quantity;

          console.log("order total:", order.total, " quantity ", quantity, " item name ", menuItem.name );
        }
      });
    });
  });

  return order;

}

module.exports = tallyUpSingleOrder;
