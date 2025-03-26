require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, 
  ssl: {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === "true",
  },
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.message);
    return;
  }
  console.log("Connected to Azure MySQL Database");
});

db.query('SELECT DATABASE() AS name', (err, result) => {
  if (err) {
    console.error("Could not fetch DB name:", err.message);
  } else {
    console.log("Connected to DB:", result[0].name);
  }
});


module.exports = db;
