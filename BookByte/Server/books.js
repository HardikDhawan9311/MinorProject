const express = require('express');
const router = express.Router();

// Endpoint to get books with an optional category filter
router.get('/api/books', (req, res) => {
  const { category } = req.query; // Extract 'category' from query parameters
  
  // Base query
  let query = 'SELECT * FROM books';
  const params = [];

  // Add category filter if provided
  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  }

  // Execute the query safely using placeholders to prevent SQL injection
  req.db.query(query, params, (error, results) => {
    if (error) {
      console.error('Error fetching books:', error.message);
      return res.status(500).json({ error: 'Failed to fetch books' });
    }
    res.json(results);
  });
});

module.exports = router;
