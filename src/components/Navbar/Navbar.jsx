import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className="navbar">
      <h1 className="logo">Samim</h1>
      <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open'/>
      <ul className="nav-menu" ref={menuRef}>
        <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')} className="nav-link">
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')} className="nav-link">
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')} className="nav-link">
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')} className="nav-link">
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')} className="nav-link">
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
