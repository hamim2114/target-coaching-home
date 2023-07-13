import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { BsFacebook, BsYoutube, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-about">
            <h3 className="footer-heading">TARGRT COACHING HOME</h3>
            <p className="footer-text">Lratione error qui corporis molestiae impedit corrupti eos <br className="hidden md:block" /> omnis provident commodi, modi ab minima ipsum.</p>
            <p className="footer-info"><MdLocationOn className="footer-icon" /> Bandarban Sadar, Bandarban</p>
            <p className="footer-info"><MdEmail className="footer-icon" /> targetcoaching@gmail.com</p>
            <p className="footer-info"><MdPhone className="footer-icon" /> +8801839420283</p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-links">
            <h3 className="footer-heading">QUICK LINK</h3>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Course</a>
            <a href="">Admission</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <marquee className="footer-credit">Copyright © 2023 Target Coaching By HAMIM.</marquee>
    </footer>
  );
};

export default Footer;
