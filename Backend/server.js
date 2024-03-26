const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://aayushpandey472:aayushpandey@cluster0.myetyta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to database')
    const db = client.db('blog website')
    const taskCollection = db.collection('blogs')

    //CRUD request
})
.catch(error=> console.error(error))