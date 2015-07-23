var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET Todo listing. */
//GET /Todos/
router.get('/', function(req, res) {
  //res.send('list all todo items in JSON');

  res.type('application/json');
  res.status(200);

  var sampleToDoItems = JSON.parse(fs.readFileSync('todoTasks.json','utf8'));
  res.json(sampleToDoItems);
});



//POST /Todos/
router.get('/', function(req, res) {
  res.send('add a new todo items ');
});




module.exports = router;
