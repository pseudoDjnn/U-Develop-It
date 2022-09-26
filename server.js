// IMPORTS
const express = require("express");

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// PORT HOST
app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
