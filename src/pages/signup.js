import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();
  const { loginWithPopup } = useAuth0();

  const textLines = [
    "Be part of a vibrant community where movie lovers unite.",
    "Write and share your reviews, and get recommendations based on your interests.",
    "Sign up today to contribute to our ever-growing collection."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Handle sign-up logic here

    navigate('/');
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithPopup({
        connection: 'google-oauth2'
      });
      navigate('/');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('There was an error during Google sign-in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-black flex flex-col items-center justify-center p-6 md:p-8 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:absolute md:top-68">
          Join Our Review Community!
        </h1>
        <div className="text-white space-y-4 text-center mt-4 md:mt-16">
          <p>{textLines[textIndex]}</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] flex items-center justify-center p-6 md:p-8">
        <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center animate-pulse">Sign Up</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-rose-950 text-white focus:outline-none focus:border-rose-500 transition-colors"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-rose-950 text-white focus:outline-none focus:border-rose-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-rose-950 text-white focus:outline-none focus:border-rose-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-rose-950 text-white font-semibold hover:bg-rose-700 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-white mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="py-2 px-4 bg-rose-950 rounded-lg hover:bg-rose-700 transition-colors duration-300"
            >
              Sign Up with Google
            </button>
          </div>

          <p className="text-center text-white">
            Already have an account?{' '}
            <Link to="/signin" className="text-rose-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
