import React, { useEffect, useRef, useState } from "react"

import logo from "../images/logo.png"
import { type StickyProperties } from "../models/StickyProperties.Interface"

const Header: React.FC<StickyProperties> = ({ shouldBeSticky }) => {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const navReference = useRef<HTMLDivElement>(null)
  const windowReference = useRef<Window>(window)

  useEffect(() => {
    const windowVariable = windowReference.current
    const handleScroll = (): void => {
      const sections = document.querySelectorAll("section")
      for (const section of sections) {
        const sectionTop = section.offsetTop - 50
        const sectionHeight = section.offsetHeight
        const sectionBottom = sectionTop + sectionHeight
        const scrollPosition = windowReference.current.scrollY
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      }
    }

    windowVariable.addEventListener("scroll", handleScroll)
    return () => {
      windowVariable.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault()
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (navReference.current != undefined) {
      navReference.current.style.display =
        navReference.current.style.display === "block" ? "none" : "block"
    }
  }

  const handleNavClick = (): void => {
    if (navReference.current != undefined) {
      navReference.current.style.display =
        navReference.current.style.display === "block" ? "none" : "block"
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div>
      <header className={`s-header ${shouldBeSticky ? "sticky-navbar" : ""}`}>
        <div className="header-logo">
          <a className="site-logo" href="/" onClick={handleNavClick}>
            <img alt="MaTech Software GbR Logo" src={logo} />
          </a>
        </div>
        <nav className="header-nav-wrap" ref={navReference} role="navigation">
          <ul className="header-nav">
            <li className={activeSection === "home" ? "current" : ""}>
              <a href="/#home" onClick={handleNavClick} title="home">
                Start
              </a>
            </li>
            <li className={activeSection === "services" ? "current" : ""}>
              <a href="/#services" onClick={handleNavClick} title="services">
                Leistungen
              </a>
            </li>
            <li className={activeSection === "works" ? "current" : ""}>
              <a href="/#works" onClick={handleNavClick} title="works">
                Referenzen
              </a>
            </li>
            <li className={activeSection === "about" ? "current" : ""}>
              <a href="/#about" onClick={handleNavClick} title="about">
                Über uns
              </a>
            </li>
            <li className={activeSection === "contact" ? "current" : ""}>
              <a href="/#contact" onClick={handleNavClick} title="contact">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <a
          className={`header-menu-toggle ${
            isMobileMenuOpen ? "is-clicked" : ""
          }`}
          href="/"
          onClick={toggleMobileMenu}
        >
          <span>Menu</span>
        </a>
      </header>
    </div>
  )
}

export default Header
