import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="https://raptorfitness.in/static/media/logo.88153b6f978e5eb4503e.png" alt="Raptor Gym Logo" className="footer-logo" />
            <h3>RAPTOR GYM</h3>
          </div>
          <p className="footer-description">
            Your journey to a stronger, healthier version of yourself begins here.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/raptor.fitness/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/916280761142" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Raptor Gym. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
