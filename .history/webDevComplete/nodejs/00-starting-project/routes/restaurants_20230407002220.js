const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data');

const router = express.Router();

router.get('/restaurants', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'restaurants.html');
    //res.sendFile(htmlFilepath);
    let order = req.query.order;
    let nextOrder = "desc";

    if(order != 'asc' && order != 'desc') {
        order = 'asc';
    }

    if(order === 'desc') {
        nextOrder = 'asc';
    }
    const storedRestaurants = resData.getStoredRestaurant();

    storedRestaurants.sort(function(resA, resB) {
        if(order === 'asc' && resA.name > resB.name){
            return 1;
        }else if(order == 'desc' && resB.name > resA.name){
            return 1;
        }
        return -1;
    });

    res.render('restaurants', {
        numberOfRestaurants: storedRestaurants.length,
         restaurants: storedRestaurants,
         nextOrder: nextOrder
    });
});

router.get('/restaurants/:id', function(req, res){
    routerconsole.log(req.params);
    const restaurantId = req.params.id;

    const storedRestaurants = resData.getStoredRestaurant();

    for (const restaurant of storedRestaurants) {
        if(restaurant.id === restaurantId) {
            return res.render('restaurant-detail', {restaurant: restaurant});
        } 
    }
    
    res.status(404).render('404.ejs');
});

router.get('/recommend', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'recommend.html');
    //res.sendFile(htmlFilepath);
    res.render('recommend');
});

router.post('/recommend', function(req, res){
    const restaurant = req.body;
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoredRestaurant();

    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect('/confirm');
});

router.get('/confirm', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'confirm.html');
    //res.sendFile(htmlFilepath);
    res.render('confirm');
});

module.exports = router;