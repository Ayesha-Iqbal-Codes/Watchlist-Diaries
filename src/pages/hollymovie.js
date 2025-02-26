import React, { useState } from 'react';
import image1 from '../assets/hm.jpeg'; // Doctor Strange
import image2 from '../assets/hm2.avif'; // Shutter Island
import image4 from '../assets/4I6r.gif'; // Maleficent
import image5 from '../assets/hm6.gif';
import image6 from '../assets/hm5.gif';
import image7 from '../assets/hm7.gif';
import image8 from '../assets/hm8.gif';
import image9 from '../assets/hm9.gif';
import image10 from '../assets/hm10.gif';
import image11 from '../assets/hm11.gif';
import image12 from '../assets/hm3.webp';
import image13 from '../assets/hm13.gif';
import image14 from '../assets/hm14.gif';
import image15 from '../assets/hm15.gif';
import image16 from '../assets/hm16.gif';
import image17 from '../assets/hm17.gif';
import image18 from '../assets/hm18.gif';
import image19 from '../assets/hm19.gif';
import image20 from '../assets/hm20.gif';


const categorizedMovies = {
  'Action': [
    {
      title: 'Captain America: Civil War',
      rating: '⭐ 8.7/10',
      smallDescription: 'Political involvement in the Avengers\' activities causes a rift between Captain America and Iron Man.',
      largeDescription: 'Captain America: Civil War sees the Avengers torn apart by political interference, leading to a conflict between Captain America (Chris Evans) and Iron Man (Robert Downey Jr.). The film explores themes of loyalty, justice, and the consequences of power. Packed with action and emotional depth, this movie is a pivotal point in the Marvel Cinematic Universe.',
      image: image5,
    },
    {
      title: 'Maze Runner',
      rating: '⭐ 7.5/10',
      smallDescription: 'A group of boys, with no memories of their past lives, must escape a massive maze.',
      largeDescription: 'Maze Runner follows Thomas (Dylan O\'Brien) as he and other boys, with no memory of their past, try to escape from a massive, ever-changing maze. The film blends suspense, action, and mystery, revealing dark truths about the world outside the maze as they uncover the real purpose of their entrapment.',
      image: image6,
    },
    {
      title: 'Kingsman',
      rating: '⭐ 7.7/10',
      smallDescription: 'A spy organization recruits a promising street kid into the agency’s ultra-competitive training program.',
      largeDescription: 'Kingsman is a stylish and action-packed film that follows Eggsy (Taron Egerton), a street kid recruited into a secret spy organization. As he undergoes intense training, he uncovers a global threat that only he and his mentor can stop. The film is known for its unique blend of action, humor, and slick cinematography.',
      image: image7,
    },
    {
      title: 'Avengers: Endgame',
      rating: '⭐ 8.4/10',
      smallDescription: 'The Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      largeDescription: 'Avengers: Endgame is the epic conclusion to the Infinity Saga, where the Avengers, reeling from the aftermath of Thanos’ snap, attempt to reverse the decimation and restore balance to the universe. This film is a culmination of over a decade of storytelling, filled with emotional moments, intense action, and the ultimate showdown between good and evil.',
      image: image8,
    }
  ],
  'Fantasy': [
    {
      title: 'Harry Potter and the Deathly Hallows: Part 2',
      rating: '⭐ 8.1/10',
      smallDescription: 'The final battle between Harry Potter and Lord Voldemort takes place as the fate of the wizarding world hangs in the balance.',
      largeDescription: 'In the epic conclusion of the Harry Potter series, Harry (Daniel Radcliffe) faces off against Lord Voldemort (Ralph Fiennes) in a final showdown that determines the fate of the wizarding world. With stunning visual effects, powerful performances, and an emotionally charged storyline, this film is a fitting end to one of the most beloved franchises in cinematic history.',
      image: image9,
    },
    {
      title: 'Shadowhunter',
      rating: '⭐ 6.8/10',
      smallDescription: 'A young woman discovers that she is a descendant of a long line of Shadowhunters, human-angel hybrids who hunt demons.',
      largeDescription: 'Shadowhunter tells the story of Clary Fray (Lily Collins), who discovers she is part of a secret race of human-angel hybrids known as Shadowhunters, tasked with hunting demons. The film delves into a world of magic, danger, and forbidden love, drawing viewers into a battle between good and evil that spans generations.',
      image: image10,
    },
    {
      title: 'Damsel',
      rating: '⭐ 6.2/10',
      smallDescription: 'A young princess embarks on a perilous journey to save herself from a dragon.',
      largeDescription: 'Damsel follows the story of a young princess who must rely on her wits and courage to survive when she is sacrificed to a dragon. The film offers a unique twist on the classic fairy tale, blending fantasy, action, and a strong female lead to deliver an engaging story.',
      image: image11,
    },
    {
      title: 'Snow White and the Huntsman',
      rating: '⭐ 6.1/10',
      smallDescription: 'A huntsman is ordered to take Snow White into the woods to be killed, but ends up becoming her protector.',
      largeDescription: 'Snow White and the Huntsman retells the classic story of Snow White, with a darker and more action-packed twist. Starring Kristen Stewart as Snow White and Chris Hemsworth as the Huntsman, the film explores themes of power, betrayal, and the battle between good and evil, all set in a visually stunning world.',
      image: image12,
    },
    {
      title: 'Maleficent',
      rating: '⭐ 8.0/10',
      smallDescription: 'A reimagining of the classic tale of Sleeping Beauty, told from the perspective of the iconic villainess, Maleficent. This fresh take reveals her  motivations and the events that led to her transformation.',
      largeDescription: 'Maleficent delves into the untold story of one of Disney’s most iconic villains, revealing the events that hardened her heart against the world. As a young fairy, Maleficent (Angelina Jolie) falls in love with a human, only to be betrayed. Driven by revenge, she curses the king’s newborn daughter, Aurora (Elle Fanning). The film explores themes of love, betrayal, and redemption, featuring stunning visuals and a powerful performance by Jolie that adds depth to the character and challenges traditional notions of good and evil.',
      image: image4,
    },
    {
      title: 'Doctor Strange in the Multiverse of Madness',
      rating: '⭐ 8.2/10',
      smallDescription: 'Doctor Strange navigates the multiverse and confronts a powerful foe, facing the consequences of his past actions in this thrilling sequel.',
      largeDescription: 'In this mind-bending sequel, Doctor Strange, played by Benedict Cumberbatch, battles across alternate realities when his ally, Wanda Maximoff (Elizabeth Olsen), is consumed by chaos. As Strange races against time to prevent disaster, the film explores themes of regret, responsibility, and the darker sides of magic. With stunning visuals and a gripping storyline, Doctor Strange in the Multiverse of Madness redefines superhero storytelling through a blend of horror and action.',
      image: image1,
    },
    {
      title: 'Shutter Island\n',
      rating: '⭐ 9/10',
      smallDescription: 'U.S. Marshal Teddy Daniels investigates a psychiatric facility on Shutter Island, uncovering unsettling truths that challenge his sanity. He is forced to confront his own psychological struggles.',
      largeDescription: 'Directed by Martin Scorsese, Shutter Island stars Leonardo DiCaprio as U.S. Marshal Teddy Daniels, who investigates a patient’s disappearance from a mental institution. As he delves deeper into the case, Daniels confronts his traumatic past and uncovers dark secrets within the facility. This psychological thriller builds suspense and tension, leading viewers on a rollercoaster filled with unexpected twists and haunting revelations about the human mind.',
      image: image2,
    }

  ],
  'Drama': [
    {
      title: 'Good Will Hunting',
      rating: '⭐ 9.0/10',
      smallDescription: 'A janitor at MIT has a gift for mathematics but needs help from a psychologist to find direction in his life.',
      largeDescription: 'Good Will Hunting follows the story of Will (Matt Damon), a genius working as a janitor at MIT, who is discovered by Professor Gerald Lambeau (Stellan Skarsgård) and is later guided by psychologist Sean Maguire (Robin Williams). The film explores themes of identity, the impact of trauma, and the power of human connection, delivering one of the most memorable performances in cinema history.',
      image: image13,
    },
    {
      title: 'The Princess Diaries',
      rating: '⭐ 6.3/10',
      smallDescription: 'A teenager discovers that she is the heir to the throne of a European kingdom.',
      largeDescription: 'The Princess Diaries stars Anne Hathaway as Mia Thermopolis, a shy teenager who discovers she is the heir to the throne of the fictional kingdom of Genovia. Guided by her grandmother, Queen Clarisse Renaldi (Julie Andrews), Mia must navigate the trials of adolescence while learning what it means to be a princess. The film is a charming mix of humor, romance, and coming-of-age themes.',
      image: image14,
    },
    {
      title: 'Mrs. Harris Goes to Paris',
      rating: '⭐ 7.4/10',
      smallDescription: 'A widowed cleaning lady in 1950s London falls in love with a couture Dior dress and decides to buy one for herself.',
      largeDescription: 'Mrs. Harris Goes to Paris is a delightful drama about a widowed cleaning lady who embarks on an adventure to Paris to buy a couture Dior dress. The film is a heartwarming story of dreams, determination, and the joy of pursuing one’s passion, set against the backdrop of post-war Europe.',
      image: image15,
    },
    {
      title: 'Little Women',
      rating: '⭐ 8.0/10',
      smallDescription: 'Four sisters come of age in America in the aftermath of the Civil War.',
      largeDescription: 'Little Women is a timeless story of sisterhood, following the lives of the March sisters as they grow up in post-Civil War America. The film captures the challenges and joys of their journey, offering a poignant exploration of love, family, and the pursuit of one’s dreams, with an outstanding cast that brings this classic tale to life.',
      image: image16,
    }
  ],
  'Romance': [
    {
      title: 'Cinderella',
      rating: '⭐ 7.0/10',
      smallDescription: 'A young woman living in oppression receives a magical opportunity to change her life.',
      largeDescription: 'Cinderella',
      largeDescription: 'Cinderella is the timeless tale of a young woman who, despite living under the harsh rule of her stepmother and stepsisters, maintains her kindness and hope. With the help of her Fairy Godmother, she attends the royal ball and captures the heart of the prince. This live-action adaptation of the classic fairy tale features stunning visuals, a magical storyline, and a heartwarming message about the power of kindness and belief in oneself.',
      image: image17,
    },
    {
      title: 'Divergent',
      rating: '⭐ 6.7/10',
      smallDescription: 'In a dystopian future, society is divided into factions, and a young woman must find her place while hiding a dangerous secret.',
      largeDescription: 'Divergent is set in a dystopian future where society is divided into five factions based on virtues. Tris (Shailene Woodley) discovers she is Divergent, meaning she doesn’t fit into any one faction. As she uncovers a conspiracy to eliminate Divergents, she must find a way to protect herself and those she loves, while embracing her true identity.',
      image: image18,
    },
    {
      title: 'The Notebook',
      rating: '⭐ 7.9/10',
      smallDescription: 'A young couple falls in love during the early 1940s, but their love is tested by war and societal expectations.',
      largeDescription: 'The Notebook is a romantic drama that tells the enduring love story of Noah (Ryan Gosling) and Allie (Rachel McAdams). Set against the backdrop of World War II, the film explores themes of love, loss, and the power of memory. With its heart-wrenching narrative and beautiful cinematography, The Notebook has become a modern classic in the romance genre.',
      image: image19,
    },
    {
      title: 'Titanic',
      rating: '⭐ 8.5/10',
      smallDescription: 'A young couple from different social classes fall in love aboard the ill-fated R.M.S. Titanic.',
      largeDescription: 'Titanic is a cinematic masterpiece that tells the story of Jack (Leonardo DiCaprio) and Rose (Kate Winslet), two young lovers from different social classes who meet on the R.M.S. Titanic during its ill-fated maiden voyage. The film masterfully combines romance, tragedy, and historical drama, making it one of the most iconic and beloved films of all time.',
      image: image20,
    }
  ]
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
        <h1 className="text-3xl text-white animate-pulse mb-4">Movie Reviews</h1>
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