const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/add-doctor', (req, res) => {

    console.log("Received add-doctor data:", req.body);

  const { employeeID, licenseNumber, specialization } = req.body;

  if (!employeeID || !licenseNumber || !specialization) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = `INSERT INTO Doctors (employeeID, licenseNumber, specialization) VALUES (?, ?, ?) `;

  db.query(sql, [employeeID, licenseNumber, specialization], (err, result) => {
    if (err) {
      console.error('Error inserting doctor:', err);
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    res.status(201).json({ message: 'Doctor added successfully', doctorID: result.insertId });
  });
});

module.exports = router;
