import React from "react"
import developerimage1 from "../images/Maxi001.webp"
import developerimage2 from "../images/Manu001.webp"
import SocialLink from "../components/SocialLink"

const AboutUs: React.FC = () => {
  return (
    <div>
      <section id="about" className="s-blog target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Über uns</h3>
            <h1>Das macht uns aus.</h1>
            <p className="lead">
              Unsere GbR wurde anfänglich gegründet, um Unternehmen während der
              Corona-Pandemie dabei zu helfen, online aktuelle Informationen zu
              teilen. Seitdem haben wir uns darauf fokussiert auch weiterhin
              passgenaue Lösungen für unsere Kunden zu entwickeln. Dabei streben
              wir stets höchste Passgenauigkeit und Qualität an.
            </p>
          </div>
        </div>

        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full illustration">
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              alt="Symbol für Entwickler: Eine Person, die auf einem Hocker sitzt und an einem Computer arbeitet"
              src={developerimage1}
            />
          </div>
          <div className="col-six tab-full">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h2>Maximilian Gobbel</h2>
                  <h5>Fachgebiet: Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Ich bin ein ausgebildeter Fachinformatiker mit Erfahrung in
                    Datenbanken, Programmierung, Kundensupport und
                    Netzwerktechnik. Ich habe auch ein duales Informatik-Studium
                    abgeschlossen und meinen Bachelor of Science erworben. Mit
                    mehr als drei Jahren Berufserfahrung als Softwareentwickler
                    verfüge ich über die Fähigkeit, komplexe Probleme zu lösen.
                    Ich strebe danach, auf dem neuesten Stand der Technik und
                    aktueller Konzepte zu bleiben, um meine Arbeit auf höchstem
                    Niveau auszuführen. Besuchen Sie gerne mein LinkedIn-Profil,
                    um mehr über meine Fähigkeiten und Erfahrungen zu erfahren
                    und sich zu vernetzen.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <SocialLink
                    href="https://www.linkedin.com/in/maximilian-gobbel/"
                    iconClass="im im-linkedin"
                    linkText="Linkedin"
                  />
                  <SocialLink
                    href="mailto:kontakt@matech-software.de"
                    iconClass="im im-mail"
                    linkText="Email"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full illustration">
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              alt="Symbol für Entwickler: Eine Person, die vor einem Fenster am Schreibtisch an einem Computer arbeitet"
              src={developerimage2}
            />
          </div>
          <div className="col-six tab-full">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h2>Manuel Kühnle</h2>
                  <h5>Fachgebiet: Wirtschaft und Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Durch meinen Bachelorabschluss im Bereich Wirtschaft und
                    Informatik an der TU München konnte ich mir insbesondere
                    starke Programmierkenntnisse aneignen. Die Informatik hat
                    mich von Anfang an fasziniert und ich freue mich, mein
                    Wissen unter anderem als Nachhilfelehrer weitergeben zu
                    können. Informatik-Arbeitserfahrung konnte ich bisher unter
                    anderem bei einem Münchener Start-up als Data Analyst
                    sammeln. Bei MaTech schätze ich die Möglichkeit, mein
                    Know-how in die Praxis umzusetzen, meine Fähigkeiten
                    auszubauen und mit Kunden aus verschiedenen Bereichen
                    zusammenzuarbeiten.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <SocialLink
                    href="https://www.linkedin.com/in/m-kuehnle/"
                    iconClass="im im-linkedin"
                    linkText="Linkedin"
                  />
                  <SocialLink
                    href="mailto:kontakt@matech-software.de"
                    iconClass="im im-mail"
                    linkText="Email"
                  />
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
  )
}
export default AboutUs
