import React from "react"
import { Link } from "react-router-dom"

import SocialLink from "../components/SocialLink"
import logo from "../images/logo.webp"

interface Ucentrics {
  showSecondLayer: () => void
}

declare global {
  interface Window {
    UC_UI: Ucentrics
  }
}

const openConsentTool = (): void => {
  if (
    window.UC_UI !== undefined &&
    typeof window.UC_UI.showSecondLayer === "function"
  ) {
    window.UC_UI.showSecondLayer()
  }
}

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a
                className="footer-site-logo"
                href="/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="MaTech Software Logo Footer"
                  loading="lazy"
                  src={logo}
                />
              </a>
            </div>

            <ul className="footer-social">
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
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>
                © Copyright MaTech Software GbR {new Date().getFullYear()}
              </span>

              <span>
                <Link to="/impressum">Impressum</Link>
              </span>
              <span>
                <Link to="/datenschutz">Datenschutz</Link>
              </span>
              <span>
                <Link
                  onClick={(event) => {
                    event.preventDefault()
                    openConsentTool()
                  }}
                  to="/"
                >
                  Cookie-Einstellungen
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
