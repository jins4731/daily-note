const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'index.html');
    //res.send('htmlFilepath');
    res.render('index');
});

router.get('/about', function(req, res) {
    //const htmlFilepath = path.join(__dirname, 'views', 'about.html');
    //res.sendFile(htmlFilepath);
    res.render('about');
});

module.exports = router;