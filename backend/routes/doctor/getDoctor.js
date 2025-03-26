const express = require("express");
const router = express.Router();
const db = require("../../db");


router.get("/doctors", (req, res) => {
    const sql = `
      SELECT d.*, e.firstName, e.lastName, e.email FROM Doctors d
      JOIN Employee e ON d.employeeID = e.employeeID`;
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error fetching doctors:", err);
        return res
          .status(500)
          .json({ message: "Error fetching doctors from database." });
      }
  
      res.status(200).json(result);
    });
  });
  

router.get("/doctors/:id", (req, res) => {
  const doctorID = req.params.id;

  const sql = ` SELECT d.*, e.firstName, e.lastName, e.email FROM Doctors d 
  JOIN Employee e ON d.employeeID = e.employeeID WHERE d.doctorID = ? `;

  db.query(sql, [doctorID], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(results[0]);
  });
});

module.exports = router;
