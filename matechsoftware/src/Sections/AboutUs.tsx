import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      <section id="blog" className="s-blog target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Über uns</h3>
            <h1>Das macht uns aus.</h1>
            <p className="lead">
              Unsere GbR wurde anfänglich gegründet, um einem Unternehmen
              während der Corona-Pandemie dabei zu helfen, online aktuelle
              Informationen zu teilen. Seitdem haben wir uns darauf fokussiert,
              unsere im Studium erlernten Fähigkeiten in der Praxis anzuwenden,
              um passgenaue Lösungen für unsere Kunden zu entwickeln.
            </p>
          </div>
        </div>

        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h3>Maximilian Gobbel</h3>
                  <h5>Fachgebiet: Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Durch meine Ausbildung zum Fachinformatiker für
                    Systemintegration konnte ich bereits praktische Erfahrung in
                    den Bereichen Datenbanken, Programmieren, Kundensupport und
                    Netzwerktechnik sammeln. Anschließend begann ich ein duales
                    Informatik Studium, das ich mit dem Bachelor of Science
                    abschließen konnte. Die Bachelorarbeit umfasste das
                    Themengebiet Interprozesskommunikation mit der Technologie
                    gRPC. Vor, während und nach dem Studium konnte ich bereits
                    mehr als drei Jahre Berufserfahrung sammeln.
                    <br />
                    <br />
                    Seitdem bin ich hauptberuflich als Softwareentwickler im
                    Backendbereich in München tätig.
                    <br />
                    <br />
                    Ich brenne dafür, Probleme zu lösen, egal welcher Art. Mein
                    Fokus liegt darauf, stets aktuelle Technologien und Konzepte
                    zu verwenden, um "State of the Art" zu bleiben. Für mehr
                    Informationen über mich können Sie gerne mein
                    LinkedIn-Profil besuchen und sich mit mir vernetzen.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <li>
                    <a href="https://www.linkedin.com/in/maximilian-gobbel/">
                      <i className="im im-linkedin" aria-hidden="true"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:kontakt@matech-software.de">
                      <i className="im im-mail" aria-hidden="true"></i>
                      <span>E-Mail</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-six tab-full right illustration">
            <img
              alt="developericon1"
              src={require('../images/imagemaxi.png')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-six tab-full left illustration">
            <img
              alt="developericon2"
              src={require('../images/imagemanuel.png')}
            />
          </div>
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h3>Manuel Kühnle</h3>
                  <h5>Fachgebiet: Wirtschaft und Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Vor kurzem habe ich mein Bachelorstudium im Bereich
                    Wirtschaft und Informatik an der TU München erfolgreich
                    abgeschlossen. In dieser Zeit konnte ich insbesondere starke
                    Programmierkenntnisse erlangen. Die Informatik hat mich von
                    Anfang an fasziniert und ich freue mich, mein Wissen unter
                    anderem als Tutor weiterzugeben. Bei MaTech habe ich die
                    Möglichkeit, mein Know-how in die Praxis umzusetzen und
                    nützliche Fähigkeiten zu entwickeln. In meiner
                    Bachelorarbeit habe ich mich tief mit technischen
                    Erfolgsfaktoren von Non-Fungible Tokens (NFT) befasst und
                    eine umfangreiche Analyse von 1,4 Mio Transaktionen
                    durchgeführt. Mein LinkedIn-Post gibt Ihnen bei Interesse
                    weitere Einblicke in dieses Thema.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <li>
                    <a href="https://www.linkedin.com/in/m-kuehnle/">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s-cta">
        <div className="row narrow cta">
          <div className="col-full cta__content">
            <h2 className="h01">Haben wir Ihr Interesse geweckt?</h2>

            <p className="lead">
              Dann senden Sie uns jetzt eine Kontaktanfrage für eine
              unverbindliche Beratung. Wir freuen uns auf Sie.
            </p>

            <div className="cta__action">
              <a className="btn btn--primary btn--large" href="#contact">
                Jetzt kontaktieren
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
