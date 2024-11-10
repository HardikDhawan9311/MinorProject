// import React, { useEffect, useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';


// // Helper function to group books by category
// const groupBooksByCategory = (books) => {
//   return books.reduce((acc, book) => {
//     if (!acc[book.category]) {
//       acc[book.category] = [];
//     }
//     acc[book.category].push(book);
//     return acc;
//   }, {});
// };

// // Book Card component
// const BookCard = ({ book }) => (
//   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center p-5 space-y-4">
//     <img
//       src={book.images}
//       alt={book.book_name}
//       className="w-full h-56 object-contain rounded-lg"
//     />
//     <div className="flex flex-col items-center text-center space-y-3">
//       <p className="text-gray-500 text-sm">Publisher: {book.publishing_house}</p>
//       <h3 className="text-lg font-bold text-gray-800">{book.book_name}</h3>
//       <p className="text-sm text-gray-600 italic">{book.author_name}</p>
//       <p className="text-xs text-gray-400">ISBN: {book.isbn_no}</p>

//       <div className="flex items-center gap-4 mt-5 w-full">
//         <button className="w-full max-w-[10rem] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105">
//           Buy Now
//         </button>
//         <button
//           aria-label="Add to Cart"
//           className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-md hover:bg-red-600 hover:scale-110"
//         >
//           <FaShoppingCart className="text-white text-xl" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const Buypage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/books')
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

//   const booksByCategory = groupBooksByCategory(books);

//   if (loading) {
//     return <div className="text-center text-lg text-gray-600">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-50 py-16 px-8">
//       {Object.keys(booksByCategory).map((category) => (
//         <div key={category} className="bg-white rounded-2xl shadow-xl p-8 space-y-8 mb-12">
//           <h3 className="text-3xl font-semibold text-gray-800">{category}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {booksByCategory[category].map((book) => (
//               <BookCard key={book.isbn_no} book={book} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Buypage;















// import React, { useEffect, useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const [isPopupVisible, setIsPopupVisible] = useState(false);
// const handleAddToCart = () => {
//   setIsPopupVisible(true);
//   setTimeout(() => {
//     setIsPopupVisible(false);
//   }, 2000);

// // Helper function to group books by category
// const groupBooksByCategory = (books) => {
//   return books.reduce((acc, book) => {
//     if (!acc[book.category]) {
//       acc[book.category] = [];
//     }
//     acc[book.category].push(book);
//     return acc;
//   }, {});
// };

// // Book Card component
// const BookCard = ({ book }) => {
//   const navigate = useNavigate();

//   // Function to handle Buy Now click and navigate to book details
//   const handleClick = () => {
//     navigate(`/books/${book.isbn_no}`, { state: { book } }); // Navigates to the book's details page with the book data passed in state
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center p-5 space-y-4">
//       <img
//         src={book.images}
//         alt={book.book_name}
//         className="w-full h-56 object-contain rounded-lg"
//       />
//       <div className="flex flex-col items-center text-center space-y-3">
//         <p className="text-gray-500 text-sm">Publisher: {book.publishing_house}</p>
//         <h3 className="text-lg font-bold text-gray-800">{book.book_name}</h3>
//         <p className="text-sm text-gray-600 italic">{book.author_name}</p>
//         <p className="text-xs text-gray-400">ISBN: {book.isbn_no}</p>

//         <div className="flex items-center gap-4 mt-5 w-full">
//           <button
//             onClick={handleClick}
//             className="w-full max-w-[10rem] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105"
//           >
//             Buy Now
//           </button>
//           <button
//         aria-label="Add to Cart"
//         className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-md hover:bg-red-600 hover:scale-110"
//         onClick={handleAddToCart}
//       >
//         <FaShoppingCart className="text-white text-xl" />
//       </button>

//       {/* Popup Message */}
//       {isPopupVisible && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           <p>Book added to your cart</p>
//         </div>
//       )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Buypage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/books')
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

//   const booksByCategory = groupBooksByCategory(books);

//   if (loading) {
//     return <div className="text-center text-lg text-gray-600">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-50 py-16 px-8">
//       {Object.keys(booksByCategory).map((category) => (
//         <div key={category} className="bg-white rounded-2xl shadow-xl p-8 space-y-8 mb-12">
//           <h3 className="text-3xl font-semibold text-gray-800">{category}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {booksByCategory[category].map((book) => (
//               <BookCard key={book.isbn_no} book={book} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Buypage;










import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Correctly placed state inside the component

  // Function to handle Add to Cart click and display popup
  const handleAddToCart = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };

  // Function to handle Buy Now click and navigate to book details
  const handleClick = () => {
    navigate(`/books/${book.isbn_no}`, { state: { book } }); // Navigates to the book's details page with the book data passed in state
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center p-5 space-y-4">
      <img
        src={book.images}
        alt={book.book_name}
        className="w-full h-56 object-contain rounded-lg"
      />
      <div className="flex flex-col items-center text-center space-y-3">
        <p className="text-gray-500 text-sm">Publisher: {book.publishing_house}</p>
        <h3 className="text-lg font-bold text-gray-800">{book.book_name}</h3>
        <p className="text-sm text-gray-600 italic">{book.author_name}</p>
        <p className="text-xs text-gray-400">ISBN: {book.isbn_no}</p>

        <div className="flex items-center gap-4 mt-5 w-full">
          <button
            onClick={handleClick}
            className="w-full max-w-[10rem] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105"
          >
            Buy Now
          </button>
          <button
            aria-label="Add to Cart"
            className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-md hover:bg-red-600 hover:scale-110"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="text-white text-xl" />
          </button>

          {/* Popup Message */}
          {isPopupVisible && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
              <p>Book added to your cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Buypage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
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

  const booksByCategory = groupBooksByCategory(books);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 py-16 px-8">
      {Object.keys(booksByCategory).map((category) => (
        <div key={category} className="bg-white rounded-2xl shadow-xl p-8 space-y-8 mb-12">
          <h3 className="text-3xl font-semibold text-gray-800">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
