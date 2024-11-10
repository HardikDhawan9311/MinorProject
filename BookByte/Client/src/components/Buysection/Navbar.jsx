import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-64 h-screen bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <ArrowLeftIcon 
                    className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500"
                    onClick={() => navigate('/')} 
                />
            </div>
            <ul className="space-y-2">
                <li className="hover:text-blue-500 cursor-pointer">Recommended</li>
                <li className="hover:text-blue-500 cursor-pointer">Most Read</li>
                <li className="hover:text-blue-500 cursor-pointer">Must Read</li>
                <li className="hover:text-blue-500 cursor-pointer">People's Choice</li>
                <li className="hover:text-blue-500 cursor-pointer">New Arrivals</li>
            </ul>
        </div>
    );
};

export default Navbar;
