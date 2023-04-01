const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const url = 'mongodb://localhost:27017/app-data';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log('Connected to MongoDB');
  const db = client.db('mydatabase');
  
  app.post('/submit-form', function(req, res) {
    const formData = req.body;
    db.collection('form-data').insertOne(formData, function(err, result) {
      if (err) throw err;
      console.log('Form data inserted into MongoDB');
      res.send('Form data submitted to MongoDB');
    });
  });
  
  app.listen(port, function() {
    console.log('Server is listening on port ' + port);
  });
});