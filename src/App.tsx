import React, { useCallback, useEffect, useRef, useState } from "react"
import Homepage from "./pages/Homepage"

interface MtmEvent {
  "mtm.startTime": number
  event: string
}

declare global {
  interface Window {
    mtmEvent: MtmEvent[]
  }
}

const App: React.FC = () => {
  const [, setScrollOffset] = useState(0)
  const onScroll = useCallback(() => {
    setScrollOffset(window.scrollY)
  }, [])

  const ANALYTICS_SCRIPT_URL =
    "https://analytics.matech-software.de/js/container_Dwaw5hA9.js"

  const scrollReference = useRef<HTMLDivElement>(null)

  const setupAnalyticsScript = (): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const matomoEvents = (window.mtmEvent = window.mtmEvent || [])
    matomoEvents.push({
      "mtm.startTime": Date.now(),
      event: "mtm.Start"
    })

    const createdScript = document.createElement("script")
    const firstScript = document.querySelectorAll("script")[0]
    createdScript.async = true
    createdScript.src = ANALYTICS_SCRIPT_URL
    firstScript.parentNode?.insertBefore(createdScript, firstScript)
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
    <div className="App" ref={scrollReference}>
      <Homepage />
    </div>
  )
}

export default App
