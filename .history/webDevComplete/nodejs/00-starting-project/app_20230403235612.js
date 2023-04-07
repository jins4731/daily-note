const fs = require('fs');
const path = require('path');
const express = require("express");

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'index.html');
    res.send('htmlFilepath');
});

app.get('/restaurants', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'restaurants.html');
    res.sendFile(htmlFilepath);
});

app.get('/recommend', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'recommend.html');
    res.sendFile(htmlFilepath);
});

app.post('/recommend', function(req, res){
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'confirm.html');
    res.sendFile(htmlFilepath);
});

app.get('/about', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'about.html');
    res.sendFile(htmlFilepath);
});



app.listen(3000);