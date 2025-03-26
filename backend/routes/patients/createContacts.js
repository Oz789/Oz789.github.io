
const express = require('express');
const router = express.Router();
const db = require('../../db');


router.post('/', (req, res) => {

    const { name, email, phone, message} = req.body;

    if( !name || !email || !message)
    {
        return res.status(400).json({ error: "Name, email, and message are required."});
    }
    

    const sql = "INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phone, message], (err, result) => {
      if (err)
      {
        console.error("Error inserting into database", err);
        return res.status(500).json({ error: "Database error. Please try again later."});
      }
         
      res.json({message:"Your message has been submitted succesfully!"});
    });



});

module.exports = router;