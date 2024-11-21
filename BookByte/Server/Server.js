const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoutes = require('./Signup');
const bookRoutes = require('./books'); 
const chatRoutes = require('./chat');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hardik@9311',
  database: 'BookByte',
});

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'BookByte',
// });


db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});


app.use((req, res, next) => {
  req.db = db;
  next();
});


app.use(signupRoutes);
app.use(bookRoutes); 
app.use(chatRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/books/isbn_no', (req, res) => {
  const { isbn_no } = req.params;
pool.execute('SELECT * FROM books WHERE isbn_no = ?', [isbn_no], (err, results) => {
  if (err) {
    return res.status(500).json({ message: 'Error fetching book details' });
  }
  if (results.length > 0) {
    res.json(results[0]); 
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
});