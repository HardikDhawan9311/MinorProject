import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import chatimg from '../../assets/chatimg.gif';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
        
        <div className="w-1/4 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl p-6 flex flex-col">
          <div className="flex items-center justify-start mb-12">
            <ArrowLeftIcon 
              className="h-10 w-10 text-white cursor-pointer hover:text-indigo-300 transform transition-transform duration-300 ease-in-out"
              onClick={() => navigate('/')} 
            />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-center">ChatApp</h2>
          <ul className="space-y-4 flex flex-col items-start">
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/chat')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/create-room')}
              >
                Create Room
              </button>
            </li>
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/privacy-policy')}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/terms-conditions')}
              >
                Terms and Conditions
              </button>
            </li>
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/help-center')}
              >
                Help Center
              </button>
            </li>
            <li>
              <button 
                className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg"
                onClick={() => navigate('/logout')}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        
        <div className="flex-1 p-8 overflow-y-auto bg-white rounded-lg shadow-lg m-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to ChatApp</h1>
          </div>

          
          <div className="flex justify-center mt-8">
            <img src={chatimg} alt="chat animation" className="w-9/12 h-9/12 rounded-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
