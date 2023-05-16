import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormData } from '../models/contactform.interface';

const Contact: React.FC = () => {
  const [showSuccessfulSent, setshowSuccessfulSent] = useState<boolean>(false);
  const [showNotSuccessfulSent, setshowNotSuccessfulSent] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>();

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/api/getCsrfToken.php');
      const token = await response.text();
      setCsrfToken(token);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  const sendMail = async (formData: FormData) => {
    try {
      const response = await fetch('/api/sendEmail.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        if (data === 'OK') {
          setshowSuccessfulSent(true);
        } else {
          setshowNotSuccessfulSent(true);
        }
      } else {
        setshowNotSuccessfulSent(true);
      }
    } catch (error) {
      setshowNotSuccessfulSent(true);
    }

    // Clear the error message after 3 seconds
    setTimeout(() => {
      setshowSuccessfulSent(false);
      setshowNotSuccessfulSent(false);
    }, 3000);
  };

  const onSubmit: SubmitHandler<ContactFormData> = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append('contactName', data.contactName);
    formData.append('contactEmail', data.contactEmail);
    formData.append('contactSubject', data.contactSubject);
    formData.append('contactMessage', data.contactMessage);
    formData.append('csrf_token', csrfToken);
    sendMail(formData);
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
                      maxLength: 100,
                    })}
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                {errors.contactName?.type === 'required' && (
                  <p role="alert">
                    Ihr Name ist ein Pflichtfeld und muss mindestens 2 Zeichen
                    haben.
                  </p>
                )}
                <div className="form-field">
                  <input
                    {...register('contactEmail', { required: true })}
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Ihre Email"
                    aria-required="true"
                    className="full-width"
                  />
                  {errors.contactEmail?.type === 'required' && (
                    <p role="alert">
                      Ihre Email ist ein Pflichtfeld und muss einem E-Mail
                      Format entsprechen.
                    </p>
                  )}
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
                    {...register('contactMessage', {
                      required: true,
                      maxLength: 500,
                      minLength: 15,
                    })}
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                    cols={50}
                    className="full-width"
                  ></textarea>
                  {errors.contactMessage && (
                    <span>
                      Ihre Nachricht ist ein Pflichtfeld und muss zwischen 15
                      und 500 Zeichen haben.
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <button
                    className="full-width btn--primary"
                    disabled={isSubmitting}
                  >
                    Absenden
                  </button>
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
            {/* After submittion, check status, if its successful, print a green sign if not a red. */}
            {showSuccessfulSent ? (
              <div className="message-success">
                Ihre Nachricht wurde versendet. Vielen Dank!
              </div>
            ) : (
              <div></div>
            )}
            {showNotSuccessfulSent ? (
              <div className="message-warning">
                Das hat leider nicht funktioniert. Versuchen Sie es noch einmal
                oder wenden Sie sich telefonisch an uns!
              </div>
            ) : (
              <div></div>
            )}
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
