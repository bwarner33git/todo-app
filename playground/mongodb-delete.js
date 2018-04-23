const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server. Error: ' + err);
    }
    console.log('connected to mongo db server');

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => console.log(result));

});