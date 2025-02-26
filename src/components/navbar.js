// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FilmIcon } from '@heroicons/react/24/outline';
import logo from "../assets/logo.webp";
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';

const Navbar = () => {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isTvShowsOpen, setIsTvShowsOpen] = useState(false);
  const [isSpecialListsOpen, setIsSpecialListsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white p-2 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-4" />
          
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>

            {/* Movies Dropdown */}
            <div className="relative">
              <button onClick={() => setIsMoviesOpen(!isMoviesOpen)} className="hover:text-gray-200">
                Movies
              </button>
              {isMoviesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg">
                  <Link to="/hollymovie" className="block px-4 py-2 hover:text-gray-300">Hollywood Movies</Link>
                  <Link to="/asianmovie" className="block px-4 py-2 hover:text-gray-300">Asian Movies</Link>
                </div>
              )}
            </div>

            {/* TV Shows Dropdown */}
            <div className="relative">
              <button onClick={() => setIsTvShowsOpen(!isTvShowsOpen)} className="hover:text-gray-200">
                TV Shows
              </button>
              {isTvShowsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg">
                  <Link to="/tvshow" className="block px-4 py-2 hover:text-gray-300">American Shows</Link>
                  <Link to="/dramas" className="block px-4 py-2 hover:text-gray-300">Asian Dramas</Link>
                </div>
              )}
            </div>

            {/* Special Lists Dropdown */}
            <div className="relative">
              <button onClick={() => setIsSpecialListsOpen(!isSpecialListsOpen)} className="hover:text-gray-200">
                Special Lists
              </button>
              {isSpecialListsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg z-50">
                  <Link to="/topmovies" className="block px-4 py-2 hover:text-gray-300">Top Ten Movies</Link>
                  <Link to="/topshows" className="block px-4 py-2 hover:text-gray-300">Top Ten TV Shows</Link>
                </div>
              )}
            </div>
            
            <Link to="/getintouch" className="hover:text-gray-200">Get in Touch</Link>
            <Link to="/wishlist" className="text-white hover:text-gray-200">
              <FilmIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Sign In/Sign Up or Profile Picture with Dropdown */}
        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="focus:outline-none"
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg z-50">
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block w-full text-left px-4 py-2 hover:bg-rose-800 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleSignInClick}
              className="bg-rose-950 text-white px-4 py-2 rounded-lg hover:bg-rose-800 transition-colors"
            >
              Sign In/Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
