import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../../images/logo.png';

import './footer.style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mission">
        <div className="footer__logo-container">
          <img src={logo} alt="website-logo" />
          <h3>Apartments</h3>
        </div>
        <p>We are committed to ensuring digital accessibility for individuals.</p>
      </div>
      <div className="support">
        <h3>Support</h3>
        <ul>
          <li>Help Videos</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>View Booking</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="service">
        <h3>Service</h3>
        <ul>
          <li>Payment & Tax</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>Terms of Service</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="about">
        <h3>About</h3>
        <ul>
          <li>About us</li>
          <li>Accessories</li>
          <li>Contact</li>
          <li>News</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="address">
        <h3>Our Address</h3>
        <p>1453, Allen Avenue, Lagos State, Nigeria</p>
        <div className="footer__social-icons">
          <div className="social-icon"><FacebookIcon /></div>
          <div className="social-icon"><TwitterIcon /></div>
          <div className="social-icon"><InstagramIcon /></div>
          <div className="social-icon"><YouTubeIcon /></div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
