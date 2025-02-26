import React, { useState } from 'react';
import image1 from '../assets/am1.gif'; 
import image2 from '../assets/am2.webp'; 
import image3 from '../assets/am3.gif'; 
import image4 from '../assets/am4.gif';
import image7 from '../assets/am5.webp';

// Update the categorizedMovies object with the specified Korean and Japanese movies
const categorizedMovies = {
  'Korean Movies': [
    {
      title: 'Fabricated City',
      rating: '⭐ 7.1/10',
      smallDescription: 'A gamer is framed for murder and must uncover the truth behind the conspiracy.',
      largeDescription: 'In "Fabricated City", a down-on-his-luck gamer finds himself framed for a brutal murder. With the help of his gaming crew, he sets out on a high-stakes mission to uncover the truth and take down the real culprits. The film is a thrilling mix of action, technology, and suspense.',
      image: image1,
    },
    {
      title: 'Exhuma',
      rating: '⭐ 6.8/10',
      smallDescription: 'A detective must solve a series of murders with the help of an exhumed body.',
      largeDescription: '"Exhuma" is a chilling Korean thriller where a detective, desperate to solve a series of mysterious murders, resorts to exhuming the body of a supposed victim. As the investigation deepens, dark secrets and supernatural elements come to light, challenging the detective\'s understanding of life and death.',
      image: image2,
    },
    {
      title: 'My Lovely Angel',
      rating: '⭐ 7.2/10',
      smallDescription: 'A man bonds with a visually impaired girl after a tragic accident.',
      largeDescription: '"My Lovely Angel" is a heartwarming story of a reclusive man who finds himself caring for a visually impaired young girl after a tragic accident. As they navigate their shared grief and form an unlikely bond, the film explores themes of healing, family, and love in the face of adversity.',
      image: image3,
    },
    {
      title: 'Pawn',
      rating: '⭐ 7.6/10',
      smallDescription: 'Two debt collectors become unlikely guardians of a young girl.',
      largeDescription: '"Pawn" is a touching drama about two tough debt collectors who end up taking care of a young girl as collateral for her mother\'s debts. As they grow closer to her, they are forced to confront their own pasts and redefine what it means to be a family.',
      image: image4,
    },
  ],
  'Japanese Movies': [
    {
      title: 'My Happy Marriage',
      rating: '⭐ 8.0/10',
      smallDescription: 'A girl in a loveless marriage discovers her own strength and finds true happiness.',
      largeDescription: '"My Happy Marriage" is a beautiful Japanese drama that tells the story of a young woman trapped in a loveless marriage. Through her trials, she discovers her inner strength and resilience, ultimately finding true happiness in unexpected ways. The film is a poignant exploration of love, personal growth, and societal expectations.',
      image: image7,
    },
  ],
};

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="bg-[#4c0519] text-white m-4 p-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => onClick(movie)}>
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
      <p className="text-yellow-400">{movie.rating}</p>
      <p className="mt-2">{movie.smallDescription}</p>
    </div>
  );
};

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] text-white p-8 rounded-lg flex w-full max-w-3xl h-auto">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-1/2 h-auto object-cover rounded-md mr-4"
        />
        <div className="flex flex-col justify-between w-1/2">
          <button
            onClick={onClose}
            className="self-end text-2xl font-bold mb-4"
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
          <p className="text-lg mb-4">{movie.largeDescription}</p>
          <p className="text-lg font-semibold">
            Rating: {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

const MoviesReviewPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const filteredMovies = Object.keys(categorizedMovies).reduce((acc, category) => {
    const movies = categorizedMovies[category].filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (movies.length > 0) {
      acc[category] = movies;
    }
    return acc;
  }, {});

  return (
    <div className="bg-black p-8 min-h-screen">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl text-white animate-pulse mb-4">Asian Movie Reviews</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-md w-2/3 sm:w-1/3 bg-[#4c0519] text-white"
        />
      </div>

      {/* Iterate over the filtered categorizedMovies object */}
      {Object.keys(filteredMovies).map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl text-white mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredMovies[category].map((movie, idx) => (
              <MovieCard key={idx} movie={movie} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      ))}

      {/* Modal for showing detailed movie information */}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default MoviesReviewPage;