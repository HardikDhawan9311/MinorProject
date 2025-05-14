// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Background from '../Homepage/Background';
// // import { Trash2 } from 'lucide-react'; // Trash icon

// // const AddToCartPage = () => {
// //   const [cartBooks, setCartBooks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [quantities, setQuantities] = useState({}); // To store quantities

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// //         if (cartItems.length === 0) {
// //           setCartBooks([]);
// //           setLoading(false);
// //           return;
// //         }

// //         const response = await axios.get('http://localhost:5000/api/books');
// //         const allBooks = response.data;

// //         const filteredBooks = allBooks.filter(book => cartItems.includes(book.isbn_no));

// //         // Initialize quantities to 1 for each book
// //         const initialQuantities = {};
// //         filteredBooks.forEach(book => {
// //           initialQuantities[book.isbn_no] = 1;
// //         });

// //         setCartBooks(filteredBooks);
// //         setQuantities(initialQuantities);
// //       } catch (error) {
// //         console.error('Error fetching books:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBooks();
// //   }, []);

// //   const handleQuantityChange = (isbn, newQuantity) => {
// //     setQuantities(prev => ({
// //       ...prev,
// //       [isbn]: newQuantity,
// //     }));
// //   };

// //   const handleRemove = (isbn) => {
// //     const updatedCart = cartBooks.filter(book => book.isbn_no !== isbn);
// //     setCartBooks(updatedCart);
// //     const updatedCartItems = updatedCart.map(book => book.isbn_no);
// //     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

// //     // Remove quantity from state
// //     setQuantities(prev => {
// //       const updatedQuantities = { ...prev };
// //       delete updatedQuantities[isbn];
// //       return updatedQuantities;
// //     });
// //   };

// //   const handleClearCart = () => {
// //     localStorage.removeItem('cartItems');
// //     setCartBooks([]);
// //     setQuantities({});
// //   };

// //   const getTotalPrice = () => {
// //     return cartBooks.reduce((total, book) => {
// //       const qty = quantities[book.isbn_no] || 1;
// //       return total + Number(book.price) * qty;
// //     }, 0).toFixed(2);
// //   };

// //   if (loading) {
// //     return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading your cart...</div>;
// //   }

// //   return (
// //     <div className="relative min-h-screen bg-gray-100">
// //       {/* Background component */}
// //       <Background />

// //       <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
// //         <h1 className="text-6xl font-extrabold text-center mb-16 text-white">Shopping Cart</h1>
// //         {cartBooks.length === 0 ? (
// //           <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
// //         ) : (
// //           <div className="flex flex-col lg:flex-row gap-8">
// //             {/* Left: Items */}
// //             <div className="flex-1 space-y-6">
// //               {cartBooks.map((book) => (
// //                 <div key={book.isbn_no} className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 relative">
// //                   <img
// //                     src={book.images}
// //                     alt={book.book_name}
// //                     className="w-full md:w-40 h-56 object-cover rounded mb-4 md:mb-0 md:mr-6"
// //                   />
// //                   <div className="flex flex-col justify-between flex-1">
// //                     <div>
// //                       <div className="flex justify-between items-start">
// //                         <div>
// //                           <h2 className="text-xl font-semibold text-gray-800">{book.book_name}</h2>
// //                           <p className="text-gray-600 mb-2">by {book.author_name}</p>
// //                           <p className="text-lg font-medium text-gray-900">Price: ${book.price}</p>
// //                           <p className="text-sm text-gray-500">ISBN: {book.isbn_no}</p>
// //                           <p className="mt-2">
// //                             {book.instock ? (
// //                               <span className="text-green-600 font-semibold">In Stock</span>
// //                             ) : (
// //                               <span className="text-red-500 font-semibold">Out of Stock</span>
// //                             )}
// //                           </p>
// //                         </div>
// //                         {/* Trash Icon */}
// //                         <button
// //                           onClick={() => handleRemove(book.isbn_no)}
// //                           className="text-gray-400 hover:text-red-500 transition duration-200 ml-4"
// //                           aria-label="Remove"
// //                         >
// //                           <Trash2 size={24} />
// //                         </button>
// //                       </div>
// //                       {/* Quantity Selector */}
// //                       <div className="mt-4 flex items-center gap-3">
// //                         <span className="text-sm text-gray-700">Quantity:</span>

