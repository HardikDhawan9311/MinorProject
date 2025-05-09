const express = require('express');
const router = express.Router();


router.post('/signup', (req, res) => {
  const { name, username, phoneNumber, password, email } = req.body;
  const db = req.db; 


  const checkQuery = 'SELECT * FROM signup WHERE name = ? AND username = ? AND phonenumber = ?';
  
  db.query(checkQuery, [name, username, phoneNumber], (err, result) => {
    if (err) return res.status(500).json({ error: 'An error occurred' });

    if (result.length > 0) {
      return res.status(400).json({ error: 'This User already exists.' });
    }

    const insertQuery = 'INSERT INTO signup (name, username, phonenumber, password, email) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [name, username, phoneNumber, password, email], (err, result) => {
      if (err) return res.status(500).json({ error: 'An error occurred' });
      
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = req.db; 

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

// GET user profile (email & phone) by username
router.get('/profile/:username', (req, res) => {
  const { username } = req.params;
  const db = req.db;

  const query = 'SELECT email, phonenumber AS phone FROM signup WHERE username = ?';

  db.query(query, [username], (err, result) => {
    if (err) return res.status(500).json({ error: 'An error occurred' });

    if (result.length > 0) {
      res.status(200).json(result[0]);  // { email: ..., phone: ... }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

module.exports = router;
