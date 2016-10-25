var express = require('express');
var router = express.Router();
var fortune_m = require('./../lib/fortune');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { fortune: fortune_m.getFortune() });
});

module.exports = router;