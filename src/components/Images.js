import React, { useState } from 'react';
import './Images.css'; 
import Modal from './Modal'; 

import familyHall from '../assets/images 1.jpg'; 
import partyHall from '../assets/images2.jpg'; 
import outdoorSeating from '../assets/images5.jpg'; 
import barArea from '../assets/images 3.jpg'; 
import buffetSetup from '../assets/images4.jpg'; 
import privateDining from '../assets/images10.jpg'; 
import dessertPlatter from '../assets/images6.jpg'; 
import cocktailSelection from '../assets/images9.jpg'; 
import ambiance from '../assets/images 8.jpg'; 
import billiardsClub from '../assets/images 7.jpg'; 

const Images = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    { src: familyHall, alt: 'Family Hall', description: 'This is our Family Hall.' },
    { src: partyHall, alt: 'Party Hall', description: 'This is our Party Hall.' },
    { src: outdoorSeating, alt: 'Outdoor Seating', description: 'Enjoy dining in our outdoor seating area.' },
    { src: barArea, alt: 'Bar Area', description: 'Relax at our Bar Area.' },
    { src: buffetSetup, alt: 'Buffet Setup', description: 'Check out our buffet setup.' },
    { src: privateDining, alt: 'Private Dining', description: 'Book our Private Dining Room.' },
    { src: dessertPlatter, alt: 'Dessert Platter', description: 'Indulge in our dessert platter.' },
    { src: cocktailSelection, alt: 'Cocktail Selection', description: 'Explore our cocktail selection.' },
    { src: ambiance, alt: 'Ambiance', description: 'Enjoy the warm ambiance of our restaurant.' },
    { src: billiardsClub, alt: 'Billiard\'s Club', description: 'Enjoy the Royal Billiard\'s club.' },
  ];

  const openModal = (image) => {
    setCurrentImage(image); 
    setIsOpen(true); 
  };

  const closeModal = () => {
    setIsOpen(false); 
    setCurrentImage(''); 
  };

  return (
    <section className="home-section">
      <h2>Images</h2>
      <p>Check out our delicious dishes and ambiance.</p>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} image={currentImage} />
      )}
    </section>
  );
};

export default Images;
