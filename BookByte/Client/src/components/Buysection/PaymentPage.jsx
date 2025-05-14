import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    address: '',
    totalPrice: 0,  // Store total price here
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (orderDetails) {
      const { quantities, books } = orderDetails;
      const book = books[0];  // Assuming you use the first book's details
      const quantity = quantities[book.isbn_no] || 1;  // Get quantity from localStorage
      const totalPrice = (quantity * book.price).toFixed(2);  // Calculate total price in INR

      setFormData((prev) => ({
        ...prev,
        quantity, // Set quantity from localStorage
        totalPrice, // Set total price from calculation
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalAmount = formData.totalPrice;  

    try {
      const response = await axios.post('http://localhost:5000/create-order', {
        amount: totalAmount,
        currency: 'INR',
        receipt: 'receipt#001',
      });

      const { id: order_id, currency, amount } = response.data;

      const options = {
        key: 'rzp_test_BkCZM2SRzRiHl4', // Replace with your Razorpay key
        amount,
        currency,
        name: 'BookByte Store',
        description: 'Book purchase',
        order_id,
        handler: function (response) {
          alert('Payment successful!');
          setOrderPlaced(true);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: '#6366f1',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Checkout</h2>

        {orderPlaced ? (
          <div className="text-green-600 text-lg font-semibold text-center">
            ✅ Payment successful! Your order has been placed.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              onChange={handleChange}
              value={formData.phone}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              min="1"
              required
              onChange={handleChange}
              value={formData.quantity}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="address"
              placeholder="Address"
              required
              onChange={handleChange}
              value={formData.address}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <div className="text-lg text-gray-700">
              <p><strong>Quantity:</strong> {formData.quantity}</p>
              <p><strong>Total Price:</strong> ₹{formData.totalPrice}</p>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Pay ₹{formData.totalPrice}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
