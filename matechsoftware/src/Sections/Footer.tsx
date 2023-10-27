import Image from "next/image"
import Link from "next/link"
import React from "react"

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
                <Image
                  alt="MaTech Software Logo Footer"
                  width={250}
                  height={51}
                  src="/images/logo.png"
                />
              </a>
            </div>

            <ul className="footer-social">
              <li>
                <a
                  href="https://www.linkedin.com/company/matech-software"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-linkedin" aria-hidden="true"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@matech-software.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-mail" aria-hidden="true"></i>
                  <span>Email</span>
                </a>
              </li>
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
                <Link href="/impressum">Impressum</Link>
              </span>
              <span>
                <Link href="/datenschutz">Datenschutz</Link>
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
