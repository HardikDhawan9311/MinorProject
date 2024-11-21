const express = require('express');
const router = express.Router();


router.get('/api/books', (req, res) => {
  const { category } = req.query; 
  

  let query = 'SELECT * FROM books';
  const params = [];


  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  }


  req.db.query(query, params, (error, results) => {
    if (error) {
      console.error('Error fetching books:', error.message);
      return res.status(500).json({ error: 'Failed to fetch books' });
    }
    res.json(results);
  });
});

module.exports = router;
