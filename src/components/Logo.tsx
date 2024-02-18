import React, { useEffect, useRef } from "react"

import { ServicesLogo } from "../models/ServicesLogoProperties.Interface"

const Logo: React.FC<ServicesLogo> = ({ alt, delay, src }: ServicesLogo) => {
  const imgReference = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            imgReference.current &&
            imgReference.current.complete
          ) {
            imgReference.current.style.animationName = "fade-up"
            imgReference.current.style.animationDuration = "1s"
            imgReference.current.style.animationDelay = `${delay}ms`
            imgReference.current.style.animationFillMode = "both"
          }
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1
      }
    )

    if (imgReference.current) {
      observer.observe(imgReference.current)
    }

    return () => {
      if (imgReference.current) {
        observer.unobserve(imgReference.current)
      }
    }
  })

  return (
    <div className="leistungen">
      <img alt={alt} ref={imgReference} src={src} />
    </div>
  )
}

export default Logo
