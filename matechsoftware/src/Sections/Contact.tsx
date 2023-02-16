import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <section id="contact" className="s-contact target-section">
        <div className="overlay"></div>

        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Kontakt</h3>
            <h1>Melden Sie sich bei uns.</h1>

            <p className="lead">
              Ob für eine kurze Beratung oder einen aufwendigen Projektauftrag,
              kontaktieren Sie uns gerne.
            </p>
          </div>
        </div>

        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form name="contactForm" id="contactForm" method="post" action="">
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    value=""
                    minLength={2}
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Email"
                    value=""
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Betreff"
                    value=""
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                    cols={50}
                    required={true}
                    aria-required="true"
                    className="full-width"
                  ></textarea>
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Absenden</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            <div className="message-warning">
              Something went wrong. Please try again.
            </div>

            <div className="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>
          <div className="col-four tab-full contact__infos">
            <h4 className="h06">Email</h4>
            <p>kontakt@matech-software.de</p>

            <h4 className="h06">Adresse</h4>
            <p>
              MaTech Software GbR
              <br />
              Enzianweg 8<br />
              83052 Bruckmühl
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
