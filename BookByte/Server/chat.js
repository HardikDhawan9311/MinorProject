const express = require('express');
const router = express.Router();

router.post('/createRoom', (req, res) => {
  const { name, code } = req.body;

  // Validate inputs
  if (!name || !code) {
    return res.status(400).json({ message: 'Name and code are required' });
  }

  const query = 'INSERT INTO room (name, code) VALUES (?, ?)';
  req.db.query(query, [name, code], (err, result) => {
    if (err) {
      console.error('Error creating room:', err.message);
      return res.status(500).json({ message: 'Error creating room' });
    }

    // Generate the room link
    const roomLink = `http://yourdomain.com/room/${result.insertId}`;
    res.status(201).json({
      message: 'Room created successfully',
      roomId: result.insertId,
      roomLink
    });
  });
});

module.exports = router;
