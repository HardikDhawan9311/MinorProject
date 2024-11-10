import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '', // Added address field
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true); // Show the success message after form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 to-gray-800">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-teal-400 mb-6">Place Your Order</h2>

        {orderPlaced ? (
          <div className="text-center text-yellow-400 font-semibold text-xl">
            Order Placed Successfully! 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="youremail@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                Shipping Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-4 mt-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="123 Main St, City, Country"
                required
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-4 rounded-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
