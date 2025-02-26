import React, { useState, useEffect } from 'react';
import avengersEndgame from '../assets/1movie.jpg';
import captainAmericaCivilWar from '../assets/movie2.jpeg';
import batmanDarkKnight from '../assets/3movie.jpg';
import mazerunner from '../assets/4movie.jpg';
import divergent from '../assets/5movie.jpg';
import dayAfterTomorrow from '../assets/6movie.jpeg';
import myHappyMarriage from '../assets/7movie.jpg';
import wildChild from '../assets/8movie.jpg';
import damsel from '../assets/9movie.jpeg';
import stepUp from '../assets/10movie.jpg';

const movies = [
  {
    title: "Avengers: Endgame",
    imageUrl: avengersEndgame,
    rating: "⭐9.5/10",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
  },
  {
    title: "Captain America: The Winter Soldier",
    imageUrl: captainAmericaCivilWar,
    rating: "⭐9.4 /10",
    description: "Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man, leading to an all-out battle between the two heroes."
  },
  {
    title: "Batman: The Dark Knight",
    imageUrl: batmanDarkKnight,
    rating: "⭐8.9 /10",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Maze Runner",
    imageUrl: mazerunner,
    rating: "⭐8.5/10",
    description: "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow 'runners' for a shot at escape."
  },
  {
    title: "Divergent",
    imageUrl: divergent,
    rating: "⭐8.4/10",
    description: "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late."
  },
  {
    title: "The Day After Tomorrow",
    imageUrl: dayAfterTomorrow,
    rating: "⭐8.4/10",
    description: "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age."
  },
  {
    title: "My Happy Marriage",
    imageUrl: myHappyMarriage,
    rating: "⭐8.3/10",
    description: "A heartwarming tale of an unexpected love story between two individuals bound by an arranged marriage that turns out to be much more than they ever anticipated."
  },
  {
    title: "Wild Child",
    imageUrl: wildChild,
    rating: "⭐8.1/10",
    description: "A rebellious Malibu princess is shipped off to a strict English boarding school by her father."
  },
  {
    title: "Damsel",
    imageUrl: damsel,
    rating: "⭐8.0/10",
    description: "It's the Wild West, circa 1870. Samuel Alabaster, an affluent pioneer, ventures across the American frontier to marry the love of his life, Penelope."
  },
  {
    title: "Step Up",
    imageUrl: stepUp,
    rating: "⭐7.9/10",
    description: "Tyler Gage receives the opportunity of a lifetime after vandalizing a performing arts school, gaining him the chance to earn a scholarship and dance with an up-and-coming dancer, Nora."
  },
];

export default function TopMoviesList() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsBouncing(false);
      }, 1000); // Stop bouncing after 1 second
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
  
    const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
    };
  
    const handleCloseClick = () => {
      setSelectedMovie(null);
    };
  
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white p-8">
          <h1 className="text-5xl font-bold mb-8 text-white-950 text-center animate-pulse">Top 10 Movies of All Time</h1>
          <ul className="space-y-4">
            {movies.map((movie, index) => (
              <li
                key={index}
                onClick={() => handleMovieClick(movie)}
                className={`cursor-pointer bg-rose-950 p-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-rose-700 transition-shadow duration-300 ease-in-out flex items-center ${isBouncing ? 'animate-bounce' : ''}`}
                style={{ animationDelay: `${index * 0.1}s`, width: '700px', height: '100px' }} // Adjust height as needed
              >
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-16 h-24 object-cover rounded-md mr-4" // Adjust size as needed
                />
                <span>{index + 1}. {movie.title}</span>
              </li>
            ))}
          </ul>
  
          {selectedMovie && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] text-white p-8 rounded-lg flex w-3/4 md:w-1/2 lg:w-1/2">
                <img
                  src={selectedMovie.imageUrl}
                  alt={selectedMovie.title}
                  className="w-1/3 h-auto object-cover rounded-md mr-4"
                />
                <div className="flex flex-col justify-between w-2/3">
                  <button onClick={handleCloseClick} className="self-end text-2xl font-bold mb-4">X</button>
                  <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
                  <p className="text-lg mb-4">{selectedMovie.description}</p>
                  <p className="text-lg font-semibold">Rating: {selectedMovie.rating}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }