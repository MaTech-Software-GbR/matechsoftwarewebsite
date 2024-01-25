import React from "react"

import { type ServicesLogo } from "../models/ServicesLogoProperties.Interface"

const Logo: React.FC<ServicesLogo> = ({ alt, delay, src }: ServicesLogo) => (
  <div className="leistungen">
    <img
      alt={alt}
      data-aos="fade-up"
      data-aos-delay={delay}
      loading="lazy"
      src={src}
    />
  </div>
)

export default Logo
