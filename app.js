const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const items = require('./public/js/seed.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//ROUTES
app.get('/', (req, res) => {
    res.render("index", {items: items});
})

app.get('/product/:id', (req,res) => {
    res.send("Item number: " + req.params.id);
})

//SERVER LISTENING
app.listen(3000, () => {
    console.log("Server Started");
})