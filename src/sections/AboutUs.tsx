import { gsap } from "gsap"
import React, { useEffect, useRef } from "react"

const SocialLink = React.lazy(() => import("../components/SocialLink"))
import developerimage2 from "../images/ManuelKuehnle.webp"
import developerimage1 from "../images/MaximilianGobbel.webp"

const AboutUs: React.FC = () => {
  const imgReference1 = useRef<HTMLImageElement>(null)
  const imgReference2 = useRef<HTMLImageElement>(null)
  const dot1Reference = useRef(null)
  const dot2Reference = useRef(null)
  const defaultEase = "power1.inOut"
  const defaultDuration = 0.5

  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: -1 })
    const tl2 = gsap.timeline({ repeat: -1 })

    tl1
      .to(dot1Reference.current, {
        duration: defaultDuration,
        ease: defaultEase,
        scale: 1.2
      })
      .to(
        dot1Reference.current,
        {
          duration: defaultDuration,
          ease: defaultEase,
          scale: 1
        },
        "+=0.5"
      )

    tl2
      .to(dot2Reference.current, {
        duration: defaultDuration,
        ease: defaultEase,
        scale: 1.2
      })
      .to(
        dot2Reference.current,
        {
          duration: defaultDuration,
          ease: defaultEase,
          scale: 1
        },
        "+=0.5"
      )
  }, [])

  return (
    <div>
      <section className="s-blog target-section" id="about">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Über uns</h3>
            <h1>Umkompliziert. Persönlich. Professionell.</h1>
            <p className="lead">
              Wir sind dein zuverlässiger Begleiter auf dem Weg zur digitalen
              Präsenz. Unsere Herangehensweise ist persönlich und individuell:
              Gemeinsam mit dir entwickeln wir maßgeschneiderte Lösungen. Dabei
              setzen wir auf modernste Technologien, um höchste Qualität zu
              gewährleisten.
            </p>
          </div>
        </div>

        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" ref={dot1Reference} />
                <div className="timeline__header">
                  <h2>Maximilian Gobbel</h2>
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
                    Niveau auszuführen. Besuche gerne mein LinkedIn-Profil, um
                    mehr über meine Fähigkeiten und Erfahrungen zu erfahren und
                    sich zu vernetzen.
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
          <div className="col-six tab-full illustration">
            <img
              alt="Bild von Maximilian Gobbel"
              loading="lazy"
              ref={imgReference1}
              src={developerimage1}
            />
          </div>
        </div>
        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full illustration">
            <img
              alt="Bild von Manuel Kühnle"
              ref={imgReference2}
              src={developerimage2}
            />
          </div>
          <div className="col-six tab-full">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" ref={dot2Reference} />
                <div className="timeline__header">
                  <h2>Manuel Kühnle</h2>
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
    </div>
  )
}
export default AboutUs
