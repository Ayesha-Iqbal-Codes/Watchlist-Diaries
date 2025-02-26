import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-[#2d030f] to-[#4c0519] text-center text-white"> {/* Gradient Footer */}
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1 inline-flex items-center justify-center p-2"
            href="https://www.facebook.com/Ayesha00O"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
    
          <a
            className="btn btn-outline-light btn-floating m-1 inline-flex items-center justify-center p-2"
            href="https://www.instagram.com/ash_ayeshaa/?hl=en"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
    
          <a
            className="btn btn-outline-light btn-floating m-1 inline-flex items-center justify-center p-2"
            href="#!"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
    
          <a
            className="btn btn-outline-light btn-floating m-1 inline-flex items-center justify-center p-2"
            href="https://github.com/Ayesha-Iqbal-Codes"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </section>
      </div>
      <div className="text-center p-3 bg-opacity-20 bg-black">
        © 2024 My Watchlist Diaries. All rights reserved.
      </div>
    </footer>
    
      
    );
};

export default Footer;
