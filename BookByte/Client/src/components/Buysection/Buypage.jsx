import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Cards from './BookCard';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const App = () => {
  const [books, setBooks] = useState([]); // Books to be displayed
  const [loading, setLoading] = useState(true); // Loading state
  const [input, setInput] = useState(''); // Search input state
  const [suggestions, setSuggestions] = useState([]); // Book name suggestions for the search
  // const navigate = useNavigate(); // Initialize navigate function

  // Fetch recommended books from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/books?category=Recommended') // Recommended books endpoint
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  // Fetch book name suggestions based on the input
  const fetchSuggestions = (value) => {
    if (value) {
      fetch(`http://localhost:1234/bookbyte?search=${category}`) // Endpoint to search for books based on booknames
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((book) =>
            book.book_name.toLowerCase().includes(value.toLowerCase()) // Match book name with input
          );
          setSuggestions(results);
        })
        .catch((error) => {
          console.error('Error fetching book names:', error);
          setSuggestions([]); // Clear suggestions on error
        });
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  // Handle input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchSuggestions(value); // Trigger fetching book name suggestions
    if (value.length > 2) {
      setSuggestions([
        { book_name: "the diary of a young girl" },
        { book_name: "the silent patient" },
        { book_name: "you can" },
      ]);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selection of a book name suggestion
  const handleSelectSuggestion = (book) => {
    setInput(book.book_name); // Set the input field with the selected book name
    setSuggestions([]); // Clear suggestions after selection
  };

  // Handle clicking on a book card
  const handleCardClick = (isbn_no) => {
    // Navigate to the BookMainPage with the book's ISBN in the URL
    navigate(`/books/${isbn_no}`);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Navbar on the left side */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow p-8 pl-64 bg-gray-100"> {/* Added pl-64 to add space for the navbar */}
        <h1 className="text-6xl text-bold text-center font-semibold mb-8 text-gray-800">Your Stop to Buy Books </h1>

        {/* Search Bar */}
        {/* <div className="relative flex items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full max-w-xl p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={input}
            onChange={handleSearchChange} // Handle search input change
          />
          
          {/* Suggestions Dropdown 
          {suggestions.length > 0 && (
            <div className="absolute bg-white text-black w-full mt-1 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
              {suggestions.map((books) => (
                <div
                  key={books.book_name} // Assuming there's an id field in the response
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelectSuggestion(books.book_name)} // Set input to the selected book name
                >
                  {books.book_name}
                </div>
              ))}
            </div>
          )}
        </div> */}

<div className="relative w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search for books..."
        className="w-full p-4 pl-12 pr-16 bg-gradient-to-r from-indigo-900 to-gray-800 text-white border border-gray-800 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300 ease-in-out"
        value={input}
        onChange={handleSearchChange}
      />

      {/* Clear Button */}
      {input && (
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
          onClick={() => setInput('')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute bg-gray-800 text-white w-full mt-2 rounded-xl shadow-lg max-h-60 overflow-auto z-10">
          {suggestions.map((books) => (
            <div
              key={books.book_name}
              className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition duration-300 ease-in-out"
              onClick={() => handleSelectSuggestion(books.book_name)}
            >
              {books.book_name}
            </div>
          ))}
        </div>
      )}
    </div>

        {/* Book Cards (display only if books are fetched) */}
        <div className="container mx-auto py-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : books.length > 0 ? (
            <Cards books={books} onCardClick={handleCardClick} /> // Pass the handleCardClick function to the Cards component
          ) : (
            <p className="text-center text-lg text-gray-600">No recommended books available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;











