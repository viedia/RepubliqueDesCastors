var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET finance page. */
router.get('/finance', function(req, res) {
    res.render('indexFinance');
});


module.exports = router;
