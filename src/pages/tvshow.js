import React, { useState } from 'react';
import shadowhuntersImage from '../assets/show.jpg'; // Replace with actual path
import vampireDiariesImage from '../assets/show4.jpg'; // Replace with actual path
import teenWolfImage from '../assets/show5.jpg';  // Replace with actual path
import macgyverImage from '../assets/show6.jpg';  // Replace with actual path
import suitsImage from '../assets/show7.jpg';  // Replace with actual path
import whiteCollarImage from '../assets/show8.jpg';  // Replace with actual path
import flashImage from '../assets/show9.jpg'; // Replace with actual path
import arrowImage from '../assets/show10.jpg'; // Replace with actual path
import supernaturalImage from '../assets/show11.jpg'; // Replace with actual path
import newAmsterdamImage from '../assets/show12.jpg';  // Replace with actual path
import nancyDrewImage from '../assets/showw.gif';  // Replace with actual path
import witcherImage from '../assets/show2.gif'; // Replace with actual path
import anneWithEImage from '../assets/show14.jpg';  // Replace with actual path
import brooklynNineNineImage from '../assets/show15.jpg';  // Replace with actual path
import umbrellaAcademyImage from '../assets/show16.jpg'; // Replace with actual path
import shadowAndBoneImage from '../assets/show3.jpg';  // Replace with actual path
import bridgertonImage from '../assets/show18.jpg';
import fateWinxSagaImage from '../assets/show111.gif';   // Replace with actual path

