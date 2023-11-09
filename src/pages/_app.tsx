import React, { useCallback, useEffect, useRef, useState } from "react"
import Homepage from "./index"
import "../styles/Base.scss"
import "../styles/App.scss"
import "../iconic/css/iconmonstr-iconic-font.min.css"
import "../styles/Fonts.scss"
import Head from "next/head"
import { useRouter } from "next/router"
import Impressum from "./impressum"
import Datenschutz from "./datenschutz"
import ErrorPage from "../error-page"
import RootLayout from "../app/components/layout"
import ScrollToTop from "../app/components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"

declare global {
  interface Window {
    _mtm: any
  }
}

const App: React.FC = () => {
  const router = useRouter()
  const [, setOffset] = useState(0)
  const onScroll = useCallback(() => {
    setOffset(window.scrollY)
  }, [])

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const _mtm = (window._mtm = window._mtm || [])
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" })
    ;(function () {
      const d = document
      const g = d.createElement("script")
      const s = d.getElementsByTagName("script")[0]
      g.async = true
      g.src = "https://analytics.matech-software.de/js/container_Dwaw5hA9.js"
      s.parentNode?.insertBefore(g, s)
    })()
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  let currentDisplay

  // Conditionally render components based on the route
  if (router.pathname === "/") {
    currentDisplay = <Homepage />
  } else if (router.pathname === "/impressum") {
    currentDisplay = <Impressum />
  } else if (router.pathname === "/datenschutz") {
    currentDisplay = <Datenschutz />
  } else {
    // Handle 404 - Not Found
    currentDisplay = <ErrorPage />
  }

  return (
    <div className="App" ref={scrollRef}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MaTech Software GbR</title>
      </Head>
      <RootLayout>
        <ScrollToTop />
        {currentDisplay}
      </RootLayout>
    </div>
  )
}

export default App
