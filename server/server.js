var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
   console.log('this is a test to see what is sent');
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then(result => {res.send(result)}).catch(error => {res.send(error)});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});







