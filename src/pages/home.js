// Home.js
import React from 'react';
import Carousel from '../components/carousel';
import Scrollspy from '../components/scroll';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-white">My Watchlist Diaries</h1>
        <p className="text-xl text-rose-600 mt-2 animate-pulse">Lights, Camera, Review 🎬🍿</p>
      </div>
      <Carousel />
      <div className="favorite-dialogue text-center mt-8">
        <div className="bg-black p-8 rounded-xl shadow-lg mt-6 mx-auto max-w-2xl">
          <h2 className="text-3xl font-cursive text-white mb-4">Favorite Dialogue of the Day</h2>
          <p className="text-2xl text-white">
            "Do you know what my love for you and this credit card have in common? They both have no limit. There’s no limit at all.” -Kang Tae Mu
          </p>
        </div>
      </div>
      <div className="mt-12"></div>
      <Scrollspy />
      <div className="mt-12"></div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-white">
          Want more reviews? Explore my other takes from the navbar and discover more gems!
        </h2>
      </div>
      <div className="mt-8"></div>
    </>
  );
};

export default Home;
