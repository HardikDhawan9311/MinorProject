const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoutes = require('./Signup');
const bookRoutes = require('./books'); 
const chatRoutes = require('./chat');
const http = require('http');   // <--- ADD
const { Server } = require('socket.io'); // <--- ADD

const app = express();

const server = http.createServer(app); // <--- USE server instead of app.listen
const io = new Server(server, {
  cors: {
    origin: "*", // adjust if you want strict security
    methods: ["GET", "POST"]
  }
});

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

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.roomId).emit('receive_message', data);
  });

  socket.on('typing', (data) => {
    socket.to(data.roomId).emit('typing', data);
  });
  
  socket.on('stop_typing', (data) => {
    socket.to(data.roomId).emit('stop_typing', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


server.listen(PORT, () => {
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