import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes, useLocation } from 'react-router-dom';

import HollyMovie from './pages/hollymovie';
import AsianMovie from './pages/asianmovie';
import TvShow from './pages/tvshow';
import AsianDramas from './pages/dramas';
import TopMovies from './pages/topmovies';
import TopShows from './pages/topshows';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/home';
import ReviewPage from './pages/reviewpage'; 
import './App.css';

const App = () => {
  const location = useLocation();
  const hideNavbarAndFooter = ['/signin', '/signup'].includes(location.pathname);

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <div className="bg-black min-h-screen">
        <Analytics /> 
        {!hideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/hollymovie" element={<HollyMovie />} />
          <Route path="/asianmovie" element={<AsianMovie />} />
          <Route path="/tvshow" element={<TvShow />} />
          <Route path="/dramas" element={<AsianDramas />} />
          <Route path="/topmovies" element={<TopMovies />} />
          <Route path="/topshows" element={<TopShows />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community-reviews" element={<ReviewPage />} />
        </Routes>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </Auth0Provider>
  );
};

export default App;
