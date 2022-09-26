// IMPORTS
const express = require("express");
const mysql = require("mysql2");

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET ROUTE
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

// Connect to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "lavahrexes",
    // Your passowrd
    password: "!NaPHtHYloxy07131988",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// PORT HOST
app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
