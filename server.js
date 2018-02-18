const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fetch = require('node-fetch');

const menu = require('./lib/menu')()();


console.log(menu);
const tallyUpSingleOrder = require('./lib/tally');
app.use(bodyParser.json());
app.use('/static', express.static('static'));

app.set('view engine', 'hbs');

app.get("/menu", function (req,res){
  // note: if sending menu itself (rather than a deep copy) through handlebars, handlebars adds a _locals key to the object. To see, uncomment lines 19,20, 21, and comment line 22
  // console.log(menu);
  //res.render("main", menu);
  // console.log(menu);
  res.render("main", JSON.parse(JSON.stringify(menu)));
})

app.post("/tallyUp", (req,res) => {
  tallyUpSingleOrder(req.body, menu, function (out) {

    res.send("whatever");
  });
});

app.listen(8080, function(){ console.log("listening on port 8080"); });
