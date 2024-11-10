const express = require('express');
const router = express.Router();

// Endpoint to get books with an optional category filter
router.get('/api/books', (req, res) => {
  const { category } = req.query; // Extract 'category' from query parameters
  let query = 'SELECT * FROM books'; // Default query to get all books
  
  // If a category is provided, modify the query to filter by category
  if (category) {
    query += ` WHERE category = '${category}'`;
  }

  // Execute the query
  req.db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).json({ error: 'Failed to fetch books' });
    }
    res.json(results);
  });
});

module.exports = router;