const tvShows = {
  fantasy: [
    {
      title: 'Shadowhunters',
      rating: '⭐ 8.0/10',
      smallDescription: 'A young woman discovers she is a Shadowhunter, a human-angel hybrid destined to protect the world from demons.',
      largeDescription: 'Shadowhunters follows Clary Fray as she uncovers her true heritage and joins the Shadowhunters, a secret society that battles demons. As Clary learns about her abilities, she encounters a world of magic, betrayal, and danger. The show combines action, romance, and fantasy, offering a thrilling ride through an expanded universe of magical beings and dark secrets.',
      image: shadowhuntersImage,
    },
    {
      title: 'Fate: The Winx Saga',
      rating: '⭐ 7.5/10',
      smallDescription: 'A group of young fairies attend Alfea, a magical boarding school, where they must learn to control their powers while navigating love, rivalries, and dark forces.',
      largeDescription: 'Fate: The Winx Saga is a live-action adaptation of the popular animated series. It follows Bloom, a fire fairy, and her friends at Alfea as they uncover the secrets of their pasts and battle against powerful enemies. The show blends fantasy elements with teenage drama, creating a captivating and mysterious world where magic comes with a price. With its engaging characters and suspenseful plot, the series explores themes of friendship, power, and identity.',
      image: fateWinxSagaImage,
    },
    
    {
      title: 'Shadow and Bone',
      rating: '⭐ 7.3/10',
      smallDescription: 'In a war-torn world, a young soldier uncovers a power that could unite her country.',
      largeDescription: 'Shadow and Bone follows Alina Starkov, a young soldier who discovers she has a unique power that could change the fate of her war-torn country. As she navigates the treacherous world of the Grisha, Alina learns about her past and faces challenges from dark forces that seek to control her. The show combines elements of fantasy and political intrigue, delivering a visually stunning and emotionally engaging story.',
      image: shadowAndBoneImage,
    },
    {
      title: 'Nancy Drew',
      rating: '⭐ 7.5/10',
      smallDescription: 'Young detective Nancy Drew unravels mysteries in her small hometown, facing both supernatural and human dangers.',
      largeDescription: 'In this modern retelling, Nancy Drew is a brilliant detective who, along with her friends, investigates mysteries in her hometown. The show blends supernatural elements with classic whodunit storytelling, as Nancy unearths dark secrets and confronts both human and otherworldly threats. It’s a gripping mystery series with a strong focus on character development and suspense.',
      image: nancyDrewImage,
    },
    {
        title: 'Umbrella Academy',
        rating: '⭐ 7.5/10',
        smallDescription: 'A dysfunctional family of adopted superhero siblings must come together to solve the mystery of their father’s death and prevent an impending apocalypse.',
        largeDescription: 'Umbrella Academy is a unique blend of superhero action, dark comedy, and family drama. The series follows a dysfunctional family of adopted siblings, each with their own unique powers, as they work together to solve the mystery of their father’s death and prevent an impending apocalypse. With its quirky characters, engaging plot, and a perfect balance of humor and action, Umbrella Academy offers a fresh take on the superhero genre.',
        image: umbrellaAcademyImage,
    },
    {
        title: 'Supernatural',
        rating: '⭐ 8.0/10',
        smallDescription: 'Two brothers, Sam and Dean Winchester, hunt demons, ghosts, and other supernatural beings across America.',
        largeDescription: 'Supernatural follows the Winchester brothers, Sam and Dean, as they travel across America hunting demons, ghosts, and other supernatural entities. The show blends horror, action, and drama, offering a unique take on urban legends and mythology. With its long-running storyline, Supernatural explores deep themes of family, destiny, and the battle between good and evil.',
        image: supernaturalImage,
      },
      {
        title: 'Teen Wolf',
        rating: '⭐ 7.6/10',
        smallDescription: 'Scott McCall, a high school student, is bitten by a werewolf and must navigate his new life while protecting his town.',
        largeDescription: 'Teen Wolf centers on Scott McCall, a high school student who becomes a werewolf after being bitten. As he grapples with his new abilities, Scott must protect his loved ones and his town from various supernatural threats. The show blends action, romance, and supernatural elements, creating a compelling narrative about identity, loyalty, and the challenges of adolescence.',
        image: teenWolfImage,
      },
      {
          title: 'Vampire Diaries',
          rating: '⭐ 8.7/10',
          smallDescription: 'Elena, a high school girl, falls in love with a vampire, leading to a world of supernatural events and love triangles.',
          largeDescription: 'The Vampire Diaries is a supernatural drama that follows Elena Gilbert, a high school student who falls in love with a vampire named Stefan Salvatore. The series explores the complexities of love, family, and the supernatural as Elena becomes entangled in the lives of vampires, witches, and other supernatural beings. With its mix of romance, horror, and drama, Vampire Diaries has become a beloved series among fans of the genre.',
          image: vampireDiariesImage,
      },
  ],
  action: [
    {
      title: 'Arrow',
      rating: '⭐ 7.7/10',
      smallDescription: 'Billionaire playboy Oliver Queen returns home to fight crime as the vigilante Arrow.',
      largeDescription: 'Arrow follows Oliver Queen, a billionaire playboy who returns home after being stranded on a mysterious island for five years. Upon his return, he becomes the vigilante known as Arrow, fighting crime and corruption in his city. The show combines intense action scenes with deep character exploration, highlighting Oliver’s personal struggles and the challenges of leading a double life.',
      image: arrowImage,
    },
    {
      title: 'The Flash',
      rating: '⭐ 7.8/10',
      smallDescription: 'Barry Allen becomes the fastest man alive after a freak accident grants him super speed.',
      largeDescription: 'The Flash follows Barry Allen, a forensic scientist who gains super speed after being struck by lightning during a particle accelerator explosion. As The Flash, Barry fights to protect his city from meta-human threats while uncovering the truth behind his mother’s murder. The show balances thrilling superhero action with heartfelt moments, exploring themes of family, friendship, and responsibility.',
      image: flashImage,
    },
    {
      title: 'The Witcher',
      rating: '⭐ 8.0/10',
      smallDescription: 'Geralt of Rivia, a monster hunter, navigates a tumultuous world filled with magic, political intrigue, and moral ambiguity.',
      largeDescription: 'Based on the popular book series, The Witcher follows Geralt of Rivia as he battles monsters and navigates a complex world of politics and magic. With a richly developed storyline and deep character exploration, the show combines epic action sequences with a dark, immersive fantasy world. It offers a nuanced portrayal of heroism and destiny in a land filled with danger and intrigue.',
      image: witcherImage,
    },
    {
      title: 'MacGyver',
      rating: '⭐ 7.9/10',
      smallDescription: 'A young Angus MacGyver uses his ingenuity and knowledge to solve problems and save lives.',
      largeDescription: 'MacGyver follows the adventures of Angus MacGyver, a resourceful young man who uses his scientific knowledge and unconventional problem-solving skills to save lives. The show is known for its creative and often unconventional solutions to problems, blending action and suspense with a touch of humor. MacGyver’s innovative approach to problem-solving makes it a unique and entertaining action series.',
      image: macgyverImage,
    },
  ],
  drama: [
    {
      title: 'Bridgerton',
      rating: '⭐ 7.9/10',
      smallDescription: 'In Regency-era London, the Bridgerton family navigates society’s expectations and romantic entanglements.',
      largeDescription: 'Bridgerton is a period drama set in Regency-era London, following the lives of the Bridgerton family as they navigate high society. The show combines romance, drama, and intrigue, offering a modern twist on the classic period drama genre. With its lavish costumes and opulent settings, Bridgerton explores themes of love, family, and societal expectations, making it a must-watch for fans of historical romance.',
      image: bridgertonImage,
    },
    {
      title: 'Anne with an E',
      rating: '⭐ 8.6/10',
      smallDescription: 'A spirited orphan named Anne Shirley faces challenges and adventures in her new home on Prince Edward Island.',
      largeDescription: 'Anne with an E is a reimagining of the classic novel Anne of Green Gables. The show follows Anne Shirley, a bright and imaginative orphan who is taken in by an elderly brother and sister on Prince Edward Island. The series explores themes of identity, prejudice, and the power of imagination, offering a heartfelt and beautifully shot story about growing up and finding a place to belong.',
      image: anneWithEImage,
    },
    {
      title: 'Suits',
      rating: '⭐ 8.0/10',
      smallDescription: 'A talented college dropout works as a lawyer, despite never having attended law school, in a high-stakes legal firm.',
      largeDescription: 'Suits is a legal drama that follows Mike Ross, a brilliant college dropout who starts working as a lawyer at a prestigious New York law firm, despite never having attended law school. The show combines legal battles with personal drama, focusing on the complex relationships between characters and the ethical dilemmas they face. With its sharp dialogue and engaging plotlines, Suits is a standout in the legal drama genre.',
      image: suitsImage,
    },
    {
      title: 'White Collar',
      rating: '⭐ 8.0/10',
      smallDescription: 'A brilliant con artist partners with an FBI agent to catch other criminals.',
      largeDescription: 'White Collar follows Neal Caffrey, a charming and brilliant con artist, who partners with an FBI agent to catch other criminals in exchange for his freedom. The show blends crime, drama, and a touch of comedy, exploring the dynamics between law enforcement and those they pursue. White Collar is known for its clever plots, charismatic characters, and the intriguing cat-and-mouse games between Neal and his adversaries.',
      image: whiteCollarImage,
    },
    {
      title: 'New Amsterdam',
      rating: '⭐ 8.0/10',
      smallDescription: 'The new medical director of America’s oldest public hospital sets out to reform the institution’s neglected and underfunded facilities.',
      largeDescription: 'New Amsterdam is a medical drama that follows Dr. Max Goodwin, the new medical director of America’s oldest public hospital, as he sets out to reform the institution’s neglected and underfunded facilities. The show combines intense medical cases with deep character studies, exploring themes of bureaucracy, ethics, and the human side of healthcare. With its compelling storytelling and strong performances, New Amsterdam is a standout in the medical drama genre.',
      image: newAmsterdamImage,
    },
  ],
  comedy: [
    {
      title: 'Brooklyn Nine-Nine',
      rating: '⭐ 8.1/10',
      smallDescription: 'A group of detectives in Brooklyn’s 99th precinct solve crimes while navigating personal and professional challenges.',
      largeDescription: 'Brooklyn Nine-Nine is a comedy series set in a fictional Brooklyn police precinct, following the lives of a group of detectives as they solve crimes and navigate personal and professional challenges. The show is known for its quick wit, diverse cast of characters, and a perfect blend of humor and heart. Brooklyn Nine-Nine offers a light-hearted and entertaining look at life in law enforcement, with a strong emphasis on friendship and teamwork.',
      image: brooklynNineNineImage,
    },
  ],
};

