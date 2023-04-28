import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={window.scrollY > 790 ? 's-header sticky-navbar' : 's-header'}
      >
        <div className="header-logo">
          <a className="site-logo" href="/">
            <img src={logo} alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className={activeSection === 'home' ? 'current' : ''}>
              <a href="#home" title="home">
                Start
              </a>
            </li>
            <li className={activeSection === 'about' ? 'current' : ''}>
              <a href="#about" title="about">
                Leistungen
              </a>
            </li>
            <li className={activeSection === 'works' ? 'current' : ''}>
              <a href="#works" title="works">
                Referenzen
              </a>
            </li>
            <li className={activeSection === 'blog' ? 'current' : ''}>
              <a href="#blog" title="blog">
                Über uns
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'current' : ''}>
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
