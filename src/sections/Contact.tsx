import React, { useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
import { type ContactFormData } from "../models/ContactFormData.Interface"

/**
 * Fetches a new CSRF Token from the backend
 * Sends an email with the input from the form to the backend
 * @param {FormData} formData Email, Name, Subject and Message
 * @returns {Promise<string>} Promise that resolves to "success" or "error"
 */
async function sendMail(formData: FormData): Promise<string> {
  try {
    const response = await fetch("/api/sendEmail.php", {
      method: "POST",
      body: formData
    })

    if (response.status === 200) {
      const data = await response.text()
      return data === "OK" ? "success" : "error"
    }
    return "error"
  } catch {
    return "error"
  }
}

const Contact: React.FC = () => {
  const [csrfToken, setCsrfToken] = useState("")
  const [showSuccessfulSent, setshowSuccessfulSent] = useState<boolean>(false)
  const [showNotSuccessfulSent, setshowNotSuccessfulSent] =
    useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<ContactFormData>()

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData
  ) => {
    const formData = new FormData()
    formData.append("contactName", data.contactName)
    formData.append("contactEmail", data.contactEmail)
    formData.append("contactSubject", data.contactSubject)
    formData.append("contactMessage", data.contactMessage)
    formData.append("csrfToken", csrfToken)

    const result = await sendMail(formData)

    if (result === "success") {
      setshowSuccessfulSent(true)
    } else {
      setshowNotSuccessfulSent(true)
    }

    setCsrfToken(uuidv4())

    // Clear the error message after 3 seconds
    setTimeout(() => {
      setshowSuccessfulSent(false)
      setshowNotSuccessfulSent(false)
    }, 3000)
  }

  return (
    <div>
      <section id="contact" className="s-contact target-section">
        <div className="overlay" />

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
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
            >
              <fieldset>
                <div className="form-field">
                  <input
                    {...register("contactName", {
                      required: true,
                      minLength: 2,
                      maxLength: 100
                    })}
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                {errors.contactName?.type === "required" && (
                  <p role="alert">
                    Ihr Name ist ein Pflichtfeld und muss mindestens 2 Zeichen
                    haben.
                  </p>
                )}
                <div className="form-field">
                  <input
                    {...register("contactEmail", { required: true })}
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Ihre Email"
                    aria-required="true"
                    className="full-width"
                  />
                  {errors.contactEmail?.type === "required" && (
                    <p role="alert">
                      Ihre Email ist ein Pflichtfeld und muss einem E-Mail
                      Format entsprechen.
                    </p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    {...register("contactSubject")}
                    type="text"
                    id="contactSubject"
                    placeholder="Betreff"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    {...register("contactMessage", {
                      required: true,
                      maxLength: 500,
                      minLength: 15
                    })}
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                    cols={50}
                    className="full-width"
                  />
                  {errors.contactMessage != undefined && (
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
                    {isSubmitting ? "Lädt..." : "Absenden"}
                  </button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-field">
                <input type="hidden" name="csrfToken" value={csrfToken} />
              </div>
            </form>
            {showSuccessfulSent ? (
              <div className="message-success">
                Ihre Nachricht wurde versendet. Vielen Dank!
              </div>
            ) : (
              <div />
            )}
            {showNotSuccessfulSent ? (
              <div className="message-warning">
                Das hat leider nicht funktioniert. Versuchen Sie es bitte
                erneut.
              </div>
            ) : (
              <div />
            )}
          </div>
          <div className="col-four tab-full contact__infos">
            <h4 className="h06">Email</h4>
            <a
              href="mailto:kontakt@matech-software.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>kontakt@matech-software.de</span>
            </a>
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
  )
}
export default Contact
