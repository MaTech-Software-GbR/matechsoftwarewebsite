import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
const ServiceBox = React.lazy(() => import("../components/ServiceBox"))
import iconwebdesign from "../images/services/undraw_complete_design_re_h75h.svg"
import icondomain from "../images/services/undraw_domain_names_re_0uun.svg"
import iconrechtstexte from "../images/services/undraw_gdpr_-3-xfb.svg"
import iconicon from "../images/services/undraw_hiring_re_yk5n.svg"
import iconemail from "../images/services/undraw_personal_email_re_4lx7.svg"
import iconserver from "../images/services/undraw_server_cluster_jwwq.svg"
import iconwebentwicklung from "../images/services/undraw_static_assets_rpm6.svg"
import iconseo from "../images/services/undraw_web_search_re_efla.svg"

const Services: React.FC = () => {
  const boxesReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const boxes = boxesReference.current

    /**
     * @returns The amount of pixels the boxes should be scrolled.
     */
    function getScrollAmount() {
      const container = document.querySelector(".boxes-window") as HTMLElement
      if (!container) {
        return 0
      }
      const style = window.getComputedStyle(container)
      const marginLeft = Number.parseFloat(style.marginLeft) || 0
      const marginRight = Number.parseFloat(style.marginRight) || 0
      const containerWidth = container
        ? container.offsetWidth + marginLeft + marginRight
        : 0
      return -(boxes!.scrollWidth - containerWidth)
    }

    const tween = gsap.to(boxes, {
      duration: 3,
      ease: "none",
      x: getScrollAmount
    })

    const end = () => `+=${getScrollAmount() * -1}`

    ScrollTrigger.create({
      animation: tween,
      end: end,
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
            <div className="col-twelve">
              <h3>Leistungen</h3>
              <h1>Von der Idee zur fertigen Website.</h1>
              <p className="lead">
                Bei uns findest du alles, was du für einen herausragenden
                Webauftritt brauchst – von maßgeschneiderten Eigenentwicklungen
                bis hin zu einem CMS. Alles aus einer Hand, persönlich und
                unkompliziert.
              </p>
            </div>
          </div>
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
                <ServiceBox imgAlt="HTML" imgSrc={icondomain} name="Domain" />
                <ServiceBox imgAlt="HTML" imgSrc={iconemail} name="Email" />
                <ServiceBox imgAlt="HTML" imgSrc={iconseo} name="SEO" />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconicon}
                  name="Logo-, Icon- und Visitenkartendesign"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconrechtstexte}
                  name="Rechtstexte"
                />
                {/* <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconserver}
                  name="Website-Wartung"
                />
                <ServiceBox
                  imgAlt="HTML"
                  imgSrc={iconanalytics}
                  name="Analytics"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Services
