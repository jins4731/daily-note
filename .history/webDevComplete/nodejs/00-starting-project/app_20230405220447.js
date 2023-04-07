const fs = require('fs');
const path = require('path');
const express = require("express");
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'index.html');
    //res.send('htmlFilepath');
    res.render('index');
});

app.get('/restaurants', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'restaurants.html');
    //res.sendFile(htmlFilepath);
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    res.render('restaurants', {numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants});
});

app.get('/restaurants/:id', function(req, res){
    console.log(req.params);
    const restaurantId = req.params.id;

    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    for (const restaurant of storedRestaurants) {
        if(restaurant.id === restaurantId) {
            return res.render('restaurant-detail', {restaurant: restaurant});
        } 
    }
    
    res.render('404.ejs');
});

app.get('/recommend', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'recommend.html');
    //res.sendFile(htmlFilepath);
    res.render('recommend');
});

app.post('/recommend', function(req, res){
    const restaurant = req.body;
    restaurant.id = uuid.v4();
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'confirm.html');
    //res.sendFile(htmlFilepath);
    res.render('confirm');
});

app.get('/about', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'about.html');
    //res.sendFile(htmlFilepath);
    res.render('about');
});



app.listen(3000);