import React from "react"
import { type ProjectData } from "../models/project.interface"

const ProjectBlock: React.FC<ProjectData> = ({
  href,
  title,
  dataSize,
  imgSrc,
  imgAlt,
  brickTitle,
  brickCategory
}) => (
  <div className="masonry__brick">
    <div className="item-folio">
      <div className="item-folio__thumb">
        <a
          href={href}
          title={title}
          data-size={dataSize}
          target="_blank"
          rel="noopener noreferrer"
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
