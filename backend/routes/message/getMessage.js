const express = require('express');
const router = express.Router();
const db = require('../../db');


router.get('/', (req, res) => {

    const sql = "SELECT * FROM messages";
    db.query(sql, (err, results) => {
      if (err)
      {
        console.error("Error retrieving from database", err);
        return res.status(500).json({ error: "Database error. Please try again later."});
      }
         
      res.json(results);
    });



});

module.exports = router;