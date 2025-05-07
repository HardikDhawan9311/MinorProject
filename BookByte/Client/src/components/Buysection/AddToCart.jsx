


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from '../Homepage/Background';

const AddToCartPage = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cartItems.length === 0) {
          setCartBooks([]);
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/books');
        const allBooks = response.data;

        const filteredBooks = allBooks.filter(book => cartItems.includes(book.isbn_no));

        setCartBooks(filteredBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cartItems');
    setCartBooks([]);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading your cart...</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background component */}
      <Background />

      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        <h1 className="text-6xl font-extrabold text-center  mb-16 text-white">Shopping Cart</h1>
        {cartBooks.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Items */}
            <div className="flex-1 space-y-6">
              {cartBooks.map((book) => (
                <div key={book.isbn_no} className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                  <img
                    src={book.images}
                    alt={book.book_name}
                    className="w-full md:w-40 h-56 object-cover rounded mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{book.book_name}</h2>
                      <p className="text-gray-600 mb-2">by {book.author_name}</p>
                      <p className="text-lg font-medium text-gray-900">Price: ${book.price}</p>
                      <p className="text-sm text-gray-500">ISBN: {book.isbn_no}</p>
                      <p className="mt-2">
                        {book.instock ? (
                          <span className="text-green-600 font-semibold">In Stock</span>
                        ) : (
                          <span className="text-red-500 font-semibold">Out of Stock</span>
                        )}
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        // You can hook up remove logic later
                        className="text-sm text-red-500 hover:underline hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow sticky top-6 h-fit">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <p className="flex justify-between text-gray-700 mb-2">
                <span>Total Items:</span>
                <span>{cartBooks.length}</span>
              </p>
              <p className="flex justify-between text-gray-700 mb-4">
                <span>Total Price:</span>
                <span>
                  ${cartBooks.reduce((total, book) => total + Number(book.price), 0).toFixed(2)}
                </span>
              </p>
              <button
                onClick={handleClearCart}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;



