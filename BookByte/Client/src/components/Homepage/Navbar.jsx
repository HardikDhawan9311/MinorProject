import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';

const Navbar = ({ isAuthenticated, userName }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav className="relative p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="h-30 w-40">
            <img src={Logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-20 items-center text-l">
            <li className="text-white hover:text-gray-300">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="/buypage">Buy</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="/chat">Chat</a>
            </li>
          </ul>

          {/* User Info or Sign In and Login Buttons */}
          <div className="flex space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                {/* User Avatar */}
                <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white">
                  {/* This could be replaced with an actual avatar */}
                  {userName.charAt(0).toUpperCase()}
                </div>
                {/* Username */}
                <span className="text-white">{userName}</span>
              </div>
            ) : (
              <>
                <button
                  className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-yellow-300 hover:text-gray-800"
                  onClick={() => setShowLoginForm(false)}
                >
                  <a href="/Signup">Sign up</a>
                </button>
                <button
                  className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-yellow-300"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-20">
          <div className="relative bg-white p-12 rounded-lg shadow-2xl max-w-md w-full transition-transform transform hover:scale-105 duration-300">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-3xl mb-6 font-semibold text-center text-gray-800">Login</h2>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium">Email:</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium">Password:</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              {/* Forget Password Link */}
              <div className="text-right mb-6">
                <a href="/forgot-password" className="text-blue-500 underline text-sm hover:text-blue-700">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-yellow-300 text-gray-800 w-full py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Submit
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Create Your Account?{' '}
              <a href="/signup" className="text-blue-500 underline">
                Sign up here!
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
