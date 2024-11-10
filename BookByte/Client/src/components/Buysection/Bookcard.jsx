import React, { useEffect, useState } from 'react';
import './Bookcard.css';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons

// Helper function to group books by category
const groupBooksByCategory = (books) => {
  return books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = [];
    }
    acc[book.category].push(book);
    return acc;
  }, {});
};

// Book Card component
const BookCard = ({ book }) => (
  <div className="book-card">
    {/* Display book image */}
    <img src={book.images} alt={book.book_name} className="book-image" />

    {/* Book details */}
    <div className="book-card-content">
      <p className="book-publisher"><strong>Publisher:</strong> {book.publishing_house}</p>
      <div className="book-title-and-author">
        <h3 className="book-title">{book.book_name}</h3> |
        <p className="book-author">{book.author_name}</p>
      </div>
      <p className="book-isbn"><strong>ISBN:</strong> {book.isbn_no}</p>

      {/* Buy Button and Add to Cart Icon */}
      <div className="book-actions">
        <button className="buy-button">Buy</button>
        <button className="cart-button" aria-label="Add to Cart">
          <FaShoppingCart className="cart-icon" />
        </button>
      </div>
    </div>
  </div>
);

const Buypage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books data from API on component mount
  useEffect(() => {
    fetch('http://localhost:5000/api/books')  // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => {
        setBooks(data); // Set books data from API
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // Group books by category
  const booksByCategory = groupBooksByCategory(books);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="buypage">
      {Object.keys(booksByCategory).map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="book-category">
            {booksByCategory[category].map((book) => (
              <BookCard key={book.isbn_no} book={book} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buypage;