const TVShowCard = ({ show, onClick }) => {
  return (
    <div
      className="bg-[#4c0519] text-white m-4 p-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(show)}
    >
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold mt-2">{show.title}</h2>
      <p className="text-yellow-400">{show.rating}</p>
      <p className="mt-2">{show.smallDescription}</p>
    </div>
  );
};


const TVShowModal = ({ show, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] text-white p-8 rounded-lg flex w-full max-w-3xl h-auto">
        <img src={show.image} alt={show.title} className="w-1/2 h-full object-cover rounded-md mr-4" />
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{show.title}</h2>
          <p className="text-yellow-400">{show.rating}</p>
          <p className="mt-2">{show.largeDescription}</p>
        </div>
        <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const TVShowsReviewPage = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredShows = Object.keys(tvShows).reduce((acc, category) => {
    const filteredCategory = tvShows[category].filter(show =>
      show.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredCategory.length > 0) {
      acc[category] = filteredCategory;
    }
    return acc;
  }, {});

  return (
    <div className="bg-black p-8 min-h-screen">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl text-white animate-pulse">TV Shows Reviews</h1>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for a show..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 rounded-md w-2/3 sm:w-1/3 bg-[#4c0519] text-white"
        />
      </div>

      {Object.keys(filteredShows).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl text-white mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredShows[category].map((show, index) => (
              <TVShowCard key={index} show={show} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      ))}
      {selectedShow && <TVShowModal show={selectedShow} onClose={handleCloseModal} />}
    </div>
  );
};

export default TVShowsReviewPage;