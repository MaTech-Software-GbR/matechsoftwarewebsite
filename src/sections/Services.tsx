import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
const ServiceBox = React.lazy(() => import("../components/ServiceBox"))
const Logo = React.lazy(() => import("../components/Logo"))
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
import mobileview from "../images/Untitled.png"
import iconwebentwicklung from "../images/services/undraw_static_assets_rpm6.svg"
import iconwebdesign from "../images/services/undraw_complete_design_re_h75h.svg"
import iconrechtstexte from "../images/services/undraw_gdpr_-3-xfb.svg"
import iconseo from "../images/services/undraw_web_search_re_efla.svg"
import iconanalytics from "../images/services/undraw_heatmap_uyye.svg"
import iconserver from "../images/services/undraw_server_cluster_jwwq.svg"

const Services: React.FC = () => {
  const boxesReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const races = boxesReference.current

    function getScrollAmount() {
      return -(races!.scrollWidth - window.innerWidth)
    }

    const tween = gsap.to(races, {
      duration: 3,
      ease: "none",
      x: getScrollAmount
    })

    ScrollTrigger.create({
      animation: tween,
      end: () => `+=${getScrollAmount() * -1}`,
      invalidateOnRefresh: true,
      markers: false,
      pin: true,
      scrub: 1,
      start: "top 14%",
      trigger: ".boxesWrapper"
    })
    return () => {
      tween.kill()
      for (const trigger of ScrollTrigger.getAll()) trigger.kill()
    }
  }, [])

  return (
    <div>
      <section className="s-about target-section" id="services">
        <div className="boxesWrapper">
          <div className="row narrow section-intro has-bottom-sep">
            {/* <div className="col-four tab-full technologies">
              <div className="flex flex-wrap justify-center">
                <Logo alt="HTML 5 Logo" delay="100" src={htmlicon} />
                <Logo alt="Bootstrap 4 Logo" delay="200" src={bootstrapicon} />
                <Logo alt="C# Logo" delay="300" src={csharpicon} />
                <Logo alt="Typescript Logo" delay="400" src={typescripticon} />
                <Logo alt=".NET Logo" delay="500" src={dotneticon} />
                <Logo alt="Python Logo" delay="600" src={pythonicon} />
              </div>
            </div> */}
            <div className="col-twelve">
              <h3>Leistungen</h3>
              <h1>Von der Idee zur fertigen Website.</h1>
              <p className="lead">
                Bei uns findest du alles, was du für einen herausragenden
                Webauftritt brauchst – von maßgeschneiderten Eigenentwicklungen
                bis hin zu einem Content Management System. Alles aus einer
                Hand, persönlich und unkompliziert.
              </p>
            </div>
            {/* <div className="col-four">
              <img className="mobileimage" src={mobileview} />
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-four">
              <img className="mobileimage" src={mobileview} />
            </div>
          </div> */}
          <div className="row">
            <div className="boxes-window col-twelve">
              <div className="boxes" ref={boxesReference}>
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconwebdesign}
                  name="Webdesign"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconwebentwicklung}
                  name="Webentwicklung"
                />
                <ServiceBox imgAlt="HTML" imgSrc={iconserver} name="Hosting" />
                <ServiceBox imgAlt="HTML" imgSrc={iconserver} name="Domain" />
                <ServiceBox imgAlt="HTML" imgSrc={iconserver} name="Email" />
                <ServiceBox imgAlt="HTML" imgSrc={iconseo} name="SEO" />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconserver}
                  name="Website-Wartung"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconanalytics}
                  name="Analytics"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconserver}
                  name="Logo-, Icon- und Visitenkartendesign"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconrechtstexte}
                  name="Rechtstexte"
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
