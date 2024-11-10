// import React from 'react';
import chatimg from '../../assets/chatimg.gif';

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl p-6 flex flex-col">
        <h2 className="text-2xl font-semibold mb-6 text-center">ChatApp</h2>
        <ul className="space-y-4 flex flex-col items-start">
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Home
            </button>
          </li>
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Create Room
            </button>
          </li>
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Privacy Policy
            </button>
          </li>
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Terms and Conditions
            </button>
          </li>
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Help Center
            </button>
          </li>
          <li>
            <button className="w-full hover:bg-blue-700 px-4 py-2 rounded-lg transition-all text-lg">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto bg-white rounded-lg shadow-lg m-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to ChatApp</h1>
        </div>

        {/* Homepage Content */}
        <div className="flex justify-center mt-8">
          <img src={chatimg} alt="chat animation" className="w-9/12 h-9/12 rounded-[30px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
