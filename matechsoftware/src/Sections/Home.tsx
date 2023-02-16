import React from 'react';
import { Parallax } from 'react-parallax';

import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (
    <div>
      <section id="home" className="s-home page-hero target-section">
        <div className="overlay"></div>
        <div className="shadow-overlay"></div>

        <div className="home-content">
          <div className="row home-content__main">
            <h3>Willkommen bei MaTech Software GbR</h3>

            <h1>
              Wir sind Manuel und Maxi. <br />
              <div className="typewriter">
                Wir sind
                <Typewriter
                  options={{
                    strings: ['Programmierer', 'Berater', 'Problemlöser'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h1>

            <div className="home-content__buttons">
              <a href="#works" className="btn btn--stroke">
                Letztes Projekt
              </a>
              <a href="#about" className="btn btn--stroke">
                Mehr über uns
              </a>
            </div>

            <div className="home-content__scroll">
              <a href="#about" className="scroll-link">
                <span>Unsere Leistungen</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="home-social">
          <li>
            <a href="https://www.linkedin.com/company/matech-software">
              <i className="im im-linkedin" aria-hidden="true"></i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="mailto:kontakt@matech-software.de">
              <i className="im im-mail" aria-hidden="true"></i>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
