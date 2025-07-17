import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isTvShowsOpen, setIsTvShowsOpen] = useState(false);
  const [isSpecialListsOpen, setIsSpecialListsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();
  const mobileMenuRef = useRef();

  const handleSignInClick = () => {
    navigate('/signup');
  };

  const toggleMenu = (menuSetter) => {
    menuSetter((prev) => !prev);
    setTimeout(() => {
      menuSetter(false);
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('[data-toggle="mobile-menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white p-2 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </Link>

        <div className="hidden lg:flex items-center w-full">
          <div className="flex-1 flex justify-center items-center space-x-6 text-lg">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>

            <div className="relative">
              <button onClick={() => toggleMenu(setIsMoviesOpen)} className="hover:text-gray-200">Movies</button>
              {isMoviesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg z-50">
                  <Link to="/hollymovie" className="block px-4 py-2 hover:text-gray-300">Hollywood Movies</Link>
                  <Link to="/asianmovie" className="block px-4 py-2 hover:text-gray-300">Asian Movies</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => toggleMenu(setIsTvShowsOpen)} className="hover:text-gray-200">TV Shows</button>
              {isTvShowsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg z-50">
                  <Link to="/tvshow" className="block px-4 py-2 hover:text-gray-300">American Shows</Link>
                  <Link to="/dramas" className="block px-4 py-2 hover:text-gray-300">Asian Dramas</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => toggleMenu(setIsSpecialListsOpen)} className="hover:text-gray-200">Special Lists</button>
              {isSpecialListsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-white rounded-md shadow-lg z-50">
                  <Link to="/topmovies" className="block px-4 py-2 hover:text-gray-300">Top Ten Movies</Link>
                  <Link to="/topshows" className="block px-4 py-2 hover:text-gray-300">Top Ten TV Shows</Link>
                </div>
              )}
            </div>

            <Link to="/community-reviews" className="hover:text-gray-200">Community Reviews</Link>
          </div>

          <div className="ml-auto">
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => toggleMenu(setIsProfileMenuOpen)}>
                  <img src={user.picture} alt="User" className="w-10 h-10 rounded-full" />
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

        <button
          className="lg:hidden z-50 relative text-white"
          data-toggle="mobile-menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen((prev) => !prev);
          }}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-[#3c0d15] px-6 py-4 text-white space-y-2">
          <Link to="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/hollymovie" className="block" onClick={() => setIsMobileMenuOpen(false)}>Hollywood Movies</Link>
          <Link to="/asianmovie" className="block" onClick={() => setIsMobileMenuOpen(false)}>Asian Movies</Link>
          <Link to="/tvshow" className="block" onClick={() => setIsMobileMenuOpen(false)}>American Shows</Link>
          <Link to="/dramas" className="block" onClick={() => setIsMobileMenuOpen(false)}>Asian Dramas</Link>
          <Link to="/topmovies" className="block" onClick={() => setIsMobileMenuOpen(false)}>Top Ten Movies</Link>
          <Link to="/topshows" className="block" onClick={() => setIsMobileMenuOpen(false)}>Top Ten TV Shows</Link>
          <Link to="/community-reviews" className="block" onClick={() => setIsMobileMenuOpen(false)}>Community Reviews</Link>

          {isAuthenticated ? (
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-sm text-white hover:text-red-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                handleSignInClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-rose-900 text-white px-3 py-1 rounded text-sm hover:bg-rose-700"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
