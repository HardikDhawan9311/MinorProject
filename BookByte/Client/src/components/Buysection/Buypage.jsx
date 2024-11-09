import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import Navbar as a separate component
import { FaStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{book.name}</h3>
            <p className="text-gray-600 mb-1"><strong>Genre:</strong> {book.genre}</p>
            <p className="text-gray-600 mb-1"><strong>Publisher:</strong> {book.publisher}</p>
            <p className="text-gray-600 mb-1"><strong>Edition:</strong> {book.edition}</p>
            <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books data from the API
        const fetchBooks = async () => {
            try {
                const response = await fetch('/api/books'); // Update with your actual API endpoint
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="flex">
            {/* Navbar on the left side */}
            <Navbar />

            {/* Main Content Area */}
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Buy Section</h1>

                {/* Book list section */}
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

