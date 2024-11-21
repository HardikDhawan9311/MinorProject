// import React, { useState, useEffect } from "react";

// function App() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/books")
//       .then((response) => response.json())
//       .then((data) => {
//         setBooks(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleQuantityChange = (e) => {
//     setQuantity(Math.min(10, Math.max(1, e.target.value))); // Quantity between 1 and 10
//   };

//   const handleNextPage = () => {
//     if ((currentPage + 1) * 4 < books.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const visibleBooks = books.slice(currentPage * 4, currentPage * 4 + 4);

//   return (
//     <div className="flex justify-between items-start min-h-screen bg-gradient-to-r from-indigo-900 to-gray-800 pt-10 px-8">
//       {/* Left Side */}
//       <div className="flex flex-col items-start mb-6 w-3/5">
//         {loading ? (
//           <p className="text-teal-400 text-2xl">Loading books...</p>
//         ) : books.length > 0 ? (
//           <>
//            <div
//                     key={books.isbn_no} // Use isbn_no as the key for each book
//                     className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
//                   >
//             <div className="flex items-center mb-6">
//               <img
//                 src={books.images}
//                 alt={books.book_name}
//                 className="w-48 h-48 object-cover rounded-lg mr-8"
//               />
//               <div>
//                 <h2 className="text-3xl font-semibold text-teal-400 mb-2">
//                   {books.book_name}
//                 </h2>
//                 <h3 className="text-xl font-medium text-teal-300">
//                   {books.author_name}
//                 </h3>
//               </div>
//             </div>
//             <p className="text-lg text-gray-300 mb-6 text-left">
//               {books.description}
//             </p>
//             <div className="flex justify-between w-full mt-10 mb-6">
//               <div className="flex flex-col items-center">
//                 <i className="fas fa-book-open text-teal-400 text-3xl mb-2"></i>
//                 <p className="text-sm text-gray-300">First Edition</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <i className="fas fa-industry text-teal-400 text-3xl mb-2"></i>
//                 <p className="text-sm text-gray-300">{books[0].publishing_house}</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <i className="fas fa-barcode text-teal-400 text-3xl mb-2"></i>
//                 <p className="text-sm text-gray-300">{books[0].isbn_no}</p>
//               </div>
//             </div>
//             </div>
//             <hr className="border-gray-700 my-6 w-full" />
//             <h2 className="text-2xl font-semibold text-teal-400 mb-4">
//               More Related Products
//             </h2>
//             <div className="flex items-center space-x-4">
//               {currentPage > 0 && (
//                 <button
//                   onClick={handlePrevPage}
//                   className="p-2 bg-teal-600 rounded-full hover:bg-teal-700 transition duration-300"
//                 >
//                   <i className="fas fa-chevron-left text-white"></i>
//                 </button>
//               )}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
//                 {visibleBooks.map((book) => (
//                   <div
//                     key={books.isbn_no} // Use isbn_no as the key for each book
//                     className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
//                   >
//                     <img
//                       src={books.images} // Ensure you access the correct image field here
//                       alt={books.book_name}
//                       className="w-24 h-36 object-cover mb-4 rounded-lg"
//                     />
//                     <h3 className="text-lg font-medium text-teal-400 mb-2">
//                       {books.book_name}
//                     </h3>
//                     <p className="text-sm text-gray-300">{books.author_name}</p>
//                   </div>
//                 ))}
//               </div>
//               {(currentPage + 1) * 4 < books.length && (
//                 <button
//                   onClick={handleNextPage}
//                   className="p-2 bg-teal-600 rounded-full hover:bg-teal-700 transition duration-300"
//                 >
//                   <i className="fas fa-chevron-right text-white"></i>
//                 </button>
//               )}
//             </div>
//           </>
//         ) : (
//           <p className="text-teal-400 text-2xl">No books available</p>
//         )}
//       </div>
//       {/* Right Side */}
//       <div className="w-2/5 bg-gray-900 p-6 rounded-xl shadow-lg text-white">
//         <div className="mb-4">
//           <h3 className="text-2xl font-semibold text-teal-400">
//             Price: ${books[0]?.price || "N/A"}
//           </h3>
//         </div>
//         <div className="mb-4 flex items-center space-x-2">
//           <p className="text-lg">Delivery in: 3-5 days</p>
//           <i className="fas fa-map-marker-alt text-teal-400"></i>
//         </div>
//         <div className="mb-4">
//           <p className="text-lg">In Stock: {books.instock || "N/A"}</p>
//         </div>
//         <div className="mb-6">
//           <label htmlFor="quantity" className="block text-sm font-medium mb-2">
//             Quantity
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//             min="1"
//             max="10"
//             className="w-full p-3 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>
//         <div className="flex justify-between space-x-4">
//           <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition duration-300 ease-in-out">
//             <i className="fas fa-shopping-cart"></i>
//             <span>Buy Now</span>
//           </button>
//           <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition duration-300 ease-in-out">
//             <i className="fas fa-cart-plus"></i>
//             <span>Add to Cart</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { useLocation } from 'react-router-dom';

const BookMainPage = () => {
  const { state } = useLocation(); // Access the passed book data
  const { book } = state || {}; // Destructure the book object

  if (!book) {
    return <div className="text-center text-lg text-gray-600">Book details not found.</div>;
  }

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h3 className="text-3xl font-semibold text-gray-800">{book.book_name}</h3>
        <div className="flex flex-col sm:flex-row gap-8">
          <img
            src={book.images}
            alt={book.book_name}
            className="w-full sm:w-1/3 h-56 object-contain rounded-lg"
          />
          <div className="flex flex-col space-y-4">
            <p className="text-gray-500">Author: {book.author_name}</p>
            <p className="text-gray-500">Publisher: {book.publishing_house}</p>
            <p className="text-gray-500">ISBN: {book.isbn_no}</p>
            <p className="text-gray-800">{book.description || 'No description available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMainPage;

