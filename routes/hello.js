var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('hello testing');
  // res.send("Hello World!");
});

module.exports = router;
