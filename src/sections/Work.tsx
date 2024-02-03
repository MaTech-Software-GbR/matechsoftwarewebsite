import React from "react"

const ProjectBlock = React.lazy(
  async () => import("../components/ProjectBlock")
)

import jbmlogo from "../images/references/jbm-logo.webp"
import johannahairandmakeuplogo from "../images/references/johannahairandmakeup.webp"
import rehalogo from "../images/references/reha-logo.webp"

const Work: React.FC = () => (
  <div>
    <section className="s-works target-section" id="works">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Referenzen</h3>
          <h1>Aktuelle Projekte.</h1>

          <p className="lead">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Gewinnen Sie
            Einblicke in ausgewählte Projekte und überzeugen Sie sich selbst von
            unserer Arbeit. Wir setzen Ihre Ideen um und begleiten Sie von der
            Planung bis zur Umsetzung, um Ihre Vision zu verwirklichen.
          </p>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry">
          <ProjectBlock
            brickCategory="Konzept, Hosting"
            brickTitle="JBM Visuals"
            dataSize="1450x700"
            href="https://www.jbm-visuals.de"
            imgAlt="JBM Visuals Logo"
            imgSrc={jbmlogo}
            title="JBM Visuals"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting, Logo Überarbeitung, Google My Business"
            brickTitle="Johanna hair and make-up"
            dataSize="1528x1528"
            href="https://www.johannahairandmakeup.de"
            imgAlt="Johannahairandmakeup Logo"
            imgSrc={johannahairandmakeuplogo}
            title="Brautstyling Johanna Löw"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting, Logo, Google My Business"
            brickTitle="Reha-Zentrum Gut Riedbichl"
            dataSize="1050x700"
            href="https://www.rehazentrum-riedbichl.de"
            imgAlt="Rehazentrum Riedbichl Logo"
            imgSrc={rehalogo}
            title="Reha-Zentrum Riedbichl"
          />
        </div>
      </div>
    </section>
  </div>
)

export default Work
