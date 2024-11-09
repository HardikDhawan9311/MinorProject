// Signup.js
const express = require('express');
const router = express.Router();

// POST route to handle user signup
router.post('/signup', (req, res) => {
  const { name, username, phoneNumber, password, email } = req.body;
  const db = req.db; // Use the db connection from Server.js

  // Check if the user record already exists
  const checkQuery = 'SELECT * FROM signup WHERE name = ? AND username = ? AND phonenumber = ?';
  
  db.query(checkQuery, [name, username, phoneNumber], (err, result) => {
    if (err) return res.status(500).json({ error: 'An error occurred' });

    if (result.length > 0) {
      return res.status(400).json({ error: 'This User already exists.' });
    }

    // Insert new data if no existing record
    const insertQuery = 'INSERT INTO signup (name, username, phonenumber, password, email) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [name, username, phoneNumber, password, email], (err, result) => {
      if (err) return res.status(500).json({ error: 'An error occurred' });
      
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// POST route to handle user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = req.db; // Use the db connection from Server.js

  const loginQuery = 'SELECT * FROM signup WHERE username = ? AND password = ?';
  db.query(loginQuery, [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: 'An error occurred' });

    if (result.length > 0) {
      const userInfo = { id: result[0].id, name: result[0].name, username: result[0].username, email: result[0].email };
      res.status(200).json({ success: true, message: 'Login successful', user: userInfo });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

module.exports = router;