// //                         <button
// //                           onClick={() =>
// //                             handleQuantityChange(book.isbn_no, Math.max(1, quantities[book.isbn_no] - 1))
// //                           }
// //                           className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
// //                             quantities[book.isbn_no] === 1 ? 'opacity-50 cursor-not-allowed' : ''
// //                           }`}
// //                           disabled={quantities[book.isbn_no] === 1}
// //                         >
// //                           −
// //                         </button>

// //                         <span className="w-6 text-center font-medium">{quantities[book.isbn_no]}</span>

// //                         <button
// //                           onClick={() =>
// //                             handleQuantityChange(book.isbn_no, Math.min(10, quantities[book.isbn_no] + 1))
// //                           }
// //                           className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
// //                             quantities[book.isbn_no] === 10 ? 'opacity-50 cursor-not-allowed' : ''
// //                           }`}
// //                           disabled={quantities[book.isbn_no] === 10}
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //                  {/* Right: Summary */}
// //                 <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow sticky top-6 h-fit">
// //                 <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
// //                 <p className="flex justify-between text-gray-700 mb-2">
// //                     <span>Total Items:</span>
// //                     <span>
// //                     {cartBooks.reduce((total, book) => total + (quantities[book.isbn_no] || 1), 0)}
// //                     </span>
// //                 </p>
// //                 <p className="flex justify-between text-gray-700 mb-4">
// //                     <span>Total Price:</span>
// //                     <span>${getTotalPrice()}</span>
// //                 </p>
// //                 <button
// //                     onClick={() => {
// //                     // TODO: Implement purchase logic here
// //                     console.log('Proceed to checkout with items:', cartBooks, 'and quantities:', quantities);
// //                     }}
// //                     className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
// //                 >
// //                     Buy Now
// //                 </button>
// //                 </div>

// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddToCartPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Background from '../Homepage/Background';
// import { Trash2 } from 'lucide-react'; // Trash icon
// import { useNavigate } from 'react-router-dom';

// const AddToCartPage = () => {
//   const [cartBooks, setCartBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [quantities, setQuantities] = useState({}); // To store quantities

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//         if (cartItems.length === 0) {
//           setCartBooks([]);
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get('http://localhost:5000/api/books');
//         const allBooks = response.data;

//         const filteredBooks = allBooks.filter(book => cartItems.includes(book.isbn_no));

//         // Initialize quantities to 1 for each book
//         const initialQuantities = {};
//         filteredBooks.forEach(book => {
//           initialQuantities[book.isbn_no] = 1;
//         });

//         setCartBooks(filteredBooks);
//         setQuantities(initialQuantities);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleQuantityChange = (isbn, newQuantity) => {
//     setQuantities(prev => ({
//       ...prev,
//       [isbn]: newQuantity,
//     }));
//   };

//   const handleRemove = (isbn) => {
//     const updatedCart = cartBooks.filter(book => book.isbn_no !== isbn);
//     setCartBooks(updatedCart);
//     const updatedCartItems = updatedCart.map(book => book.isbn_no);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

//     // Remove quantity from state
//     setQuantities(prev => {
//       const updatedQuantities = { ...prev };
//       delete updatedQuantities[isbn];
//       return updatedQuantities;
//     });
//   };

//   const handleBuyNow = () => {
//     if (cartBooks.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }
  
//     const handleBuyNow = () => {
//       if (cartBooks.length === 0) {
//         alert("Your cart is empty.");
//         return;
//       }
  
