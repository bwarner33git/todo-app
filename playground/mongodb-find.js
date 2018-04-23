const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    db.collection('Todos').insert({text: 'Eat lunch', completed: false});

  //  db.close();
});