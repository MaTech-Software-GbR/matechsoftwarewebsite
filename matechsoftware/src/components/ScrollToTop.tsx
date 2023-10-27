import { useEffect } from "react"
import { useRouter } from "next/router"

const ScrollToTop: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (): void => {
      window.scrollTo(0, 0)
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return null
}

export default ScrollToTop
