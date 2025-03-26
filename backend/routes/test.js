const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body); // Check what data comes in
    res.json(" POST route is working!");
  });

module.exports = router;