const express = require('express');
const router = express.Router();

const Text = require ('../Models/TextFileModels')


//create text file
router.post('/add-text',  async (req, res) => {
    try{
        let test = new Text(req.body);
       await test.save((err, text) => {
            if(err){
                return res.status(401).send(err)
            }

            return res.status(201).send(text);
        })
    }catch(err){
        console.log("Internal Sever Error ",err);
    }
})


// To get all textfile
router.get('/get-all', (req, res) => {
    try{
        Text.find((err, quotes) => {
            if(err){
                res.status(403).send("An error occured while getting text.");
            }

            res.status(200).send(quotes);
        })
    }catch(err){
        console.log("Internal Sever Error ",err);
    }
})



module.exports = router;