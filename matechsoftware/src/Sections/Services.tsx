import React from "react"
import Image from "next/image"

const Services: React.FC = () => {
  return (
    <div>
      <section id="services" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Leistungen</h3>
            <h1>In guten Händen.</h1>
            <p className="lead">
              Willkommen bei uns! Wir sind hier, um Ihnen zu helfen und Ihnen
              eine maßgeschneiderte Lösung zu bieten, die genau auf Ihre
              Bedürfnisse zugeschnitten ist. Wir verstehen, dass jedes Projekt
              einzigartig ist und wir sind voller Begeisterung, Ihnen zu zeigen,
              wie wir Ihnen helfen können.
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
                  Erstellung einer modernen und ansprechenden Website mit
                  Content Management System (z.B. WordPress) oder individueller
                  Programmierung. So stellen wir sicher, dass Ihre Website
                  perfekt zu Ihrem Unternehmen passt.
                </p>
              </div>

              <div className="service">
                <h3>Webhosting</h3>
                <p>
                  Wir übernehmen die sichere und zuverlässige Bereitstellung
                  Ihrer Website auf unseren Servern. Backups und regelmäßige
                  Wartung sorgen dafür, dass Ihre Website immer reibungslos
                  läuft.
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
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="HTML 5 Logo"
                  src="/images/technologies/html-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  alt="Bootstrap 4 Logo"
                  src="/images/technologies/bootstrap-4-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  alt="C# Logo"
                  src="/images/technologies/c-sharp-programming-language-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  alt="Typescript Logo"
                  src="/images/technologies/typescript-programming-language-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="400"
                  alt=".NET Logo"
                  src="/images/technologies/microsoft-dot-net-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  alt="Python Logo"
                  src="/images/technologies/python-programming-language-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  alt="javalogo"
                  src="/images/technologies/java-programming-language-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="700"
                  alt="JavaScript Logo"
                  src="/images/technologies/javascript-programming-language-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="800"
                  alt="csslogo"
                  src="/images/technologies/css-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="900"
                  alt="Wordpress Logo"
                  src="/images/technologies/wordpress-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  alt="MySQL Logo"
                  src="/images/technologies/mysql-icon.png"
                />
              </div>
              <div className="leistungen">
                <Image
                  width={80}
                  height={80}
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  alt="SQL Server Logo"
                  src="/images/technologies/sql-server-icon.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Services
