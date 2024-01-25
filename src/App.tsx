import React, { useCallback, useEffect, useRef, useState } from "react"

const Homepage = React.lazy(async () => import("./pages/Homepage"))
interface MtmEvent {
  event: string
  "mtm.startTime": number
}

declare global {
  interface Window {
    mtmEvent: MtmEvent[]
  }
}

const loadAnalyticsScript = async (): Promise<void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    window.mtmEvent = window.mtmEvent || []
    window.mtmEvent.push({
      event: "mtm.Start",
      "mtm.startTime": Date.now()
    })

    const script = document.createElement("script")
    script.async = true
    script.src = "https://analytics.matech-software.de/js/container_Dwaw5hA9.js"
    script.type = "text/javascript"

    document.body.append(script)
  } catch (error) {
    console.error("Error loading analytics script:", error)
  }
}

const App: React.FC = () => {
  const [, setScrollOffset] = useState(0)
  const onScroll = useCallback(() => {
    setScrollOffset(window.scrollY)
  }, [])

  const scrollReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadAnalyticsScript()
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
