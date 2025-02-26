import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]); // For GET request data
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login status

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/items'); // Example GET request
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Simulate checking login status
    const checkLoginStatus = () => {
      // Example check, you might replace this with actual logic
      const loggedIn = true; // Change this based on your auth logic
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('You must be logged in to submit a review.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9000/api/contact/submit', {
        name,
        email,
        message,
      });

      alert(response.data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#4c0519] p-10 rounded-lg shadow-lg w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Get in Touch</h1>
        <p className="text-gray-300 mb-6 text-center">
          Have thoughts on a movie or TV show? We'd love to hear from you! Share your reviews, recommendations, or feedback.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label className="block text-sm font-medium text-gray-200">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-white text-black"
              placeholder="Your Name"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label className="block text-sm font-medium text-gray-200">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-white text-black"
              placeholder="Your Email"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label className="block text-sm font-medium text-gray-200">Your Review/Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-white text-black"
              placeholder="Share your thoughts on a movie or TV show..."
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-4 py-2 bg-rose-900 text-white font-semibold rounded-md shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Submit Review
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
