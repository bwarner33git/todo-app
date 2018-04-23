const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    db.collection('Todos').find({_id: new ObjectID("5adcf0008fa09d87a4c87076")}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(err => {
        console.log('Unable to fetch todos', err);
    });

  //  db.close();
});