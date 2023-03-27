//all backend stuff
const PORT = 8000
//connect to the database
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://cass:hiphophip11@cluster0.seh5fcc.mongodb.net/?retryWrites=true&w=majority'
const express = require('express')
const app = express()

app.listen(PORT, () => console.log('server is runnong on PORT ' + PORT))

app.get('/', (req,res) =>{
    res.json("BACKEND!")
})

app.post('/signin', (req,res) =>{
    res.json("BACKEND!")
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

