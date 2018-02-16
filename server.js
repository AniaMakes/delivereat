const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fetch = require('node-fetch');

app.use(bodyParser.json());
app.set('view engine', 'hbs');

//app.post('/hello', function (req, res){ res.send("Hello world"); });


app.get("/menu", function (req,res){
  res.render("main", req);
})

app.listen(8080, function(){ console.log("listening on port 8080"); });
