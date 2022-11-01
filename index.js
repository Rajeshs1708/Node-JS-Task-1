require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { db } = require('./connection');
const app = express();

db();

// Importing the routes
const textRoutes = require('./Routes/TextFileRoute')

// Using the routes
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{res.status(200).send("Welcome to my Application !")})
app.use('/api',textRoutes)

// Port
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`You are in port ${PORT} Home`);
})
