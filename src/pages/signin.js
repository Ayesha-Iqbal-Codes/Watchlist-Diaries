import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const textLines = [
    "Explore a vast collection of movies and TV shows.",
    "Share your thoughts and read reviews from other movie enthusiasts.",
    "Join our community to discover hidden gems."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to home if already authenticated
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      await loginWithRedirect({
        email,
        password
      });

      // Redirect to home page after successful sign-in
      navigate('/');
    } catch (error) {
      console.error('Sign-in failed', error);
      alert('Sign-in failed. Please check your credentials and try again.');
    }
  };

  const handleGoogleSignIn = () => {
    loginWithRedirect({
      connection: 'google-oauth2',
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Review Text */}
      <div className="w-1/2 bg-black flex flex-col items-center justify-center p-8 relative">
        <h1 className="text-4xl font-bold text-white absolute top-68">
          Welcome to My Watchlist Diaries!
        </h1>
        <div className="mt-16 text-white space-y-4">
          <p>{textLines[textIndex]}</p>
        </div>
      </div>
      {/* Right Side - Sign In Form */}
      <div className="w-1/2 bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] flex items-center justify-center p-8">
        <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-white text-center animate-pulse">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign In
            </button>
          </form>

          <div className="text-center text-white mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="py-2 px-4 bg-rose-950 rounded-lg hover:bg-rose-700 transition-colors duration-300"
            >
              Sign In with Google
            </button>
          </div>
          <p className="text-center text-white">
            Don't have an account?{' '}
            <Link to="/signup" className="text-rose-500 hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
