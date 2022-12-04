import React from 'react';
import '../App.css';
import '../Base.css';

const Services: React.FC = () => {
  return (
    <div>
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>Leistungen</h3>
            <h1>Was wir bieten</h1>
            <p className="lead">
              Durch unser Fachwissen im technischen als auch
              betriebswirtschaftlichen Bereich bieten wir Software für alle
              Bereiche und jederman an. Egal ob ein minimales CMS System oder
              eine aufwendig entwickelte Fullstack Applikation.
            </p>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Hi!</h3>

            <p>
              Unser oberstes Ziel ist es dem Kunden glücklich zu machen indem
              alle Anforderungen erfüllt werden. Daher wird bevor überhaupt eine
              Zusammenarbeit stattfinden kann die Machbarkeit und der Umfang des
              Projekts zusammen mit dem Kunden festgelegt.
            </p>

            <h5>Hier folgt ein slogan</h5>

            <p>
              Hier kommen unsere Leistungen hin. Google Analytics. SEO. Aber
              auch eine App, eine Software mit oder ohne Oberfläche,
              kontaktieren Sie uns und wir finden zusammen eine Lösung.
            </p>

            <a href="#contact" className="btn full-width smoothscroll test">
              Beauftrage uns jetzt
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
                <img src={require('../images/technologies/html-icon.png')} />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/bootstrap-4-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/c-sharp-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/typescript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/microsoft-dot-net-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/python-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/java-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/javascript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img src={require('../images/technologies/css-icon.png')} />
              </div>
              <div className="leistungen">
                <img
                  src={require('../images/technologies/wordpress-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img src={require('../images/technologies/mysql-icon.png')} />
              </div>
              <div className="leistungen">
                <img
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
