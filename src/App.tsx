import React, { useCallback, useEffect, useRef, useState } from "react"
import Homepage from "./pages/Homepage"

interface MtmEvent {
  "mtm.startTime": number
  event: string
}

declare global {
  interface Window {
    _mtm: MtmEvent[]
  }
}

const App: React.FC = () => {
  const [, setScrollOffset] = useState(0)
  const onScroll = useCallback(() => {
    setScrollOffset(window.scrollY)
  }, [])

  const ANALYTICS_SCRIPT_URL =
    "https://analytics.matech-software.de/js/container_Dwaw5hA9.js"

  const scrollRef = useRef<HTMLDivElement>(null)

  const setupAnalyticsScript = (): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const matomoEvents = (window._mtm = window._mtm || [])
    matomoEvents.push({
      "mtm.startTime": new Date().getTime(),
      event: "mtm.Start"
    })

    const newScript = document.createElement("script")
    const firstScript = document.getElementsByTagName("script")[0]
    newScript.async = true
    newScript.src = ANALYTICS_SCRIPT_URL
    firstScript.parentNode?.insertBefore(newScript, firstScript)
  }

  useEffect(() => {
    setupAnalyticsScript()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return (
    <div className="App" ref={scrollRef}>
      <Homepage />
    </div>
  )
}

export default App
