import React, { useEffect, useState, useRef } from 'react';
import image1 from '../assets/review2.jpg'; 
import image2 from '../assets/review1.jpg'; 
import image3 from '../assets/review3.jpg'; 
import image4 from '../assets/review4.jpg'; 
import image5 from '../assets/review5.jpg'; 

const slides = [
  {
    image: image1,
    title: 'Alice in Borderland',
    description: 'Friends trapped in Tokyo must survive deadly games.'
  },
  {
    image: image2,
    title: 'Alchemy of Souls',
    description: 'A sorceress swaps bodies, leading to unexpected adventures.'
  },
  {
    image: image3,
    title: 'Shutter Island',
    description: 'U.S. Marshals investigate a missing patient in a mental institution.'
  },
  {
    image: image4,
    title: 'Death\'s Game',
    description: 'A man faces repeated deaths in different lives for a chance at survival.'
  },
  {
    image: image5,
    title: 'Mouse',
    description: 'A police officer hunts a psychopathic killer linked to a series of murders.'
  },
];

const ScrollSpy = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionsRef = useRef([]);

  const handleScroll = () => {
    const sectionOffsets = sectionsRef.current.map((section) =>
      section.getBoundingClientRect().top
    );

    const index = sectionOffsets.findIndex((offset) => offset >= 0);
    setActiveSlide(index === -1 ? sectionsRef.current.length - 1 : index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex p-4">
      {/* Left Side - Latest Reviews */}
      <div className="w-1/4 bg-black text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">Latest Reviews!</h2>
      </div>

      {/* Right Side - Slides with Hidden Scrollbar */}
      <div className="w-3/4 overflow-hidden h-[500px]">
        <div className="overflow-auto h-full scrollbar-hidden">
          {slides.map((slide, index) => (
            <section
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="relative h-[400px] flex items-center justify-center bg-black-100 border border-black rounded-xl" // Black border with rounded corners
            >
              {/* Image Background */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 object-cover w-full h-full rounded-lg" // Ensure image respects rounded corners
              />
              {/* Text Overlay */}
              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSpy;
