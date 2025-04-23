import React from 'react';
import './about.css'; 
import yourImage from '../assets/about.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={yourImage} alt="Your Name" className="profile-pic" />
        <div className="about-text-box">
          <h1 className="about-title">Welcome to My Watchlist Diaries!!</h1>
          <p className="about-text">
  🌟 Annyong, Konichiwa, Sawadee-khap! 🌟 I'm Ayesha, a dedicated binge-watcher and your go-to for reviews on K-Dramas, J-Dramas, and American shows and movies. From heart-fluttering K-Dramas to captivating J-Dramas and the latest American blockbusters, I dive deep into every genre and share my thoughts with enthusiasm.  Grab your snacks 🎬🍿 and join me as we explore the best of cinema and TV together!
</p>

        </div>
      </div>
      <div className="film-strip">
        <a href="/topmovies" className="film-frame" title="Top Movies">🎥</a>
        <a href="/topshows" className="film-frame" title="Top Tv Shows">📺</a>
        <a href="/getintouch" className="film-frame" title="Contact Me">🎬</a>
      </div>
    </div>
  );
};

export default About;
