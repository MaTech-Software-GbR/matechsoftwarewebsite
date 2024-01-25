import React from "react"

import Logo from "../components/Logo"
import bootstrapicon from "../images/technologies/bootstrap-4-icon.webp"
import csharpicon from "../images/technologies/c-sharp-programming-language-icon.webp"
import cssicon from "../images/technologies/css-icon.webp"
import htmlicon from "../images/technologies/html-icon.webp"
import javaicon from "../images/technologies/java-programming-language-icon.webp"
import javascripticon from "../images/technologies/javascript-programming-language-icon.webp"
import dotneticon from "../images/technologies/microsoft-dot-net-icon.webp"
import mysqlicon from "../images/technologies/mysql-icon.webp"
import pythonicon from "../images/technologies/python-programming-language-icon.webp"
import sqlservericon from "../images/technologies/sql-server-icon.webp"
import typescripticon from "../images/technologies/typescript-programming-language-icon.webp"
import wordpressicon from "../images/technologies/wordpress-icon.webp"

const Services: React.FC = () => (
  <div>
    <section className="s-about target-section" id="services">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Leistungen</h3>
          <h1>In guten Händen.</h1>
          <p className="lead">
            Willkommen bei uns! Wir sind hier, um Ihnen zu helfen und Ihnen eine
            maßgeschneiderte Lösung zu bieten, die genau auf Ihre Bedürfnisse
            zugeschnitten ist. Wir verstehen, dass jedes Projekt einzigartig ist
            und wir sind voller Begeisterung, Ihnen zu zeigen, wie wir Ihnen
            helfen können.
          </p>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full left">
          <h2>Unsere Leistungen im Überblick:</h2>
          <div className=" services">
            <div className="service">
              <h3>Unternehmenswebsite</h3>
              <p>
                Erstellung einer modernen und ansprechenden Website mit Content
                Management System (z.B. WordPress) oder individueller
                Programmierung. So stellen wir sicher, dass Ihre Website perfekt
                zu Ihrem Unternehmen passt.
              </p>
            </div>

            <div className="service">
              <h3>Webhosting</h3>
              <p>
                Wir übernehmen die sichere und zuverlässige Bereitstellung Ihrer
                Website auf unseren Servern. Backups und regelmäßige Wartung
                sorgen dafür, dass Ihre Website immer reibungslos läuft.
              </p>
            </div>

            <div className="service">
              <h3>Suchmaschinenoptimierung (SEO)</h3>
              <p>
                Wir sorgen dafür, dass Ihre Website in den Suchergebnissen von
                Google und anderen Suchmaschinen besser gefunden wird. Damit
                erhöhen wir die Sichtbarkeit Ihrer Website und steigern die
                Anzahl der Besucher.
              </p>
            </div>
          </div>
        </div>

        <div className="col-six tab-full right technologies">
          <h2>
            Wissen.
            <br />
            Erfahrung.
            <br />
            Perfekt vereint.
          </h2>
          <div className="flex flex-wrap justify-center">
            <Logo alt="HTML 5 Logo" delay="100" src={htmlicon} />
            <Logo alt="Bootstrap 4 Logo" delay="200" src={bootstrapicon} />
            <Logo alt="C# Logo" delay="300" src={csharpicon} />
            <Logo alt="Typescript Logo" delay="400" src={typescripticon} />
            <Logo alt=".NET Logo" delay="500" src={dotneticon} />
            <Logo alt="Python Logo" delay="600" src={pythonicon} />
            <Logo alt="Java Logo" delay="700" src={javaicon} />
            <Logo alt="JavaScript Logo" delay="800" src={javascripticon} />
            <Logo alt="CSS Logo" delay="900" src={cssicon} />
            <Logo alt="Wordpress Logo" delay="1000" src={wordpressicon} />
            <Logo alt="MySQL Logo" delay="1100" src={mysqlicon} />
            <Logo alt="SQL Server Logo" delay="1200" src={sqlservericon} />
          </div>
        </div>
      </div>
    </section>
  </div>
)
export default Services
