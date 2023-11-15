import React from "react"
import gasthausschmidimage from "../images/references/GasthausSchmid.webp"
import rehalogo from "../images/references/reha-logo.webp"
import thaihauslogo from "../images/references/thaihaus.webp"
import matechlaptoplogo from "../images/references/matechlaptop.webp"
import gutriedbichllogo from "../images/references/Logo_Gut_Riedbichl_quadrat.webp"
import jbmlogo from "../images/references/jbm-logo.webp"
import ProjectBlock from "../components/ProjectBlock"

const Work: React.FC = () => {
  return (
    <div>
      <section id="works" className="s-works target-section">
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
              href="https://www.jbm-visuals.de"
              title="JBM Visuals"
              dataSize="1450x700"
              imgSrc={jbmlogo}
              imgAlt="JBM Visuals Logo"
              brickTitle="JBM Visuals"
              brickCategory="Konzept, Hosting"
            />

            <ProjectBlock
              href="https://www.thai-haus-feldkirchen.de"
              title="Thai Haus Restaurant"
              dataSize="1050x700"
              imgSrc={thaihauslogo}
              imgAlt="Thaihaus Restaurant Logo"
              brickTitle="Thai Haus Restaurant"
              brickCategory="Konzept, Design, Hosting, Logo"
            />

            <ProjectBlock
              href="https://www.rehazentrum-riedbichl.de"
              title="Reha-Zentrum Riedbichl"
              dataSize="1050x700"
              imgSrc={rehalogo}
              imgAlt="Rehazentrum Riedbichl Logo"
              brickTitle="Reha-Zentrum Riedbichl"
              brickCategory="Konzept, Design, Hosting, Logo"
            />

            <ProjectBlock
              href="https://www.gasthaus-schmid.de"
              title="Gut Riedbichl"
              dataSize="1050x700"
              imgSrc={gasthausschmidimage}
              imgAlt="Gasthaus Schmid Logo"
              brickTitle="Gasthaus Schmid"
              brickCategory="Konzept, Design, Hosting"
            />

            <ProjectBlock
              href="https://www.gut-riedbichl.de"
              title="Gut Riedbichl"
              dataSize="1450x700"
              imgSrc={gutriedbichllogo}
              imgAlt="Gut Riedbichl Logo"
              brickTitle="Gut Riedbichl"
              brickCategory="Konzept, Design, Hosting"
            />

            <ProjectBlock
              href="/#contact"
              title="Ihr Projekt"
              dataSize="1050x700"
              imgSrc={matechlaptoplogo}
              imgAlt="Matech Software Laptop mit Smartphone Logo"
              brickTitle="Ihr Projekt"
              brickCategory="..."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
