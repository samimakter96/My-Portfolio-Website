import React from 'react';
import './Hero.css';
import samimImg from '../../assets/samim-profile-pic.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-pic" src={samimImg} alt="" />
      <h1>
        <span>I'm Samim Akter,</span> frontend developer based in India.
      </h1>
      <p>
        I am a frontend developer from West Bengal, India with 1 years of
        experience in web development
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
