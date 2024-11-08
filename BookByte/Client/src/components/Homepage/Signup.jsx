import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Background  from './Background'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/signup', {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        });
        
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect to the homepage after successful registration
        navigate('/');
      } catch (error) {
        console.error('There was an error registering the user!', error);
        if (error.response && error.response.data && error.response.data.error) {
          setServerError(error.response.data.error);
        } else {
          setServerError('An unexpected error occurred.');
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Background />
      <div className="relative bg-white p-10 rounded-lg shadow-xl w-full max-w-lg">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleCancel}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">CREATE ACCOUNT</h2>
        {serverError && <p className="text-red-500 text-sm mb-4">{serverError}</p>}
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number (optional)"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <div
              className="absolute inset-y-1 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <EyeSlashIcon className="h-6 w-6 text-gray-500" />
              )}
            </div>
          </div>
          <div className="mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold hover:from-purple-500 hover:to-blue-600 transition duration-300"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
