// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoutes = require('./Signup'); // Import the signup.js routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Hardik@9311',
//   database: 'BookByte',
// });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'BookByte',
});

// Connect to the database
db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Pass db connection to routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Use the signup routes
app.use(signupRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
