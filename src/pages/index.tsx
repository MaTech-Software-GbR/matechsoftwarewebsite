import React, { useEffect, useRef, useState } from "react"
import AboutUs from "../app/components/AboutUs"
import Contact from "../app/components/Contact"
import Home from "../app/components/Home"
import Services from "../app/components/Services"
import Work from "../app/components/Work"
import BackToTopButton from "../app/components/BackToTopButton"
import { usePathname } from "next/navigation"

const Homepage: React.FC = () => {
  const [shouldBeSticky, setShouldBeSticky] = useState<boolean>(false)
  const windowRef = useRef<Window | null>(null)
  const path = usePathname()
  useEffect(() => {
    if (typeof window !== "undefined" && path === "/") {
      windowRef.current = window
      const windowVariable = windowRef.current
      const handleScroll = (): void => {
        const homeComponent = document.getElementById("services") as HTMLElement
        const homeComponentTop = homeComponent.getBoundingClientRect().top
        homeComponentTop <= 0
          ? setShouldBeSticky(true)
          : setShouldBeSticky(false)
      }

      windowVariable.addEventListener("scroll", handleScroll)
      return () => {
        windowVariable.removeEventListener("scroll", handleScroll)
      }
    }
  }, [path])

  return (
    <div>
      <Home />
      <Services />
      <Work />
      <AboutUs />
      <Contact />
      {
        // Here we're rendering the BackToTopButton component.
      }
      <div className={`go-top ${shouldBeSticky ? "fadeIn" : "fadeOut"}`}>
        <BackToTopButton isVisible={shouldBeSticky} />
      </div>
    </div>
  )
}

export default Homepage
