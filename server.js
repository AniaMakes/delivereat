const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use('/static', express.static('static'));

app.set('view engine', 'hbs');




app.get("/menu", function (req,res){
  let menuFetched = menuFetcher();
  res.render("main", menuFetched);
})



function menu(){
  const takeAwayMenu = {
    starters : [
        {name: "Satay chicken", price: 4.50, code: "ST01" },
        {name: "Spring rolls", price: 3.00, code: "ST02"},
        {name: "Garlic bread", price: 2.50, code: "ST03" },
        {name: "Olives", price: 3.00, code: "ST04" },
        {name: "Poppadum", price: 2.50, code: "ST05" },
      ],
    mains : [
        {name: "Chicken katsu curry with brown rice and veg", price: 10.00, code: "MA01"},
        {name: "Sweet and sour chicken with rice", price: 9.50, code: "MA02" },
        {name: "Paneer in almond sauce with brown rice and veg", price: 10.00, code: "MA03" },
        {name: "Mushroom & bell pepper curry with brown rice", price: 8.50, code: "MA04" },
        {name: "Big bowl of bigos with mashed potatos", price: 13.00, code: "MA05" }
      ],
    desserts: [
        {name: "Chocolate fudge cake slice", price: 5.00, code:"DE01" },
        {name: "Carrot cake slice", price: 4.50, code: "DE02" },
        {name: "Cheesecake slice", price: 5.00, code:"DE03" },
        {name: "Banana fritters", price: 4.00, code:"DE04"},
      ],
    drinks: [
      {name: "Coca cola", price: 3.00, code:"DR01"},
      {name: "Fanta", price: 3.00, code: "DR02" },
      {name: "Sprite", price: 3.00, code: "DR03"},
      {name: "Green tea", price: 2.50, code: "DR04"},
      {name: "Coffee", price: 3.50, code: "DR05"},
      ]
  };

  function provideMenu(){
    return takeAwayMenu;
  }

  return provideMenu;
}

let menuFetcher = menu();

app.post("/tallyUp", function(req,res){
  console.log(req.body);
})

app.listen(8080, function(){ console.log("listening on port 8080"); });
