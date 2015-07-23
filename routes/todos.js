var express = require('express');
var router = express.Router();
var fs = require('fs');

//var sampleToDoItems = JSON.parse(fs.readFileSync('todoTasks.json','utf8'));
var sampleToDoItems = require('../todoTasks.json');

/* GET Todo listing. */
//GET /Todos/
router.get('/', function(req, res) {
  //res.send('list all todo items in JSON');

  res.type('application/json');
  res.status(200);

  
  res.json(sampleToDoItems);
});



//add new todo items
//POST /Todos/ 
router.post('/', function(req, res) {
    
  var todoItem = {
    task : req.body.task, 
    complete : req.body.complete
  };

  sampleToDoItems.push(todoItem);

  res.type('application/json');
  res.status(200);  
  res.json(sampleToDoItems);
});




module.exports = router;
