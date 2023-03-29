//all backend stuff
const PORT = 8000
//connect to the database
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://cass:hiphophip11@cluster0.seh5fcc.mongodb.net/?retryWrites=true&w=majority'
const express = require('express')
const app = express()

//
const client = new MongoClient(uri)
const database = client.db('app-data')



app.listen(PORT, () => console.log('server is runnong on PORT ' + PORT))

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


//requesting formdata
app.put('/user', async (req,res) => {
    const client = new MongoClient(uri)
    const formData = req.body.formData

    try{
        await client.connect()
        const database = client.db('app-data')
        const users = database.colllection('users')


        const query = {name: formData.name}
        const update ={$set:{
            name: formData.name,
            type: formData.type,
            genre: formData.genre,
            about: formData.about,
            url:formData.url,
            p_type:formData.p_type,
            p_genre:formData.p_genre,
            p_instrument:formData.p_instrument,
            matches: formData.matches

        }}

        const insert = await users.updateOne(query, update)
        res.send(insert)
    } finally{
        await client.close();
    }

})