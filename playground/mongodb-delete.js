const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');
  // delete many
  // db.collection('Todos').deleteMany({ text: 'Walk the dog' }).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Create react' }).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({ text: 'sarmad' }).then((result) => {
  //   console.log(result);
  // });
  // findOne and delete
  // client.close();
});
