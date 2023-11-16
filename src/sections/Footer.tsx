import React from "react"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import SocialLink from "../components/SocialLink"

declare global {
  interface Window {
    UC_UI: any
  }
}

const Footer: React.FC = () => {
  const openConsentTool = (): void => {
    if (
      typeof window.UC_UI !== "undefined" &&
      typeof window.UC_UI.showSecondLayer === "function"
    ) {
      window.UC_UI.showSecondLayer()
    }
  }

  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a
                className="footer-site-logo"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="MaTech Software Logo Footer" src={logo} />
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
                linkText="E-Mail"
              />
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright MaTech Software GbR 2023</span>

              <span>
                <Link to="/impressum">Impressum</Link>
              </span>
              <span>
                <Link to="/datenschutz">Datenschutz</Link>
              </span>
              <span>
                <a className="pointer" onClick={openConsentTool}>
                  Cookie-Einstellungen
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
