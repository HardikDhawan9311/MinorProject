// import React, { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '', // Added address field
//   });
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOrderPlaced(true); // Show the success message after form submission
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 to-gray-800">
//       <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
//         <h2 className="text-3xl font-semibold text-center text-teal-400 mb-6">Place Your Order</h2>

//         {orderPlaced ? (
//           <div className="text-center text-yellow-400 font-semibold text-xl">
//             Order Placed Successfully! 🎉
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="John Doe"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="youremail@example.com"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="(123) 456-7890"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="address" className="block text-sm font-medium text-gray-300">
//                 Shipping Address
//               </label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="123 Main St, City, Country"
//                 required
//                 rows="4"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               Place Order
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(Math.min(10, Math.max(1, e.target.value))); // Quantity between 1 and 10
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * 4 < books.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const visibleBooks = books.slice(currentPage * 4, currentPage * 4 + 4);

  return (
    <div className="flex justify-between items-start min-h-screen bg-gradient-to-r from-indigo-900 to-gray-800 pt-10 px-8">
      {/* Left Side */}
      <div className="flex flex-col items-start mb-6 w-3/5">
        {loading ? (
          <p className="text-teal-400 text-2xl">Loading books...</p>
        ) : books.length > 0 ? (
          <>
            <div className="flex items-center mb-6">
              <img
                src={books[0].images}
                alt={books[0].book_name}
                className="w-48 h-48 object-cover rounded-lg mr-8"
              />
              <div>
                <h2 className="text-3xl font-semibold text-teal-400 mb-2">
                  {books[0].book_name}
                </h2>
                <h3 className="text-xl font-medium text-teal-300">
                  {books[0].author_name}
                </h3>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-6 text-left">
              {books[0].description}
            </p>
            <div className="flex justify-between w-full mt-10 mb-6">
              <div className="flex flex-col items-center">
                <i className="fas fa-book-open text-teal-400 text-3xl mb-2"></i>
                <p className="text-sm text-gray-300">First Edition</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-industry text-teal-400 text-3xl mb-2"></i>
                <p className="text-sm text-gray-300">{books[0].publishing_house}</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-barcode text-teal-400 text-3xl mb-2"></i>
                <p className="text-sm text-gray-300">{books[0].isbn_no}</p>
              </div>
            </div>
            <hr className="border-gray-700 my-6 w-full" />
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">
              More Related Products
            </h2>
            <div className="flex items-center space-x-4">
              {currentPage > 0 && (
                <button
                  onClick={handlePrevPage}
                  className="p-2 bg-teal-600 rounded-full hover:bg-teal-700 transition duration-300"
                >
                  <i className="fas fa-chevron-left text-white"></i>
                </button>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {visibleBooks.map((book, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
                  >
                    <img
                      src={books.image}
                      alt={books.book_name}
                      className="w-24 h-36 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-medium text-teal-400 mb-2">
                      {book.book_name}
                    </h3>
                    <p className="text-sm text-gray-300">{book.author_name}</p>
                  </div>
                ))}
              </div>
              {(currentPage + 1) * 4 < books.length && (
                <button
                  onClick={handleNextPage}
                  className="p-2 bg-teal-600 rounded-full hover:bg-teal-700 transition duration-300"
                >
                  <i className="fas fa-chevron-right text-white"></i>
                </button>
              )}
            </div>
          </>
        ) : (
          <p className="text-teal-400 text-2xl">No books available</p>
        )}
      </div>
      {/* Right Side */}
      <div className="w-2/5 bg-gray-900 p-6 rounded-xl shadow-lg text-white">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-teal-400">
            Price: ${books[0]?.price || "N/A"}
          </h3>
        </div>
        <div className="mb-4 flex items-center space-x-2">
          <p className="text-lg">Delivery in: 3-5 days</p>
          <i className="fas fa-map-marker-alt text-teal-400"></i>
        </div>
        <div className="mb-4">
          <p className="text-lg">In Stock: {books[0]?.instock || "N/A"}</p>
        </div>
        <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
            className="w-full p-3 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex justify-between space-x-4">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition duration-300 ease-in-out">
            <i className="fas fa-shopping-cart"></i>
            <span>Buy Now</span>
          </button>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition duration-300 ease-in-out">
            <i className="fas fa-cart-plus"></i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;