const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad4c4dd354fcb19381242b2')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });
  db.collection('Users').find({ name: 'Sarmad' }).toArray().then((docs) => {
    console.log('Docs');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find', err);
  });
  //  client.close();
});
