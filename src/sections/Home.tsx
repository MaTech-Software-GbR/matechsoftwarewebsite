import React, { useEffect } from "react"

import SocialLink from "../components/SocialLink"

const Typewriter = React.lazy(async () => import("typewriter-effect"))

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = (): void => {
      const parallax = document.querySelector(".s-home") as HTMLElement
      const scrollPosition = window.scrollY
      if (parallax !== null) {
        parallax.style.backgroundPosition = `center calc(50% + ${
          scrollPosition * 0.5
        }px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <section className="s-home page-hero target-section" id="home">
        <div className="overlay" />
        <div className="shadow-overlay" />

        <div className="home-content">
          <div className="row home-content__main">
            <h3>Willkommen bei MaTech Software GbR</h3>

            <h1>
              Wir sind Manuel und Maxi. <br />
              <div className="inline-block">Wir sind&nbsp;</div>
              <div className="inline-block">
                <React.Suspense fallback={<div>Programmierer</div>}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      strings: [
                        "MaTech Software.",
                        "Programmierer.",
                        "Lösungsfinder.",
                        "Entwickler.",
                        "Chaosbewältiger.",
                        "Coder.",
                        "Problemlöser."
                      ]
                    }}
                  />
                </React.Suspense>
              </div>
            </h1>

            <div className="home-content__buttons">
              <a className="btn btn--stroke" href="/#works">
                Letztes Projekt
              </a>
              <a className="btn btn--stroke" href="/#about">
                Mehr über uns
              </a>
            </div>

            <div className="home-content__scroll">
              <a className="scroll-link" href="/#services">
                <span className="hover-effect">Unsere Leistungen</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="home-social">
          <SocialLink
            href="https://www.linkedin.com/company/matech-software"
            iconClass="im im-linkedin"
            linkText="LinkedIn"
          />
          <SocialLink
            href="mailto:kontact@matech-software.de"
            iconClass="im im-mail"
            linkText="Email"
          />
        </ul>
      </section>
    </div>
  )
}

export default Home
