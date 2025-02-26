import React, { useState } from 'react';
import alchemyOfSoulsImage from '../assets/kdrama1.gif'; // Replace with actual path
import deathGameImage from '../assets/kdrama2.jpg'; // Replace with actual path
import seeYouInMy19thLifeImage from '../assets/kdrama3.jpg';  // Replace with actual path
import queenOfTearsImage from '../assets/kdrama4.jpg';  // Replace with actual path
import the8ShowImage from '../assets/kdrama5.jpg';  // Replace with actual path
import squidGameImage from '../assets/kdrama6.jpg'; // Replace with actual path
import hometownChaChaChaImage from '../assets/kdrama7.jpg'; // Replace with actual path
import twinklingWatermelonImage from '../assets/kdrama8.jpg';  // Replace with actual path
import goodBadMotherImage from '../assets/kdrama9.jpg';  // Replace with actual path
import myNameImage from '../assets/kdrama10.jpg'; // Replace with actual path
import vincenzoImage from '../assets/kdrama11.jpg'; // Replace with actual path
import rebornRichImage from '../assets/kdrama12.jpg';  // Replace with actual path
import tomorrowImage from '../assets/kdrama13.jpg';  // Replace with actual path
import businessProposalImage from '../assets/kdrama14.jpg'; // Replace with actual path
import flowerOfEvilImage from '../assets/kdrama15.jpg';  // Replace with actual path
import arthdalChroniclesImage from '../assets/kdrama16.jpg';  // Replace with actual path
import hotelDelLunaImage from '../assets/kdrama17.jpg'; // Replace with actual path
import legendOfBlueSeaImage from '../assets/kdrama18.jpg'; // Replace with actual path
import worstOfEvilImage  from '../assets/drama1.webp'; // Replace with actual path
import kingTheLandImage from  '../assets/drama2.gif'; // Replace with actual path
import aliceInBorderlandImage  from '../assets/jdrama4.gif'; // Replace with actual path
import silentImage  from '../assets/jdrama2.gif'; // Replace with actual path
import fermentsCuisineImage  from '../assets/jdrama3.webp'; // Replace with actual path
import trillionGameImage from  '../assets/jdrama1.gif'; 
import imagechinese1 from '../assets/chi1.gif'
import imagechinese2 from '../assets/chi2.gif'
import imagechinese3 from '../assets/chi3.webp'
import imagechinese4 from '../assets/chi4.gif'
import thaidramaimage1 from  '../assets/thai1.gif'
import thaidramaimage2 from  '../assets/thai2.gif'
import thaidramaimage3 from  '../assets/thai3.webp'
import thaidramaimage4 from  '../assets/thai4.gif'








// Define images for Japanese, Chinese, and Thai dramas similarly

