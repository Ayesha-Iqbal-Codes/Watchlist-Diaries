import React, { useEffect, useRef } from 'react';
import image1 from '../assets/image3.jpg'; 
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image1.jpg';
import image4 from '../assets/image5.jpg';
import image5 from '../assets/image9.jpg';
import image6 from '../assets/image8.jpg';
import image7 from '../assets/image6.jpg';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const totalScrollWidth = carouselElement.scrollWidth;
    const visibleWidth = carouselElement.clientWidth;

    const scrollInterval = setInterval(() => {
      if (carouselElement.scrollLeft + visibleWidth >= totalScrollWidth) {
        carouselElement.scrollLeft = 0;
      } else {
        carouselElement.scrollLeft += 2;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const cards = [
    { id: 1, media: image1 },
    { id: 2, media: image2 },
    { id: 3, media: image3 },
    { id: 4, media: image4 },
    { id: 5, media: image5 },
    { id: 6, media: image6 },
    { id: 7, media: image7 },
  ];

  return (
    <section className="shadow-lg py-5"> {/* Reduced padding to remove space */}
      <div className="overflow-hidden relative px-0.5" ref={carouselRef}>
        <div className="flex gap-2" style={{ width: 'max-content' }}>
          {cards.concat(cards).map((card, index) => (
            <div key={index} className="flex-none w-[360px]"> {/* Set width to 360px */}
              <div className="overflow-hidden rounded-2xl"> {/* Apply rounded-lg for a more subtle rounding */}
                <img src={card.media} alt={`Slide ${index + 1}`} className="w-full h-[200px] object-cover rounded-lg" /> {/* Set height to fit better */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
