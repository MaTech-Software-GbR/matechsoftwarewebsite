import React from 'react';
import gasthausschmidimage from '../images/references/GasthausSchmid.webp';
import rehalogo from '../images/references/reha-logo.webp';
import thaihauslogo from '../images/references/thaihaus.webp';
import matechlaptoplogo from '../images/references/matechlaptop.webp';
import gutriedbichllogo from '../images/references/Logo_Gut_Riedbichl_quadrat.webp';
import jbmlogo from '../images/references/jbm-logo.webp';

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
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.jbm-visuals.de"
                    title="JBM Visuals"
                    data-size="1450x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="JBM Visuals Logo" src={jbmlogo} />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">JBM Visuals</h3>
                      <p className="item-folio__cat">Konzept, Hosting</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.thai-haus-feldkirchen.de"
                    title="Thai Haus Restaurant"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Thaihaus Restaurant Logo" src={thaihauslogo} />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">
                        Thai Haus Restaurant
                      </h3>
                      <p className="item-folio__cat">
                        Konzept, Design, Hosting, Logo
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.rehazentrum-riedbichl.de"
                    title="Reha-Zentrum Riedbichl"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Rehazentrum Riedbichl Logo" src={rehalogo} />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">
                        Reha-Zentrum Riedbichl
                      </h3>
                      <p className="item-folio__cat">
                        Konzept, Design, Hosting, Logo
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.gasthaus-schmid.de"
                    title="Gut Riedbichl"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Gasthaus Schmid Logo" src={gasthausschmidimage} />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">Gasthaus Schmid</h3>
                      <p className="item-folio__cat">
                        Konzept, Design, Hosting
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.gut-riedbichl.de"
                    title="Gut Riedbichl"
                    data-size="1450x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Gut Riedbichl Logo" src={gutriedbichllogo} />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">Gut Riedbichl</h3>
                      <p className="item-folio__cat">
                        Konzept, Design, Hosting
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://github.com/matechsoftware/reactwebsite"
                    title="MaTech Website"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="MaTech Software Website"
                      src={matechsoftwarescreenshot}
                    />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">
                        MaTech Software Website
                      </h3>
                      <p className="item-folio__cat">
                        Konzept, Design, Hosting, Logo
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href="/#contact" title="Ihr Projekt" data-size="1050x700">
                    <img
                      alt="Matech Software Laptop mit Smartphone Logo"
                      src={matechlaptoplogo}
                    />
                    <span className="shadow-overlay"></span>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title">Ihr Projekt</h3>
                      <p className="item-folio__cat">...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;
