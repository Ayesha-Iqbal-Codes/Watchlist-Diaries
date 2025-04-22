import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4 text-lg font-semibold">
          Built with <span className="text-red-500">❤️</span> for drama lovers
        </section>
      </div>
      <div className="text-center p-3 bg-opacity-20 bg-black">
        © 2024 My Watchlist Diaries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