const tvShows = {
  korean: [
    {
      title: 'Alchemy of Souls',
      rating: '⭐ 8.6/10',
      smallDescription: 'A world of magic and mysticism where powerful mages control souls and destinies.',
      largeDescription: 'Alchemy of Souls delves into a fantastical world where powerful mages control the destinies of those around them. With rich lore, complex characters, and stunning visuals, this drama captivates with its intricate storytelling and intense action scenes.',
      image: alchemyOfSoulsImage,
    },
    {
      title: 'Death Game',
      rating: '⭐ 7.9/10',
      smallDescription: 'A deadly game of survival where contestants must fight to stay alive.',
      largeDescription: 'Death Game is a gripping thriller that thrusts its characters into a deadly competition where only the strongest survive. The show combines high-stakes action with psychological drama, keeping viewers on the edge of their seats from start to finish.',
      image: deathGameImage,
    },
    {
      title: 'See You in My 19th Life',
      rating: '⭐ 8.2/10',
      smallDescription: 'A woman who remembers all her past lives seeks out her lost love.',
      largeDescription: 'In See You in My 19th Life, the protagonist remembers all her past lives and embarks on a quest to reconnect with her lost love. This emotional drama explores themes of reincarnation, fate, and the enduring power of love.',
      image: seeYouInMy19thLifeImage,
    },
    {
        title: 'Queen of Tears',
        rating: '⭐ 8.1/10',
        smallDescription: 'A comedic drama that explores the ups and downs of a couple in the entertainment industry.',
        largeDescription: 'Queen of Tears is a heartwarming yet humorous story that follows the life of a high-profile couple navigating the challenges of fame, love, and personal growth in the cutthroat entertainment industry.',
        image: queenOfTearsImage,
      },
      {
        title: 'The 8 Show',
        rating: '⭐ 7.7/10',
        smallDescription: 'A drama that brings together eight unique individuals with intertwined destinies.',
        largeDescription: 'The 8 Show offers a captivating narrative, weaving together the stories of eight individuals whose lives intersect in unexpected ways. The series is filled with twists, emotional depth, and unforgettable characters.',
        image: the8ShowImage,
      },
      {
        title: 'Squid Game',
        rating: '⭐ 8.7/10',
        smallDescription: 'A deadly survival game where participants risk everything for a life-changing prize.',
        largeDescription: 'Squid Game is an intense thriller that delves into the dark side of human nature. Contestants in a mysterious game face life-or-death challenges, pushing them to their limits as they compete for a massive cash prize.',
        image: squidGameImage,
      },
      {
        title: 'Hometown Cha-Cha-Cha',
        rating: '⭐ 8.9/10',
        smallDescription: 'A charming romance between a dentist and a handyman in a small seaside village.',
        largeDescription: 'Hometown Cha-Cha-Cha is a feel-good romantic comedy that captures the heartwarming interactions of a big-city dentist and a small-town handyman. Set in a picturesque village, the show is a delightful blend of love, community, and personal discovery.',
        image: hometownChaChaChaImage,
      },
      {
        title: 'Twinkling Watermelon',
        rating: '⭐ 8.4/10',
        smallDescription: 'A magical tale of time travel and music, bridging generations through melody.',
        largeDescription: 'Twinkling Watermelon is a captivating drama that combines fantasy and music. Through time travel, the characters experience life in different eras, exploring the timeless impact of music and its ability to connect souls across generations.',
        image: twinklingWatermelonImage,
      },
      {
        title: 'The Good Bad Mother',
        rating: '⭐ 8.0/10',
        smallDescription: 'A heartwarming story of a mother and son who rebuild their lives after tragedy.',
        largeDescription: 'The Good Bad Mother is a poignant drama that explores the bond between a mother and her son as they navigate the challenges of life after a devastating accident. The series beautifully portrays the resilience of family ties and the healing power of love.',
        image: goodBadMotherImage,
      },
      {
        title: 'My Name',
        rating: '⭐ 8.1/10',
        smallDescription: 'A woman seeks revenge by infiltrating a crime syndicate and becoming a detective.',
        largeDescription: 'My Name is a gritty, action-packed drama that follows a woman on a relentless quest for revenge. Posing as a detective, she infiltrates the criminal underworld, uncovering shocking truths about her past and the people she thought she knew.',
        image: myNameImage,
      },
      {
        title: 'Vincenzo',
        rating: '⭐ 8.8/10',
        smallDescription: 'A Korean-Italian mafia consigliere returns to Seoul to take down corrupt elites.',
        largeDescription: 'Vincenzo combines dark humor, thrilling action, and sharp social commentary in a story of a mafia consigliere who returns to Korea to seek justice. With a mix of legal drama and crime, the show keeps viewers hooked with its unpredictable twists and charismatic characters.',
        image: vincenzoImage,
      },
      {
        title: 'Reborn Rich',
        rating: '⭐ 8.5/10',
        smallDescription: 'A man reincarnates into a wealthy family, seeking to avenge his wrongful death.',
        largeDescription: 'Reborn Rich tells the story of a man who is reincarnated into a powerful, affluent family after his untimely death. He uses his newfound position to seek revenge on those who wronged him in his previous life, all while navigating the complexities of wealth and power.',
        image: rebornRichImage,
      },
      {
        title: 'Tomorrow',
        rating: '⭐ 8.2/10',
        smallDescription: 'A supernatural team saves souls and helps them find peace before they move on.',
        largeDescription: 'Tomorrow is a supernatural drama that follows a team of grim reapers tasked with saving troubled souls on the brink of death. The show explores themes of redemption, mental health, and the importance of compassion, all wrapped in a compelling, otherworldly narrative.',
        image: tomorrowImage,
      },
      {
        title: 'Business Proposal',
        rating: '⭐ 8.3/10',
        smallDescription: 'A romantic comedy about a blind date that leads to unexpected corporate complications.',
        largeDescription: 'Business Proposal is a delightful romantic comedy where a fake blind date turns into a whirlwind romance full of surprises and challenges. Set against the backdrop of a corporate world, the drama is filled with humor, love, and endearing characters.',
        image: businessProposalImage,
      },
      {
        title: 'Flower of Evil',
        rating: '⭐ 8.9/10',
        smallDescription: 'A suspenseful thriller about a man hiding his dark past from his detective wife.',
        largeDescription: 'Flower of Evil is a gripping psychological thriller that centers on a man with a mysterious past and his detective wife who begins to suspect him of being a serial killer. The show masterfully blends suspense, emotion, and complex character development.',
        image: flowerOfEvilImage,
      },
      {
        title: 'Arthdal Chronicles',
        rating: '⭐ 8.1/10',
        smallDescription: 'An epic saga of power struggles and mythological battles in an ancient kingdom.',
        largeDescription: 'Arthdal Chronicles is a grand fantasy epic set in the mythical land of Arth. The series features intricate power struggles, legendary battles, and a richly imagined world full of diverse cultures, magic, and ancient prophecies.',
        image: arthdalChroniclesImage,
      },
      {
        title: 'The Worst of Evil',
        rating: '⭐ 8.2/10',
        smallDescription: 'An undercover cop infiltrates a dangerous drug cartel in 1990s South Korea, where he faces a web of crime, loyalty, and betrayal.',
        largeDescription: 'Set in the 1990s, The Worst of Evil follows an undercover police officer who is tasked with infiltrating a powerful drug cartel that is spreading a new drug from China to Japan through South Korea. As he dives deeper into the criminal underworld, he must navigate the dangers of betrayal, corruption, and the blurred lines between good and evil. The series combines intense action with psychological drama, offering a gritty portrayal of the harsh realities of crime and law enforcement in a rapidly changing society.',
        image: worstOfEvilImage,
      },      
      {
        title: 'Hotel del Luna',
        rating: '⭐ 8.7/10',
        smallDescription: 'A mysterious hotel caters to the souls of the dead, with an unusual owner at its helm.',
        largeDescription: 'Hotel del Luna is a unique fantasy drama set in a supernatural hotel that serves the spirits of the dead. The story follows the enigmatic hotel owner, who harbors a tragic past, and the human manager who helps her unravel the secrets of the hotel and her own soul.',
        image: hotelDelLunaImage,
      },
      {
        title: 'King the Land',
        rating: '⭐ 8.0/10',
        smallDescription: 'A charismatic hotel heir and a cheerful employee navigate love and rivalry in the luxurious world of high-end hospitality.',
        largeDescription: 'King the Land is a romantic comedy that follows the story of Goo Won, a charming but aloof heir to a luxury hotel empire, and Cheon Sa-rang, a bright and optimistic hotelier. As they clash over their differing approaches to work and life, sparks fly, leading to unexpected romance. Set against the glamorous backdrop of the hotel industry, the series explores themes of love, ambition, and the pursuit of happiness, with a delightful mix of humor, heartfelt moments, and the challenges of balancing personal desires with family expectations.',
        image: kingTheLandImage,
      },      
      {
        title: 'Legend of the Blue Sea',
        rating: '⭐ 8.4/10',
        smallDescription: 'A romantic fantasy about a mermaid and a con artist who share a deep, ancient connection.',
        largeDescription: 'Legend of the Blue Sea is a captivating romantic fantasy that follows the love story between a mermaid and a skilled con artist. Their lives are intertwined through past and present, as they navigate challenges and uncover ancient secrets that bind them together.',
        image: legendOfBlueSeaImage,
      },
  ],
  japanese: [
    {
      title: 'Alice in Borderland',
      rating: '⭐ 9.0/10',
      smallDescription: 'A group of friends find themselves in a parallel Tokyo, where they must compete in deadly games to survive.',
      largeDescription: 'Alice in Borderland follows Ryohei Arisu and his friends as they are mysteriously transported to a deserted Tokyo, where they must participate in dangerous and twisted games to stay alive. As they navigate this strange new world, they uncover dark secrets and face moral dilemmas. The series blends intense action with psychological thrills, offering a gripping story about survival, trust, and the human will to live in a nightmarish reality.',
      image: aliceInBorderlandImage,
    },{
      title: 'Silent',
      rating: '⭐ 8.4/10',
      smallDescription: 'A poignant love story about a young woman and her high school sweetheart, who reconnect years later after he suddenly disappeared from her life.',
      largeDescription: 'Silent tells the emotional tale of Tsumugi Aoba, who reconnects with her high school love, Sou Sakura, after years of separation. She learns that Sou disappeared from her life due to a progressive hearing loss. The drama explores themes of love, loss, and the challenges of communication, delivering a touching narrative that captures the complexities of relationships and the enduring power of love even in the face of adversity.',
      image: silentImage,
    },
    {
      title: 'Ferment’s Cuisine',
      rating: '⭐ 8.0/10',
      smallDescription: 'After abandoning his dream of becoming a mathematician, Gaku feels lost, but discovers a new world to master when Michelin-starred chef Kai hires him in his restaurant.',
      largeDescription: 'Kitada Gaku is gifted in mathematics. He dreamed of becoming a mathematician, but he gave up on his dream. He now spends his days without purpose. One day, he happens to meet a genius chef named Asakura Kai. Asakura Kai leads Kitada Gaku into the culinary world. Kitada Gaku soon joins Asakura Kais two star restaurant K, where talented chefs from all around the world work together and learn together. There, Kitada Gaku also learns about cooking and develops his own recipes derived from mathematical thought.',
      image: fermentsCuisineImage,
    },
    {
      title: 'Trillion Game',
      rating: '⭐ 7.8/10',
      smallDescription: 'Two ambitious friends join forces to create a startup with the goal of making a trillion dollars, facing numerous challenges and cutthroat competition along the way.',
      largeDescription: 'Trillion Game follows the journey of Haru and Gaku, two friends with vastly different personalities but a shared dream of making a trillion dollars. They establish a startup and dive headfirst into the world of business, where they encounter fierce rivals, ethical dilemmas, and the challenges of maintaining their friendship in the face of overwhelming pressure. The drama offers a thrilling look at the high-stakes world of entrepreneurship, blending humor, tension, and the pursuit of impossible dreams.',
      image: trillionGameImage,
    },
  
  ],
  chinese: [
    {
      "title": "The Untamed",
      "rating": "⭐ 9.2/10",
      "smallDescription": "Two cultivators from rival clans uncover a dark secret that could change the fate of the world, leading them into an epic battle between good and evil.",
      "largeDescription": "The Untamed is a mesmerizing fantasy drama set in a world where powerful clans practice cultivation to protect humanity from malevolent spirits. The story centers on Wei Wuxian and Lan Wangji, two cultivators with contrasting personalities who join forces to uncover a long-buried conspiracy. As they delve deeper into the mystery, they face treacherous foes, complex relationships, and moral dilemmas that challenge their beliefs. The series is renowned for its breathtaking visuals, intricate plot, and the deep bond between the protagonists, making it a must-watch for fans of epic storytelling.",
      "image": imagechinese1 
    },
    {
      "title": "The Lost Tomb Reboot",
      "rating": "⭐ 8.0/10",
      "smallDescription": "A seasoned tomb raider embarks on a perilous journey to uncover ancient secrets, battling treacherous traps and supernatural forces along the way.",
      "largeDescription": "The Lost Tomb Reboot follows Wu Xie, a veteran tomb raider, as he embarks on an epic adventure to unravel the mysteries hidden within ancient tombs. With his trusted companions by his side, Wu Xie navigates a labyrinth of deadly traps, uncovers hidden treasures, and confronts supernatural entities that guard the tombs' secrets. The series blends action, mystery, and elements of horror, delivering a gripping tale of discovery and survival.",
      "image": imagechinese2
    },
    {
      "title": "Ultimate Note",
      "rating": "⭐ 8.2/10",
      "smallDescription": "A young adventurer delves into the unknown to uncover the truth behind ancient legends, facing deadly challenges and uncovering shocking revelations.",
      "largeDescription": "Ultimate Note continues the saga of tomb raiding as Wu Xie, along with his team, delves deeper into the mysteries left by his ancestors. The series explores hidden secrets, ancient puzzles, and the dark forces that guard them. With every discovery, they get closer to unraveling the truth behind the myths and legends that have haunted their family for generations. The drama is filled with suspense, intricate plot twists, and a relentless pace that keeps viewers on the edge of their seats.",
      "image": imagechinese3
    },
    {
      "title": "Psych Hunter",
      "rating": "⭐ 7.5/10",
      "smallDescription": "A psychologist with a mysterious past teams up with a detective to solve bizarre cases involving the human mind and supernatural phenomena.",
      "largeDescription": "Psych Hunter follows the intriguing partnership between Jiang Shuo, a psychologist with the ability to enter people's minds, and Qin Yiheng, a determined detective. Together, they investigate strange and supernatural cases that delve into the deepest corners of the human psyche. As they solve these mysteries, they uncover hidden truths and confront their own haunted pasts. The series offers a unique blend of psychological thriller, mystery, and supernatural elements, making it a compelling watch for those who enjoy mind-bending stories.",
      "image": imagechinese4
    }
    
  ],
  thai: [
    {
      "title": "Ready Set Love",
      "rating": "⭐ 7.6/10",
      "smallDescription": "A charming tale of love and competition as two rival reality show contestants find themselves falling for each other against all odds.",
      "largeDescription": "Ready Set Love centers on the intense and often humorous rivalry between two contestants on a popular dating reality show. As they compete in various romantic challenges, sparks begin to fly, and what starts as a fierce competition slowly blossoms into an unexpected love story. Along the way, they must navigate the pressures of the show, their growing feelings for each other, and the interference of other contestants who also have their eyes on the prize. The drama is a delightful blend of romance, comedy, and the unpredictable world of reality TV.",
      "image": thaidramaimage1
    },
    {
      "title": "Irresistible",
      "rating": "⭐ 7.9/10",
      "smallDescription": "A man seeks revenge after his sister's death, targeting his former fiancée and her brother, only to find himself tangled in a complex web of love, hate, and vengeance.",
      "largeDescription": "Irresistible centers on Kimhan and Mookarin, whose engagement is shattered by a tragic incident. Kimhan's sister, Mon, is found dead, and her husband, Tada—Mook's brother—is accused of her murder. Despite the court ruling Mon's death as an accident and Tada being acquitted with Mook as his alibi, Kimhan is consumed by rage. Believing that justice was denied, Kimhan vows to exact his own form of retribution.",
      "image": thaidramaimage2
    },    
    {
      "title": "So Wayree",
      "rating": "⭐ 8.3/10",
      "smallDescription": "A tale of business rivalry and forbidden love between the heirs of two powerful families embroiled in a decades-old feud.",
      "largeDescription": "So Wayree tells the story of Prinoot and Mintra, heirs to two rival hotel empires who are caught in a bitter family feud. Despite the animosity between their families, the two find themselves drawn to each other, setting off a chain of events that threatens to bring both their worlds crashing down. As they struggle to balance their love with their loyalty to their families, they uncover dark secrets that could either unite them or tear them apart forever. The drama is a gripping blend of romance, intrigue, and family drama, with high stakes and intense emotions.",
      "image": thaidramaimage3
    },
    {
      "title": "Kluen Cheewit",
      "rating": "⭐ 8.5/10",
      "smallDescription": "A top actress's life spirals out of control after she accidentally kills a woman, leading to an unexpected romance with the victim's fiancé.",
      "largeDescription": "Kluen Cheewit follows the life of Jeerawat, a famous actress who becomes the target of Sathit's vengeance after she accidentally causes the death of his fiancée. As Sathit seeks to make her pay for her mistake, he uncovers the truth behind Jeerawat's troubled past and her struggles in the harsh entertainment industry. Despite his initial hatred, Sathit finds himself falling for her, leading to a tumultuous and passionate love story. The drama explores themes of guilt, redemption, and the complexity of human emotions, making it a deeply engaging watch.",
      "image": thaidramaimage4
    }
    
  ],
};

