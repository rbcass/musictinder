const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
// const apiRoutes = require('./routes/api');
//importing express
const app = express();
const PORT = 8000;
const uri = 'mongodb+srv://cass:hiphophip11@cluster0.seh5fcc.mongodb.net/?retryWrites=true&w=majority';

//STARTING AGAIN!!!!!!
//connecting to mongo


//  app.use('/api', apiRoutes);

app.use(cors());



//app listen just to check
app.listen(PORT, () => console.log('server is runnong on PORT ' + PORT))

//default test
app.get('/', (req,res) =>{
    res.json("BACKEND!")
})

//starting new mongo client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB cloud");
      
      // Access your MongoDB collections and perform CRUD operations here

    
    } catch(err) {
      // Close the MongoDB connection when your code is finished
      console.log(err.stack)
    }
  }

  run();

  //we are going to display user data here
  app.get('/results', async (req,res) => {

    try{
        const database = client.db('app-data');
        //collection users is where our data is stored
    const data = await database.collection('users').find().toArray();

    res.send(data);
    }catch(err){
        console.log(err.stack)
    }finally{
        await client.close
    }
    

  })

  

  //body parser doesn't exist anymore so we use express
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());


  //this is the POST funstion that deals with our data

// app.post('/submit-form',  (req, res) => {


//     const formData = req.body;

//     // res.json({message: 'Form submitted'})

//     console.log(formData);
//     // res.json(formData);

//     res.send(`
//     <h1>Form Submitted Successfully!</h1>
//     <p>Name: ${formData.name}</p>
//     <p>Type: ${formData.type}</p>
//     <p>Genre: ${formData.genre}</p>
//     <p>Instrument: ${formData.instrument}</p>
//     <p>URL: ${formData.url}</p>
//     <p>About: ${formData.about}</p>
//     <p>Preferred Type: ${formData.pref_type}</p>
//     <p>Preferred Genre: ${formData.pref_genre}</p>
//     <p>Preferred Instrument: ${formData.pref_instrument}</p>
//     <p>Matches: ${formData.matches}</p>
//   `);
  
// })

//  app.get('/submit-form', (req, res) => {

//     const formData = req.query; 

//   const html = `
//     <h1>Form Submitted Successfully!</h1>
//     <p>Name: ${formData.name}</p>
//     <p>Type: ${formData.type}</p>
//     <p>Genre: ${formData.genre}</p>
//     <p>Instrument: ${formData.instrument}</p>
//     <p>URL: ${formData.url}</p>
//     <p>About: ${formData.about}</p>
//     <p>Preferred Type: ${formData.pref_type}</p>
//     <p>Preferred Genre: ${formData.pref_genre}</p>
//     <p>Preferred Instrument: ${formData.pref_instrument}</p>
//     <p>Matches: ${formData.matches}</p>
//   `;

//   res.send(html);
    
//   });


//trying to save to database
const formDataSchema = new mongoose.Schema({
  name: String,
  type: String,
  genre: String,
  instrument: String,
  url: String,
  about: String,
  pref_type: String,
  pref_genre: String,
  pref_instrument: String,
  matches: Array
});
// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

//access our database and collection
const database = client.db('app-data');
const users = database.collection('users');

// Connect to MongoDB Atlas cluster
mongoose.connect('mongodb+srv://cass:hiphophip11@cluster0.seh5fcc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error(err));

//i converted to async function
app.post('/submit-form', async (req, res) => {
  const formData = new FormData(req.body);
  try {
    await users.insertOne(formData);
    res.status(200).send('Form data saved to database');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving form data to database');
  }
});


//send to front-end (this doesn't send to front-end?)
app.get('/form-data', async (req, res) => {
  try {
    const formDatas = await users.find().toArray();
    res.setHeader('Content-Type', 'application/json');

    res.status(200).send(JSON.stringify(formDatas, null, 2));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving form data from database');
  }
});

//get urls
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});
  
 

  run().catch(console.dir);


