import React from "react"

import { type ProjectData } from "../models/ProjectData.Interface"

const ProjectBlock: React.FC<ProjectData> = ({
  brickCategory,
  brickTitle,
  dataSize,
  href,
  imgAlt,
  imgSrc,
  title
}) => (
  <div className="masonry__brick">
    <div className="item-folio">
      <div className="item-folio__thumb">
        <a
          data-size={dataSize}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
        >
          <img alt={imgAlt} src={imgSrc} />
          <span className="shadow-overlay" />
          <div className="item-folio__text">
            <h3 className="item-folio__title">{brickTitle}</h3>
            <p className="item-folio__cat">{brickCategory}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

export default ProjectBlock
