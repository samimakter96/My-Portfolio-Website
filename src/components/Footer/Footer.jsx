import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1 style={{backgroundColor: "#32323b", color: '#fff', width: '150px'}} className="logo footer-logo">Samim</h1>
          <p>
            I am a frontend developer from West Bengal, India with 1 years of
            experience in web development
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email here" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Samim Akter. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
