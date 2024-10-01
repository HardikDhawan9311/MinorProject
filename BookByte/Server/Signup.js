const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'Hardik@9311', // Replace with your MySQL password
  database: 'BookByte', // Replace with your MySQL database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Combined POST route to handle form submission and user signup
app.post('/signup', (req, res) => {
  const { name, username, phoneNumber, password, email } = req.body;

  // Step 1: Check if the user record already exists
  const checkQuery = 'SELECT * FROM signup WHERE name = ? AND username = ? AND phonenumber = ?';
  
  db.query(checkQuery, [name, username, phoneNumber], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (result.length > 0) {
      // Step 2: If record exists, send a response
      return res.status(400).json({ error: 'This User already exists.' });
    }

    // Step 3: If record does not exist, insert the new data
    const insertQuery = 'INSERT INTO signup (name, username, phonenumber, password, email) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [name, username, phoneNumber, password, email], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'An error occurred' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// POST route to handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query to check if user exists with the provided username and password
  const loginQuery = 'SELECT * FROM signup WHERE username = ? AND password = ?';
  
  db.query(loginQuery, [username, password], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (result.length > 0) {
      // User found, login successful
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // User not found, login failed
      res.status(401).json({ success: false, message: 'User not registered. Please register yourself.' });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
