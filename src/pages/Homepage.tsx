import { debounce } from "lodash"
import React, { useEffect, useRef, useState } from "react"

import BackToTopButton from "../components/BackToTopButton"
import AboutUs from "../sections/AboutUs"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import Home from "../sections/Home"
import Services from "../sections/Services"
import Work from "../sections/Work"

const Homepage: React.FC = () => {
  const [shouldBeSticky, setShouldBeSticky] = useState<boolean>(false)
  const windowReference = useRef<Window>(window)

  useEffect(() => {
    const windowVariable = windowReference.current
    const handleScroll = debounce((): void => {
      const homeComponent = document.querySelector("#services") as HTMLElement
      if (homeComponent) {
        const homeComponentTop = homeComponent.getBoundingClientRect().top
        setShouldBeSticky(homeComponentTop <= 0)
      }
    }, 100)

    windowVariable.addEventListener("scroll", handleScroll)
    return () => {
      windowVariable.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Header shouldBeSticky={shouldBeSticky} />
      <Home />
      <Services />
      <Work />
      <AboutUs />
      <Contact />
      <Footer />

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
