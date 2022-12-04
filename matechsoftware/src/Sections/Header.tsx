import React from 'react';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <div>
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={logo} alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className="current">
              <a className="smoothscroll" href="#home" title="home">
                Start
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="about">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#works" title="works">
                Referenzen
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#blog" title="blog">
                Über uns
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact">
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
