var express = require('express');
var router = express.Router();
// const { Client } = require('pg');

// async function connectToDB() {
//   const client = new Client();
//   await client.connect();
//   const res = await client.query('SELECT $1::text as message', ['Hello world!']);
//   console.log(res.rows[0].message) // Hello world!;
//   await client.end();
// }



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { entry: req.session.formdata });
});

router.post('/', function(req, res, next) {
  const input = req.body;
  req.session.formdata.push(input);
  res.render('index', { entry: req.session.formdata } );
});

module.exports = router;
