import React, { useState } from 'react';
import './About.css'; 
import Modal from './Modal';

// Import images
import tandooriMomos from '../assets/Tandoori Momos1.jpg';
import billiardsClub from '../assets/Billiards Club.jpg';
import drinksImage from '../assets/Mocktail drink.jpg';

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section className="about-section">
      <h2>About Us</h2>
      <p>
        Welcome to Hangout Restaurant! At Hangout, we believe that dining is not just about the food; 
        it's about the experience. Our restaurant is designed to provide a warm and inviting atmosphere where 
        friends and family can gather to enjoy a delicious meal and unwind with a refreshing drink.
      </p>
      <ul>
        <li>📅 <strong>Vibrant Events:</strong> Join us for themed nights and live music that create unforgettable memories.</li>
        <li>🍽️ <strong>Diverse Menu:</strong> From mouthwatering dishes to innovative cocktails, we cater to every palate.</li>
        <li>🎱 <strong>Royal Billiards Club:</strong> Enjoy a game in our luxurious billiards room, perfect for both beginners and pros.</li>

        <li>🍹 <strong>Expert Mixologists:</strong> Our bartenders craft signature cocktails using the finest ingredients.</li>
      </ul>
      <h3>Join Us!</h3>
      <p>
        We invite you to visit us and enjoy an unforgettable dining experience at Hangout Restaurant and Hookah Bar.
      </p>
      <div className="image-gallery">
        <img src={tandooriMomos} alt="Delicious Tandoori Momos" onClick={() => handleImageClick(tandooriMomos)} />
        <img src={billiardsClub} alt="Hookah Experience" onClick={() => handleImageClick(billiardsClub)} />
        <img src={drinksImage} alt="Refreshing Drinks" onClick={() => handleImageClick(drinksImage)} />
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} image={selectedImage} />
    </section>
  );
};

export default About;
