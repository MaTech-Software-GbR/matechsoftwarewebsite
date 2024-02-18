import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { type ServiceBoxData } from "../models/ServiceBoxData.Interface"

const ServiceBox: React.FC<ServiceBoxData> = ({ imgAlt, imgSrc, name }) => {
  return (
    <div className="box">
      <h3>{name}</h3>
      <img alt={imgAlt} loading="lazy" src={imgSrc} />
    </div>
  )
}

export default ServiceBox
