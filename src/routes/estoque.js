var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('estoque.ejs', { title: 'Express' });
});

module.exports = router;
