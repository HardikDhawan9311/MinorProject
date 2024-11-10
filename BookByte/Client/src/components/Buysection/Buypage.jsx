import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Cards from './BookCard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recommended books from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/books?category=Recommended') // Add category filter to URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      {/* Navbar on the left side */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Buy Section</h1>

        {/* Search Bar (Full Screen Width) */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded mr-4"
          />
          <button className="p-2 bg-blue-500 text-white rounded">Search</button>
        </div>


        {/* Book Cards (display only if books are fetched) */}
        <div className="container mx-auto py-8">
          {loading ? (
            <p>Loading books...</p>
          ) : books.length > 0 ? (
            <Cards books={books} /> // Pass books to BuyPage
          ) : (
            <p>No recommended books available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