//       // Store total and quantities in localStorage only when "Buy Now" is clicked
//       const orderDetails = {
//         quantities,
//         totalPrice: getTotalPrice(),
//         books: cartBooks,
//       };
  
//       // Save order details in localStorage
//       localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
//       // Log the stored order details to console
//       console.log('Order details saved:', orderDetails);
  
//       // Optionally clear the cart after storing
//       setCartBooks([]);
//       setQuantities({});
  
//       // Navigate to the order page
//       navigate('/order');
//     };
  
  

//   const getTotalPrice = () => {
//     return cartBooks.reduce((total, book) => {
//       const qty = quantities[book.isbn_no] || 1;
//       return total + Number(book.price) * qty;
//     }, 0).toFixed(2);
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading your cart...</div>;
//   }

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* Background component */}
//       <Background />

//       <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
//         <h1 className="text-6xl font-extrabold text-center mb-16 text-white">Shopping Cart</h1>
//         {cartBooks.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left: Items */}
//             <div className="flex-1 space-y-6">
//               {cartBooks.map((book) => (
//                 <div key={book.isbn_no} className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 relative">
//                   <img
//                     src={book.images}
//                     alt={book.book_name}
//                     className="w-full md:w-40 h-56 object-cover rounded mb-4 md:mb-0 md:mr-6"
//                   />
//                   <div className="flex flex-col justify-between flex-1">
//                     <div>
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h2 className="text-xl font-semibold text-gray-800">{book.book_name}</h2>
//                           <p className="text-gray-600 mb-2">by {book.author_name}</p>
//                           <p className="text-lg font-medium text-gray-900">Price: ${book.price}</p>
//                           <p className="text-sm text-gray-500">ISBN: {book.isbn_no}</p>
//                           <p className="mt-2">
//                             {book.instock ? (
//                               <span className="text-green-600 font-semibold">In Stock</span>
//                             ) : (
//                               <span className="text-red-500 font-semibold">Out of Stock</span>
//                             )}
//                           </p>
//                         </div>
//                         {/* Trash Icon */}
//                         <button
//                           onClick={() => handleRemove(book.isbn_no)}
//                           className="text-gray-400 hover:text-red-500 transition duration-200 ml-4"
//                           aria-label="Remove"
//                         >
//                           <Trash2 size={24} />
//                         </button>
//                       </div>
//                       {/* Quantity Selector */}
//                       <div className="mt-4 flex items-center gap-3">
//                         <span className="text-sm text-gray-700">Quantity:</span>

//                         <button
//                           onClick={() =>
//                             handleQuantityChange(book.isbn_no, Math.max(1, quantities[book.isbn_no] - 1))
//                           }
//                           className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
//                             quantities[book.isbn_no] === 1 ? 'opacity-50 cursor-not-allowed' : ''
//                           }`}
//                           disabled={quantities[book.isbn_no] === 1}
//                         >
//                           −
//                         </button>

//                         <span className="w-6 text-center font-medium">{quantities[book.isbn_no]}</span>

//                         <button
//                           onClick={() =>
//                             handleQuantityChange(book.isbn_no, Math.min(10, quantities[book.isbn_no] + 1))
//                           }
//                           className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
//                             quantities[book.isbn_no] === 10 ? 'opacity-50 cursor-not-allowed' : ''
//                           }`}
//                           disabled={quantities[book.isbn_no] === 10}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right: Summary */}
//             <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow sticky top-6 h-fit">
//               <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//               <p className="flex justify-between text-gray-700 mb-2">
//                 <span>Total Items:</span>
//                 <span>
//                   {cartBooks.reduce((total, book) => total + (quantities[book.isbn_no] || 1), 0)}
//                 </span>
//               </p>
//               <p className="flex justify-between text-gray-700 mb-4">
//                 <span>Total Price:</span>
//                 <span>${getTotalPrice()}</span>
//               </p>
//               <button
//                onClick={() => navigate('/order')}
//                 className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddToCartPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from '../Homepage/Background';
import { Trash2 } from 'lucide-react'; // Trash icon
import { useNavigate } from 'react-router-dom';

