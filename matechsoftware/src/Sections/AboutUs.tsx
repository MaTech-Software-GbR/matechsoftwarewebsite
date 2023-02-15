import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      <section id="blog" className="s-blog target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Über uns</h3>
            <h1>Hier erfährst Du was uns ausmacht.</h1>
            <p className="lead">
              Lorem ipsum Dolor adipisicing nostrud et aute. Excepteur amet
              commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco
              proident aliquip quis qui voluptate dolore veniam Ut laborum non
              est in officia.
            </p>
          </div>
        </div>

        <div className="row about-content about-content--timeline">
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h3>Maximilian Gobbel</h3>
                  <h5>Fachgebiet: Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <li>
                    <a href="#0">
                      <i className="im im-linkedin" aria-hidden="true"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="im im-mail" aria-hidden="true"></i>
                      <span>Email</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-six tab-full right illustration">
            <img src={require('../images/imagemaxi.png')} />
          </div>
        </div>
        <div className="row">
          <div className="col-six tab-full left illustration">
            <img src={require('../images/imagemanuel.png')} />
          </div>
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h3>Manuel Kühnle</h3>
                  <h5>Fachgebiet: Wirtschaft und Technik</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>

                <ul className="footer-social ueber-uns">
                  <li>
                    <a href="#0">
                      <i className="im im-linkedin" aria-hidden="true"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="im im-mail" aria-hidden="true"></i>
                      <span>Email</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s-cta">
        <div className="row narrow cta">
          <div className="col-full cta__content">
            <h2 className="h01">Du willst eine Beratung von uns?</h2>

            <p className="lead">Wir freuen uns über Deine Kontaktanfrage.</p>

            <div className="cta__action">
              <a className="btn btn--primary btn--large" href="#contact">
                Jetzt kontaktieren
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
