import React from 'react';
import './Contact.css';
import phoneIcon from '../assets/phone icon.png';
import emailIcon from '../assets/email icon.png'; 
import instagramIcon from '../assets/instagram icon.jpg';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone" />
          <span>
            <a href="tel:+917017978023">+91 7017978023</a>
          </span>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone" />
          <span>
            <a href="tel:+918218459024">+91 8218459024</a>
          </span>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="icon" />
          <span>
            <a href="mailto:hangoutrestaurant13@gmail.com">hangoutrestaurant13@gmail.com</a>
          </span>
        </div>
        <div className="contact-item">
          <img src={instagramIcon} alt="Instagram" />
          <span>
            <a href="https://instagram.com/hangoutnagina" target="_blank" rel="noopener noreferrer">@hangoutnagina</a>
          </span>
        </div>
      </div>

      <h3>Our Locations</h3>
      <p>Akbarabad Chowk Near Farooqui Masjid Kiratpur Road, Nagina</p>
      <a 
        href="https://www.google.com/maps/dir/?api=1&destination=Akbarabad+Chowk+Near+Farooqui+Masjid+Kiratpur+Road,+Nagina" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
