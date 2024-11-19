import React, { useState } from 'react';
import './Home.css'; 
import ambiance1 from '../assets/Hangout3.jpg'; 
import ambiance2 from '../assets/Hangout4.jpg';
import ambiance3 from '../assets/images 3.jpg';
import Modal from './Modal'; 

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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
      <h2>Welcome to Hangout Restaurant!</h2>
      <p>
        Experience a vibrant atmosphere where you can enjoy our exquisite hookah selection 
        and delicious meals, perfect for gathering with friends and family.
      </p>
      <h3>Explore Our Ambiance</h3>
      <div className="image-gallery">
        <div className="image-item">
          <img 
            src={ambiance1} 
            alt="Ambiance 1" 
            className="gallery-image" 
            onClick={() => openModal(ambiance1)} 
          />
        </div>
        <div className="image-item">
          <img 
            src={ambiance2} 
            alt="Ambiance 2" 
            className="gallery-image" 
            onClick={() => openModal(ambiance2)} 
          />
        </div>
        <div className="image-item">
          <img 
            src={ambiance3} 
            alt="Hookah Setup" 
            className="gallery-image" 
            onClick={() => openModal(ambiance3)} 
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} image={currentImage} />
    </section>
  );
};

export default Home;
