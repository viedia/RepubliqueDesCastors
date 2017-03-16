var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET finance page. */
router.get('/indexFinance', function (req, res) {
    res.render('indexFinance');
});

/* GET probleme page. */
router.get('/probleme', function (req, res) {
    res.render('probleme');
});


module.exports = router;
