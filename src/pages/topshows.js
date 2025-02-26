import React, { useState, useEffect } from 'react';
import alchemyOfSouls from '../assets/1show.jpg';  
import aliceInBorderland from '../assets/2show.jpg';  
import arthdalChronicles from '../assets/3show.jpg';  
import onePiece from '../assets/4show.jpg';  
import vampireDiaries from '../assets/5show,jpg.webp';  
import theGoodBadMother from '../assets/6show.jpg';  
import wednesday from '../assets/7show.jpg';  
import suits from '../assets/8show.jpg';  
import supernatural from '../assets/9show.jpg';  
import whileYouWereSleeping from '../assets/1show.jpg';  

const tvShows = [
  {
    title: "Alchemy of Souls",
    imageUrl: alchemyOfSouls,
    rating: "⭐9.2/10",
    description: "A story set in a fictional world where souls can be exchanged and a young woman’s life changes dramatically after a fateful encounter with a lost soul."
  },
  {
    title: "Alice in Borderland",
    imageUrl: aliceInBorderland,
    rating: "⭐8.8/10",
    description: "A group of friends finds themselves in a parallel Tokyo where they must compete in deadly games to survive."
  },
  {
    title: "Arthdal Chronicles",
    imageUrl: arthdalChronicles,
    rating: "⭐8.7/10",
    description: "Set in ancient times, this epic fantasy drama follows the story of the struggle for power in the mythical land of Arth."
  },
  {
    title: "One Piece",
    imageUrl: onePiece,
    rating: "⭐8.6/10",
    description: "The adventures of Monkey D. Luffy and his pirate crew in their quest to find the legendary One Piece treasure."
  },
  {
    title: "Vampire Diaries",
    imageUrl: vampireDiaries,
    rating: "⭐8.5/10",
    description: "A supernatural drama about a teenage girl caught in a love triangle between two vampire brothers in a town full of other supernatural beings."
  },
  {
    title: "The Good Bad Mother",
    imageUrl: theGoodBadMother,
    rating: "⭐8.3/10",
    description: "A heartwarming story of a mother and her relationship with her son exploring themes of family and personal growth."
  },
  {
    title: "Wednesday",
    imageUrl: wednesday,
    rating: "⭐8.2/10",
    description: "A dark comedy series following the adventures of Wednesday Addams as a student at Nevermore Academy."
  },
  {
    title: "Suits",
    imageUrl: suits,
    rating: "⭐8.2/10",
    description: "A legal drama about a college drop-out who starts practicing law with a brilliant lawyer, despite never having attended law school."
  },
  {
    title: "Supernatural",
    imageUrl: supernatural,
    rating: "⭐8.1/10",
    description: "Two brothers hunt demons, ghosts, and other supernatural beings as they travel across the country in their quest to find their missing father and uncover the truth behind their family’s mysterious past."
  },
  {
    title: "While You Were Sleeping",
    imageUrl: whileYouWereSleeping,
    rating: "⭐8.0/10",
    description: "A romantic drama about a woman who can see future events in her dreams and a prosecutor who tries to change the fate revealed in those dreams."
  },
];

export default function TopTVShowsList() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [selectedShow, setSelectedShow] = useState(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsBouncing(false);
      }, 1000); // Stop bouncing after 1 second
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
  
    const handleShowClick = (show) => {
      setSelectedShow(show);
    };
  
    const handleCloseClick = () => {
      setSelectedShow(null);
    };
  
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white p-8">
          <h1 className="text-5xl font-bold mb-8 text-white-950 text-center animate-pulse">Top 10 TV Shows of All Time</h1>
          <ul className="space-y-4">
            {tvShows.map((show, index) => (
              <li
                key={index}
                onClick={() => handleShowClick(show)}
                className={`cursor-pointer bg-rose-950 p-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-rose-700 transition-shadow duration-300 ease-in-out flex items-center ${isBouncing ? 'animate-bounce' : ''}`}
                style={{ animationDelay: `${index * 0.1}s`, width: '700px', height: '100px' }} // Adjust height as needed
              >
                <img
                  src={show.imageUrl}
                  alt={show.title}
                  className="w-16 h-24 object-cover rounded-md mr-4" // Adjust size as needed
                />
                <span>{index + 1}. {show.title}</span>
              </li>
            ))}
          </ul>
  
          {selectedShow && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-1">
              <div className="bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] text-white p-8 rounded-lg flex w-3/4 md:w-1/2 lg:w-1/2">
                <img
                  src={selectedShow.imageUrl}
                  alt={selectedShow.title}
                  className="w-1/3 h-auto object-cover rounded-md mr-4"
                />
                <div className="flex flex-col justify-between w-2/3">
                  <button onClick={handleCloseClick} className="self-end text-2xl font-bold mb-4">X</button>
                  <h2 className="text-2xl font-bold mb-4">{selectedShow.title}</h2>
                  <p className="text-lg mb-4">{selectedShow.description}</p>
                  <p className="text-lg font-semibold">Rating: {selectedShow.rating}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
