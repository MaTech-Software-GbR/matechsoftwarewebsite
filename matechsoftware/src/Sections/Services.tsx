import React from 'react';
import '../SCSS/App.scss';
import '../SCSS/Base.scss';

const Services: React.FC = () => {
  return (
    <div>
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>Leistungen</h3>
            <h1>In guten Händen.</h1>
            <p className="lead">
              Durch unser breites Fachwissen im technischen sowie im
              betriebswirtschaftlichen Kontext finden wir für jeden Kunden eine
              passende Lösung. Angefangen bei einer simplen Website für eine
              gelungene Online-Präsenz bis hin zu umfangreichen Applikationen -
              wir kümmern uns um ihr Anliegen.
            </p>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Herzlich Willkommen</h3>

            <p>
              Jedes Projekt ist einzigartig, da jeder Kunde individuelle
              Anforderungen hat. Unser Ziel ist es, Ihr persönliches Anliegen zu
              verstehen und Ihnen die bestmögliche Lösung zu liefern. Deshalb
              bieten wir jedem Interessenten eine unverbindliche Erstberatung
              an.
            </p>

            <h4>Auszug unserer Leistungen</h4>

            <ul>
              <li>
                Unternehmenswebsite mit Content Management System (z.B.
                WordPress) oder Programmierung (z.B. HTML, CSS, JavaScript)
              </li>
              <li>Professionelle Email-Adressen, passend zu Ihrer Website</li>
              <li>Webhosting mit Backups und Wartung</li>
              <li>
                Fullstack Applikation (z.B. Typescript Frontend, C# Backend,
                MySql Datenbank)
              </li>
              <li>Suchmaschinenoptimierung (SEO)</li>
              <li>Analysetools (z.B. Google Analytics)</li>
              <li>
                Einrichtung und Aktualisierung von Online-Präsenzen (z.B. Google
                MyBusiness, Tripadvisor)
              </li>
              <li>Cloud Applikationen</li>
            </ul>

            <p>
              Falls Ihr Anliegen hier noch nicht aufgeführt ist, kontaktieren
              Sie uns trotzdem gerne für eine unverbindliche Erstberatung.
            </p>

            <a href="#contact" className="btn full-width">
              Jetzt Kontakt aufnehmen
            </a>
          </div>

          <div className="col-six tab-full right technologies">
            <h3>
              Unser breit gefächertes Fachwissen.
              <br />
              Gekoppelt mit mehrjähriger Erfahrung.
            </h3>
            <div className="flex flex-wrap justify-center">
              <div className="leistungen">
                <img
                  alt="html5logo"
                  src={require('../images/technologies/html-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="bootstrap4Logo"
                  src={require('../images/technologies/bootstrap-4-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="csharpLogo"
                  src={require('../images/technologies/c-sharp-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="typescriptlogo"
                  src={require('../images/technologies/typescript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="dotnetlogo"
                  src={require('../images/technologies/microsoft-dot-net-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="pythonlogo"
                  src={require('../images/technologies/python-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="javalogo"
                  src={require('../images/technologies/java-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="javascriptlogo"
                  src={require('../images/technologies/javascript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="csslogo"
                  src={require('../images/technologies/css-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="wordpresslogo"
                  src={require('../images/technologies/wordpress-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="mysqllogo"
                  src={require('../images/technologies/mysql-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  alt="sqlserverlogo"
                  src={require('../images/technologies/sql-server-icon.png')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
