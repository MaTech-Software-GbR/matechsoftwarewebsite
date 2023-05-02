import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  contactName: string;
  contactEmail: string;
  contactSubject?: string;
  contactMessage: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const message = {
      message: `sender: ${data.contactEmail} message: ${data.contactMessage}`,
    };
    console.log(JSON.stringify(message));
    fetch('http://127.0.0.1:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <section id="contact" className="s-contact target-section">
        <div className="overlay"></div>

        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Kontakt</h3>
            <h1>Wir sind für Sie da!</h1>

            <p className="lead">
              Ob Sie eine kurze Beratung oder einen aufwendigen Projektauftrag
              benötigen, zögern Sie nicht uns zu kontaktieren. Wir stehen Ihnen
              mit unserem Fachwissen und unserer Expertise zur Verfügung. Melden
              Sie sich bei uns und lassen Sie uns gemeinsam Ihre Ziele
              erreichen.
            </p>
          </div>
        </div>

        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
            >
              <fieldset>
                <div className="form-field">
                  <input
                    {...register('contactName', {
                      required: true,
                      minLength: 2,
                    })}
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    minLength={2}
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    {...register('contactEmail', { required: true })}
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Email"
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                  {errors.contactEmail && <span>This field is required</span>}
                </div>
                <div className="form-field">
                  <input
                    {...register('contactSubject')}
                    type="text"
                    id="contactSubject"
                    placeholder="Betreff"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    {...register('contactMessage', { required: true })}
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                    cols={50}
                    className="full-width"
                  ></textarea>
                  {errors.contactMessage && <span>This field is required</span>}
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
