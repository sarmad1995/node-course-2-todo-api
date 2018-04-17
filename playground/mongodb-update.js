const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({ text: 'Do node' }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({ name: 'JoJo' }, {
    $set: {
      name: 'azaabudeen'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});
