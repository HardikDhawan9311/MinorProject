// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// const Navbar = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="w-64 h-screen bg-gray-200 p-4 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//                 <ArrowLeftIcon 
//                     className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500"
//                     onClick={() => navigate('/')} 
//                 />
//             </div>
//             <ul className="space-y-2">
//                 <li className="hover:text-blue-500 cursor-pointer">Recommended</li>
//                 <li className="hover:text-blue-500 cursor-pointer">Most Read</li>
//                 <li className="hover:text-blue-500 cursor-pointer">Must Read</li>
//                 <li className="hover:text-blue-500 cursor-pointer">People's Choice</li>
//                 <li className="hover:text-blue-500 cursor-pointer">New Arrivals</li>
//             </ul>
//         </div>
//     );
// };

// export default Navbar;












import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gradient-to-r from-indigo-900 to-gray-800 p-8 rounded-lg shadow-xl z-50">
            {/* Header with Back Button */}
            <div className="flex items-center justify-start mb-12">
                <ArrowLeftIcon 
                    className="h-10 w-10 text-white cursor-pointer hover:text-indigo-300 transform transition-transform duration-300 ease-in-out"
                    onClick={() => navigate('/')} 
                />
            </div>

            {/* Navigation Links */}
            <ul className="space-y-6 text-white font-semibold">
                <li className="hover:text-indigo-300 cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out">Recommended</li>
                <li className="hover:text-indigo-300 cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out">Most Read</li>
                <li className="hover:text-indigo-300 cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out">Must Read</li>
                <li className="hover:text-indigo-300 cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out">People's Choice</li>
                <li className="hover:text-indigo-300 cursor-pointer hover:translate-x-2 transform transition-all duration-300 ease-in-out">New Arrivals</li>
            </ul>

            {/* Footer Section (Optional) */}
            <div className="mt-64">
                <p className="text-white text-sm text-center opacity-80">Transform your reading experience</p>
            </div>
        </div>
    );
};

export default Navbar;
