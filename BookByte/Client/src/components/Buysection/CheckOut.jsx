import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    if (onSubmitSuccess) onSubmitSuccess(formData);

    // Reset the form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      quantity: 1,
      address: '',
    });
  };

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold text-center text-teal-400 mb-6">Place Your Order</h2>
      
      {orderPlaced ? (
        <div className="text-center text-yellow-400 font-semibold text-xl">
          Order Placed Successfully! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-teal-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-teal-500"
              placeholder="123-456-7890"
              required
            />
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-300">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-teal-500"
              placeholder="123 Main St, City, Country"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;
