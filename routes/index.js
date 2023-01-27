var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portada' });
});

/* GET Add-book page. */
router.get('/add-books', function(req, res, next) {
  res.render('add-books', { title: 'Añadir' });
});

module.exports = router;
