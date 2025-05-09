import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Background from './Background';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));

        localStorage.setItem('username', response.data.user.username);
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      setLoginError(error.response?.data?.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Background />
      <div className="bg-white p-12 rounded-lg shadow-2xl max-w-md w-full transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl mb-6 font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">Username:</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
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
          {loginError && <p className="text-red-500 mt-4 text-center">{loginError}</p>}
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 underline">
            Sign up here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
