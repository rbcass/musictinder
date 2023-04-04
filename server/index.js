//all backend stuff
// const PORT = 8000
//WE DO NOT USE THIS FILE.



const PORT = process.env.PORT || 8000;
//connect to the database AND IMPORTS
const MongoClient = require('mongodb').MongoClient;


const bodyParser = require('body-parser');
const express = require('express')
const app = express()

//INITIALISING DATABASE
// const client = new MongoClient(uri)
const database = client.db('app-data')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//LISTENING! LISTENING!
// app.listen(PORT, () => console.log('server is runnong on PORT ' + PORT))

//JUST A FEW EXAMPLES
app.get('/', (req,res) =>{
    res.json("BACKEND!")
})

app.post('/signin', (req,res) =>{
    res.send("BACKEND!")
})


// app.get('/users', async (req,res) =>{
//     //test to see if dummy data loads
//     const hey = new MongoClient(uri);

//     try{
//         await hey.connect()
//         //mongo databse is called app-data
//        const database =  hey.db('app-data')
//        //type is users where all data is stores
//       const users = database.collection('users')

//       //asking database to send all users!
//       const userArray = await users.find().toArray()
//       res.send(userArray)

//     }finally{

//         await hey.close()
//     }

// })




//OK, ADDING DATA TO MONGO

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err);
  database = client.db('app-data')
  app.listen(PORT, () => {
    console.log('listening on ' + PORT);
  });
});