const AddToCartPage = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({}); // To store quantities

  const navigate = useNavigate();

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

        // Initialize quantities to 1 for each book
        const initialQuantities = {};
        filteredBooks.forEach(book => {
          initialQuantities[book.isbn_no] = 1;
        });

        setCartBooks(filteredBooks);
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleQuantityChange = (isbn, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [isbn]: newQuantity,
    }));
  };

  const handleRemove = (isbn) => {
    const updatedCart = cartBooks.filter(book => book.isbn_no !== isbn);
    setCartBooks(updatedCart);
    const updatedCartItems = updatedCart.map(book => book.isbn_no);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Remove quantity from state
    setQuantities(prev => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[isbn];
      return updatedQuantities;
    });
  };

  const getTotalPrice = () => {
    return cartBooks.reduce((total, book) => {
      const qty = quantities[book.isbn_no] || 1;
      return total + Number(book.price) * qty;
    }, 0).toFixed(2);
  };

  const handleBuyNow = () => {
    if (cartBooks.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Store total and quantities in localStorage only when "Buy Now" is clicked
    const orderDetails = {
      quantities,
      totalPrice: getTotalPrice(),
      books: cartBooks,
    };

    // Save order details in localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Log the stored order details to console
    console.log('Order details saved:', orderDetails);

    // Optionally clear the cart after storing
    setCartBooks([]);
    setQuantities({});

    // Navigate to the order page
    navigate('/order');
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading your cart...</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background component */}
      <Background />

      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-white">Shopping Cart</h1>
        {cartBooks.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Items */}
            <div className="flex-1 space-y-6">
              {cartBooks.map((book) => (
                <div key={book.isbn_no} className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 relative">
                  <img
                    src={book.images}
                    alt={book.book_name}
                    className="w-full md:w-40 h-56 object-cover rounded mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">{book.book_name}</h2>
                          <p className="text-gray-600 mb-2">by {book.author_name}</p>
                          <p className="text-lg font-medium text-gray-900">Price: Rs {book.price}</p>
                          <p className="text-sm text-gray-500">ISBN: {book.isbn_no}</p>
                          <p className="mt-2">
                            {book.instock ? (
                              <span className="text-green-600 font-semibold">In Stock</span>
                            ) : (
                              <span className="text-red-500 font-semibold">Out of Stock</span>
                            )}
                          </p>
                        </div>
                        {/* Trash Icon */}
                        <button
                          onClick={() => handleRemove(book.isbn_no)}
                          className="text-gray-400 hover:text-red-500 transition duration-200 ml-4"
                          aria-label="Remove"
                        >
                          <Trash2 size={24} />
                        </button>
                      </div>
                      {/* Quantity Selector */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-sm text-gray-700">Quantity:</span>

                        <button
                          onClick={() =>
                            handleQuantityChange(book.isbn_no, Math.max(1, quantities[book.isbn_no] - 1))
                          }
                          className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
                            quantities[book.isbn_no] === 1 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={quantities[book.isbn_no] === 1}
                        >
                          −
                        </button>

                        <span className="w-6 text-center font-medium">{quantities[book.isbn_no]}</span>

                        <button
                          onClick={() =>
                            handleQuantityChange(book.isbn_no, Math.min(10, quantities[book.isbn_no] + 1))
                          }
                          className={`w-8 h-8 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
                            quantities[book.isbn_no] === 10 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={quantities[book.isbn_no] === 10}
                        >
                          +
                        </button>
                      </div>
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
                <span>
                  {cartBooks.reduce((total, book) => total + (quantities[book.isbn_no] || 1), 0)}
                </span>
              </p>
              <p className="flex justify-between text-gray-700 mb-4">
                <span>Total Price:</span>
                <span>Rs{getTotalPrice()}</span>
              </p>
              <button
                onClick={handleBuyNow}
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

