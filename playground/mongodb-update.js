const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server. Error: ' + err);
    }
    console.log('connected to mongo db server');

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5adcf1f610640387e9c44a17')
        }, {
            $set: {
                name: 'John Chaney'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then(result => console.log(result));

});