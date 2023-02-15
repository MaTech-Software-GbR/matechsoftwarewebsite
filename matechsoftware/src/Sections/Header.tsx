import React, { useEffect } from 'react';
import { Background, Parallax } from 'react-parallax';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/office1.jpg')}
        bgImageAlt="the dog"
        strength={-200}
      >
        <Background className="custom-bg">
          <img src="../images/office1.jpg" alt="fill murray" />
        </Background>
        test
        <div style={{ height: '100vh' }}></div>
      </Parallax>
      <header className={window.scrollY > 790 ? 's-header test' : 's-header'}>
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={logo} alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className="current">
              <a href="#home" title="home">
                Start
              </a>
            </li>
            <li>
              <a href="#about" title="about">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#works" title="works">
                Referenzen
              </a>
            </li>
            <li>
              <a href="#blog" title="blog">
                Über uns
              </a>
            </li>
            <li>
              <a href="#contact" title="contact">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <a className="header-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </header>
    </div>
  );
};

export default Header;
