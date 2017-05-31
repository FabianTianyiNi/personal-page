var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Fabian Tianyi NI', phone: '(469)-510-9278', email: 'tianyiskyni@gmail.com'});
});

module.exports = router;
