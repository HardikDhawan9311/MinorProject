import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookMainPage = () => {
  const { state } = useLocation(); 
  const { book } = state || {}; 


  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1, 
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!book) {
    return <div className="flex items-center justify-center h-screen text-lg text-gray-600">Book details not found..</div>;
  }

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Avoid duplicates (optional)
    if (!cartItems.includes(book.isbn_no)) {
      cartItems.push(book.isbn_no);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true); 
  };


  const handleBuyNowClick = () => {
    setShowOrderForm(true);
  };

  const handleSuggestionClick = (book) => {
    
    navigate(`/buypage/${book.isbn_no}`); 
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-10 bg-gray-50 min-h-screen flex justify-center items-center">
      {!showOrderForm ? (
        
        <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 ml-20 mb-10">
            <img
              src={book.images}
              alt={book.book_name}
              className="w-full md:w-64 h-auto rounded-lg object-cover shadow-md md:ml-10"
            />
            <div className="flex flex-col ml-40 text-center">
              <h1 className="text-5xl font-extrabold text-gray-800">{book.book_name}</h1>
              <h2 className="text-3xl font-medium text-gray-600 mt-2">{book.author_name}</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                {book.description || 'No description available.'}
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Publisher</p>
                  <p className="text-gray-700">{book.publishing_house || 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ISBN</p>
                  <p className="text-gray-700">{book.isbn_no || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 lg:mt-0 mt-8">
              <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Price: Rs {book.price || 'N/A'}</h3>
              <p className="text-lg text-gray-600 mb-4">
                Delivery in: <span className="font-bold">3-5 days</span>
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Stock:{" "}
                <span
                  className={`font-bold ${
                    book.instock ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {book.instock || 'Out of Stock'}
                </span>
              </p>
              <button
                onClick={handleBuyNowClick}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
              >
                Buy Now
              </button>
              <button className="w-full bg-gray-200 mt-6 text-gray-700 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-200"
              onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              {isPopupVisible && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
              <p>Book added to your cart</p>
            </div>
          )}
            </div>
          </div>
        </div>
      ) : (
        // Order Form Section
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-teal-400 mb-6">Place Your Order</h2>
          {orderPlaced ? (
            <div className="text-center text-yellow-400 font-semibold text-xl">
              Order Placed Successfully! 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  min="1"
                  max="10"
                  placeholder="Enter quantity"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="123 Main St, City, Country"
                  required
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Place Order
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default BookMainPage;
