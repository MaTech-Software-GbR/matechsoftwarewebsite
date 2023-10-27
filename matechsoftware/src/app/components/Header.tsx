import React, { useEffect, useRef, useState } from "react"
import { type StickyProps } from "../../models/sticky.interface"
import Image from "next/image"
import Link from "next/link"

const Header: React.FC<StickyProps> = ({ shouldBeSticky }) => {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)
  const windowRef = useRef<Window | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // The code inside this block will only run on the client side
      windowRef.current = window
      const windowVariable = windowRef.current
      const handleScroll = (): void => {
        const sections = document.querySelectorAll("section")
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight
          const scrollPosition = windowVariable.scrollY
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id)
          }
        })
      }

      windowVariable.addEventListener("scroll", handleScroll)
      return () => {
        windowVariable.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const toggleMobileMenu = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault()
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (navRef.current != null) {
      navRef.current.style.display =
        navRef.current.style.display === "block" ? "none" : "block"
    }
  }

  const handleNavClick = (): void => {
    if (navRef.current != null) {
      navRef.current.style.display =
        navRef.current.style.display === "block" ? "none" : "block"
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div>
      <header className={`s-header ${shouldBeSticky ? "sticky-navbar" : ""}`}>
        <div className="header-logo">
          <Link className="site-logo" href="/" onClick={handleNavClick}>
            <Image
              src="/images/logo.png"
              width={200}
              height={41}
              alt="MaTech Software GbR Logo"
            />
          </Link>
        </div>
        <nav className="header-nav-wrap" ref={navRef}>
          <ul className="header-nav">
            <li className={activeSection === "home" ? "current" : ""}>
              <Link href="/#home" title="home" onClick={handleNavClick}>
                Start
              </Link>
            </li>
            <li className={activeSection === "services" ? "current" : ""}>
              <Link href="/#services" title="services" onClick={handleNavClick}>
                Leistungen
              </Link>
            </li>
            <li className={activeSection === "works" ? "current" : ""}>
              <Link href="/#works" title="works" onClick={handleNavClick}>
                Referenzen
              </Link>
            </li>
            <li className={activeSection === "about" ? "current" : ""}>
              <Link href="/#about" title="about" onClick={handleNavClick}>
                Über uns
              </Link>
            </li>
            <li className={activeSection === "contact" ? "current" : ""}>
              <Link href="/#contact" title="contact" onClick={handleNavClick}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          className={`header-menu-toggle ${
            isMobileMenuOpen ? "is-clicked" : ""
          }`}
          href="/"
          onClick={toggleMobileMenu}
        >
          <span>Menu</span>
        </Link>
      </header>
    </div>
  )
}

export default Header
