const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB');
   const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: 'false'
  // }, (er, result) => {
  //   if (er) {
  //     return console.log('Unable to add');
  //   }
  //   return console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Sarmad',
  //   age: 23,
  //   location: 'bagimehtab'
  // }, (er, result) => {
  //   if (er) {
  //     return console.log('Unable to add');
  //   }
  //   return console.log(result.ops[0]._id.getTimestamp());
  // });
  // client.close();
});
