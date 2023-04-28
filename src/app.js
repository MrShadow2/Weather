const express = require('express');
const path = require('path');
const hbs=require('hbs');
var app = express();
const templatePath=path.join(__dirname,'../template/views');
const partialPAth=path.join(__dirname,'../template/partials');
const port = process.env.PORT || 3000;
const staticPAth=path.join(__dirname,'../public');

app.set('view engine','hbs');
app.set('views' ,templatePath);
hbs.registerPartials(partialPAth);
app.use(express.static(staticPAth))

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port);