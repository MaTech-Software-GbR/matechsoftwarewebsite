import React from "react"

import { type ServiceBoxData } from "../models/ServiceBoxData.Interface"

const ServiceBox: React.FC<ServiceBoxData> = ({ imgAlt, imgSrc, name }) => {
  return (
    <div className="box">
      <h3>{name}</h3>
      <div className="image-container">
        <img alt={imgAlt} loading="lazy" src={imgSrc} />
      </div>
    </div>
  )
}

export default ServiceBox
