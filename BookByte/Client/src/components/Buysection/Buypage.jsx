import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './Navbar';
import Cards from './BookCard';

const App = () => {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [input, setInput] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 
  const navigate = useNavigate(); 

  
  useEffect(() => {
    fetch('http://localhost:5000/api/books?category=Recommended') 
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


  const fetchSuggestions = (value) => {
    if (value) {
      fetch(`http://localhost:5000/api/books?search=${value}`) 
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((book) =>
            book.book_name.toLowerCase().includes(value.toLowerCase()) 
          );
          setSuggestions(results);
        })
        .catch((error) => {
          console.error('Error fetching book names:', error);
          setSuggestions([]); 
        });
    } else {
      setSuggestions([]); 
    }
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchSuggestions(value); 
  };

  
  const handleSelectSuggestion = (book) => {
    setInput(book.book_name); 
    setSuggestions([]); 
    navigate(`/books/${book.isbn_no}`, { state: { book } }); 
  };

 
  const handleCardClick = (isbn_no) => {
    navigate(`/books/${isbn_no}`); 
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
     
      <Navbar />

     
      <div className="flex-grow p-8 pl-64 bg-gray-100">
        <h1 className="text-6xl text-bold text-center font-semibold mb-8 text-gray-800">Your Stop to Buy Books</h1>

        
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full p-4 pl-12 pr-16 bg-gradient-to-r from-indigo-900 to-gray-800 text-white border border-gray-800 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300 ease-in-out"
            value={input}
            onChange={handleSearchChange}
          />

        
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

          
          {suggestions.length > 0 && (
            <div className="absolute bg-gray-800 text-white w-full mt-2 rounded-xl shadow-lg max-h-60 overflow-auto z-10">
              {suggestions.map((book) => (
                <div
                  key={book.isbn_no}
                  className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => handleSelectSuggestion(book)}
                >
                  {book.book_name}
                </div>
              ))}
            </div>
          )}
        </div>

        
        <div className="container mx-auto py-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : books.length > 0 ? (
            <Cards books={books} onCardClick={handleCardClick} />
          ) : (
            <p className="text-center text-lg text-gray-600">No recommended books available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

