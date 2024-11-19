import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Importing components
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Images from './components/Images';
import Contact from './components/Contact';

// Import your assets
import logo from './assets/Hangout logo2.png'; 
import phoneIcon from './assets/phone icon.png'; 
import instagramIcon from './assets/instagram icon.jpg'; 

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="header-content">
            <img src={logo} alt="Hangout Restaurant Logo" className="logo" />
            <h1 className="title">Hangout Restaurant</h1>
            <div className="contact-info">
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" />
                <span>
                  <a href="tel:+917017978023"> +91 7017978023</a>
                </span>
              </div>
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" />
                <span>
                  <a href="tel:+918218459024">+91 8218459024</a>
                </span>
              </div>
              <div className="contact-item">
                <img src={instagramIcon} alt="Instagram" />
                <span>
                  <a href="https://instagram.com/hangoutnagina" target="_blank" rel="noopener noreferrer">@hangoutnagina</a>
                </span>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/images" element={<Images />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Hangout Restaurant. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
