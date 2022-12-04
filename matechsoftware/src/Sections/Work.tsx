import React from 'react';

const Work: React.FC = () => {
  return (
    <div>
      <section id="works" className="s-works target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Referenzen</h3>
            <h1>Sieh Dir unsere letzten Projekte an.</h1>

            <p className="lead">
              Unsere bisherigen Projekte sind Websiten, umsetzt mit einem CMS.{' '}
            </p>
          </div>
        </div>

        <div className="row masonry-wrap">
          <div className="masonry">
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.thai-haus-feldkirchen.de"
                    title="Thai Haus Feldkirchen"
                    data-size="1050x700"
                  >
                    <img src="images/portfolio/reha-logo.jpg" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>

                <div className="item-folio__text">
                  <h3 className="item-folio__title">Thai Haus Feldkirchen</h3>
                  <p className="item-folio__cat">Konzept, Design, Hosting</p>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.rehazentrum-riedbichl.de"
                    title="Reha Zentrum Riedbichl"
                    data-size="1050x700"
                  >
                    <img src="images/portfolio/reha-logo.jpg" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>

                <div className="item-folio__text">
                  <h3 className="item-folio__title">Reha Zentrum Riedbichl</h3>
                  <p className="item-folio__cat">Konzept, Design, Hosting</p>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.rehazentrum-riedbichl.de"
                    title="Gut Riedbichl"
                    data-size="1050x700"
                  >
                    <img src="images/portfolio/reha-logo.jpg" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>

                <div className="item-folio__text">
                  <h3 className="item-folio__title">Gut Riedbichl</h3>
                  <p className="item-folio__cat">Branding</p>
                </div>
              </div>
            </div>

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.gasthaus-schmid.de"
                    title="Gasthaus Schmid"
                    data-size="1050x700"
                  >
                    <img src="images/portfolio/reha-logo.jpg" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>

                <div className="item-folio__text">
                  <h3 className="item-folio__title">Gasthaus Schmid</h3>
                  <p className="item-folio__cat">Branding</p>
                </div>
              </div>
            </div>
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="https://www.rehazentrum-riedbichl.de"
                    title="Lighthouse"
                    data-size="1050x700"
                  >
                    <img src="images/portfolio/reha-logo.jpg" />
                    <span className="shadow-overlay"></span>
                  </a>
                </div>

                <div className="item-folio__text">
                  <h3 className="item-folio__title">Ihr Projekt</h3>
                  <p className="item-folio__cat"></p>
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
