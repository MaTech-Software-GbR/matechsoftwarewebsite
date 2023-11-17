import React from "react"
import { type ServicesLogo } from "../models/serviceslogo.interface"

const Logo: React.FC<ServicesLogo> = ({ delay, alt, src }: ServicesLogo) => (
  <div className="leistungen">
    <img data-aos="fade-up" data-aos-delay={delay} alt={alt} src={src} />
  </div>
)

export default Logo
