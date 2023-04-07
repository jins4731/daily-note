const path = require('path');
const express = require("express");

const app = express();

app.use(express.static('public'));

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

app.get('/confirm', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'confirm.html');
    res.sendFile(htmlFilepath);
});

app.get('/about', function(req, res) {
    const htmlFilepath = path.join(__dirname, 'views', 'about.html');
    res.sendFile(htmlFilepath);
});

app.listen(3000);