import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', delay: 100 });
  }, []);

  return (
    <div>
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Leistungen</h3>
            <h1>In guten Händen.</h1>
            <p className="lead">
              Willkommen bei uns! Wir sind hier, um Ihnen zu helfen und Ihnen
              eine maßgeschneiderte Lösung zu bieten, die genau auf Ihre
              Bedürfnisse zugeschnitten ist. Wir verstehen, dass jedes Projekt
              einzigartig ist und wir sind voller Begeisterung, Ihnen zu zeigen,
              wie wir Ihnen helfen können.
              <br></br>
              <br></br>
              Unser Ziel ist es, nicht nur Ihre Erwartungen zu erfüllen, sondern
              sie zu übertreffen. Deshalb bieten wir Ihnen eine unverbindliche
              Erstberatung an, bei der wir uns Zeit nehmen, um Ihre
              Anforderungen genau zu verstehen. Wir sind stolz darauf, uns auf
              unsere Erfahrung, Fachkompetenz und unser Engagement zu verlassen,
              um die beste Lösung für Sie zu finden.
            </p>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Unsere Leistungen im Überblick:</h3>
            <div className=" services">
              <div className="service">
                <h4>Unternehmenswebsite</h4>
                <p>
                  Erstellung einer modernen und ansprechenden Website mit
                  Content Management System (z.B. WordPress) oder individueller
                  Programmierung. So stellen wir sicher, dass Ihre Website
                  perfekt zu Ihrem Unternehmen passt.
                </p>
              </div>

              <div className="service">
                <h4>Webhosting</h4>
                <p>
                  Wir übernehmen die sichere und zuverlässige Bereitstellung
                  Ihrer Website auf unseren Servern. Backups und regelmäßige
                  Wartung sorgen dafür, dass Ihre Website immer reibungslos
                  läuft.
                </p>
              </div>

              <div className="service">
                <h4>Suchmaschinenoptimierung (SEO)</h4>
                <p>
                  Wir sorgen dafür, dass Ihre Website in den Suchergebnissen von
                  Google und anderen Suchmaschinen besser gefunden wird. Damit
                  erhöhen wir die Sichtbarkeit Ihrer Website und steigern die
                  Anzahl der Besucher.
                </p>
              </div>
            </div>
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
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="html5logo"
                  src={require('../images/technologies/html-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="bootstrap4Logo"
                  src={require('../images/technologies/bootstrap-4-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="200"
                  alt="csharpLogo"
                  src={require('../images/technologies/c-sharp-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="300"
                  alt="typescriptlogo"
                  src={require('../images/technologies/typescript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="400"
                  alt="dotnetlogo"
                  src={require('../images/technologies/microsoft-dot-net-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="500"
                  alt="pythonlogo"
                  src={require('../images/technologies/python-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  alt="javalogo"
                  src={require('../images/technologies/java-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="700"
                  alt="javascriptlogo"
                  src={require('../images/technologies/javascript-programming-language-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="800"
                  alt="csslogo"
                  src={require('../images/technologies/css-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="900"
                  alt="wordpresslogo"
                  src={require('../images/technologies/wordpress-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  alt="mysqllogo"
                  src={require('../images/technologies/mysql-icon.png')}
                />
              </div>
              <div className="leistungen">
                <img
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  alt="sqlserverlogo"
                  src={require('../images/technologies/sql-server-icon.png')}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  <div
          className="row "
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="col-seven ">
            <p>
              Und falls Ihr Anliegen hier noch nicht aufgeführt ist,
              kontaktieren Sie uns trotzdem gerne für eine unverbindliche
              Erstberatung. Wir finden garantiert eine Lösung, die perfekt zu
              Ihren Anforderungen passt.
            </p>

            <a
              href="#contact"
              className="btn "
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div> */}
      </section>
    </div>
  );
};
export default Services;
