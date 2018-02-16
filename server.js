const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fetch = require('node-fetch');

app.use(bodyParser.json());
app.set('view engine', 'hbs');



app.get("/menu", function (req,res){
  let menuFetched = menuFetcher();
  res.render("main", menuFetched);
})



function menu(){
  const takeAwayMenu = {
    starters : [
        {name: "Satay chicken", price: 4.50 },
        {name: "Spring rolls", price: 3.00},
        {name: "Garlic bread", price: 2.50 },
        {name: "Olives", price: 3.00 },
        {name: "Poppadum", price: 2.50 },
      ],
    mains : [
        {name: "Chicken katsu curry with brown rice and veg", price: 10.00},
        {name: "Sweet and sour chicken with rice", price: 9.50 },
        {name: "Paneer in almond sauce with brown rice and veg", price: 10.00 },
        {name: "Mushroom & bell pepper curry with brown rice", price: 8.50 },
        {name: "Big bowl of bigos with mashed potatos", price: 13.00 }
      ],
    desserts: [
        {name: "Chocolate fudge cake slice", price: 5.00 },
        {name: "Carrot cake slice", price: 4.50 },
        {name: "Cheesecake slice", price: 5.00 },
        {name: "Banana fritters", price: 4.00},
      ],
    drinks: [
      {name: "Coca cola", price: 3.00},
      {name: "Fanta", price: 3.00 },
      {name: "Sprite", price: 3.00},
      {name: "Green tea", price: 2.50},
      {name: "Coffee", price: 3.50},
      ]
  };

  function provideMenu(){
    return takeAwayMenu;
  }

  return provideMenu;
}

let menuFetcher = menu();

app.listen(8080, function(){ console.log("listening on port 8080"); });
