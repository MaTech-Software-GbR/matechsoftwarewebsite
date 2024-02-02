import React from "react"

const ProjectBlock = React.lazy(
  async () => import("../components/ProjectBlock")
)

import gasthausschmidimage from "../images/references/GasthausSchmid.webp"
import gutriedbichllogo from "../images/references/Logo_Gut_Riedbichl_quadrat.webp"
import jbmlogo from "../images/references/jbm-logo.webp"
import johannahairandmakeuplogo from "../images/references/johannahairandmakeup.webp"
import matechlaptoplogo from "../images/references/matechlaptop.webp"
import rehalogo from "../images/references/reha-logo.webp"
import thaihauslogo from "../images/references/thaihaus.webp"

const Work: React.FC = () => (
  <div>
    <section className="s-works target-section" id="works">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Referenzen</h3>
          <h1>Unsere Projekte.</h1>

          <p className="lead">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Gewinnen Sie
            Einblicke in unsere erfolgreichen Projekte und überzeugen Sie sich
            selbst von unserer Arbeit. Wir setzen Ihre Ideen um und begleiten
            Sie von der Planung bis zur Umsetzung, um Ihre Vision zu
            verwirklichen.
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
            brickTitle="Brautstyling Johanna Löw"
            dataSize="1450x700"
            href="https://www.johannahairandmakeup.de"
            imgAlt="Johannahairandmakeup Logo"
            imgSrc={johannahairandmakeuplogo}
            title="Brautstyling Johanna Löw"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting, Logo, Google My Business"
            brickTitle="Reha-Zentrum Riedbichl"
            dataSize="1050x700"
            href="https://www.rehazentrum-riedbichl.de"
            imgAlt="Rehazentrum Riedbichl Logo"
            imgSrc={rehalogo}
            title="Reha-Zentrum Riedbichl"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting, Logo, Google My Business"
            brickTitle="Thai Haus Restaurant"
            dataSize="1050x700"
            href="https://www.thai-haus-feldkirchen.de"
            imgAlt="Thaihaus Restaurant Logo"
            imgSrc={thaihauslogo}
            title="Thai Haus Restaurant"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting, Google My Business"
            brickTitle="Gasthaus Schmid"
            dataSize="1050x700"
            href="https://www.gasthaus-schmid.de"
            imgAlt="Gasthaus Schmid Logo"
            imgSrc={gasthausschmidimage}
            title="Gut Riedbichl"
          />

          <ProjectBlock
            brickCategory="Konzept, Entwicklung, Hosting"
            brickTitle="Gut Riedbichl"
            dataSize="1450x700"
            href="https://www.gut-riedbichl.de"
            imgAlt="Gut Riedbichl Logo"
            imgSrc={gutriedbichllogo}
            title="Gut Riedbichl"
          />

          <ProjectBlock
            brickCategory="..."
            brickTitle="Ihr Projekt"
            dataSize="1050x700"
            href="/#contact"
            imgAlt="Matech Software Laptop mit Smartphone Logo"
            imgSrc={matechlaptoplogo}
            title="Ihr Projekt"
          />
        </div>
      </div>
    </section>
  </div>
)

export default Work