const TVShowCard = ({ show, onClick }) => {
  return (
    <div
      className="bg-[#4c0519] text-white m-4 p-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(show)}
    >
      <img
        src={show.image}
        alt={show.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{show.title}</h2>
      <p className="text-yellow-400">{show.rating}</p>
      <p className="mt-2">{show.smallDescription}</p>
    </div>
  );
};

const TVShowModal = ({ show, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#4c0519] text-white p-8 rounded-lg flex w-full max-w-3xl h-auto relative">
        <img
          src={show.image}
          alt={show.title}
          className="w-1/2 h-auto object-cover rounded-md mr-4"
        />
        <div className="flex flex-col justify-between w-1/2">
          <button
            onClick={onClose}
            className="self-end text-2xl font-bold mb-4 absolute top-2 right-2"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">{show.title}</h2>
          <p className="text-lg mb-4">{show.largeDescription}</p>
          <p className="text-lg font-semibold">
            Rating: {show.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

const TVShowsReviewPage = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filterShows = (shows) => {
    return shows.filter((show) =>
      show.title.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <div className="bg-black p-8 min-h-screen">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl text-white animate-pulse mb-4">Asian TV Shows Reviews</h1>
        <input
          type="text"
          placeholder="Search for a drama..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 rounded-md w-2/3 sm:w-1/3 bg-[#4c0519] text-white"
        />
      </div>
      {Object.keys(tvShows).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl text-white mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} Dramas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filterShows(tvShows[category]).map((show, index) => (
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