import React, { useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"

import { type ContactFormData } from "../models/ContactFormData.Interface"

/**
 * Sends an email with the input from the form to the backend
 * @param formData Email, Name, Subject and Message
 * @returns Promise that resolves to "success" or "error"
 */
const sendMail = async (formData: FormData): Promise<string> => {
  try {
    const response = await fetch("/api/sendEmail.php", {
      body: formData,
      method: "POST"
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
  const [showSuccessfulSent, setshowSuccessfulSent] = useState<boolean>(false)
  const [showNotSuccessfulSent, setshowNotSuccessfulSent] =
    useState<boolean>(false)
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register
  } = useForm<ContactFormData>()

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData
  ) => {
    const formData = new FormData()
    formData.append("contactName", data.contactName)
    formData.append("contactEmail", data.contactEmail)
    formData.append("contactSubject", data.contactSubject)
    formData.append("contactMessage", data.contactMessage)

    const result = await sendMail(formData)

    if (result === "success") {
      setshowSuccessfulSent(true)
    } else {
      setshowNotSuccessfulSent(true)
    }

    // Clear the error message after 3 seconds
    setTimeout(() => {
      setshowSuccessfulSent(false)
      setshowNotSuccessfulSent(false)
    }, 3000)
  }

  return (
    <div>
      <section className="s-contact target-section" id="contact">
        <div className="overlay" />

        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Kontakt</h3>
            <h1>Wir sind für dich da!</h1>

            <p className="lead">
              Ob du eine kurze Beratung oder einen aufwendigen Projektauftrag
              benötigst, zögere nicht uns zu kontaktieren. Wir stehen dir mit
              unserem Fachwissen und unserer Expertise zur Verfügung. Melde dich
              bei uns und lass uns gemeinsam deine Ziele erreichen.
            </p>
          </div>
        </div>

        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form
              action=""
              id="contactForm"
              method="post"
              name="contactForm"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset>
                <div className="form-field">
                  <input
                    {...register("contactName", {
                      maxLength: 100,
                      minLength: 2,
                      required: true
                    })}
                    aria-required="true"
                    className="full-width"
                    id="contactName"
                    name="contactName"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                {errors.contactName?.type === "required" && (
                  <p role="alert">
                    Dein Name ist ein Pflichtfeld und muss mindestens 2 Zeichen
                    haben.
                  </p>
                )}
                <div className="form-field">
                  <input
                    {...register("contactEmail", { required: true })}
                    aria-required="true"
                    className="full-width"
                    id="contactEmail"
                    name="contactEmail"
                    placeholder="Deine Email"
                    type="email"
                  />
                  {errors.contactEmail?.type === "required" && (
                    <p role="alert">
                      Deine Email ist ein Pflichtfeld und muss einem E-Mail
                      Format entsprechen.
                    </p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    {...register("contactSubject")}
                    className="full-width"
                    id="contactSubject"
                    placeholder="Betreff"
                    type="text"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    {...register("contactMessage", {
                      maxLength: 500,
                      minLength: 15,
                      required: true
                    })}
                    className="full-width"
                    cols={50}
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                  />
                  {errors.contactMessage != undefined && (
                    <span>
                      Deine Nachricht ist ein Pflichtfeld und muss zwischen 15
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
            </form>
            {showSuccessfulSent ? (
              <div className="message-success">
                Deine Nachricht wurde versendet. Vielen Dank!
              </div>
            ) : (
              <div />
            )}
            {showNotSuccessfulSent ? (
              <div className="message-warning">
                Das hat leider nicht funktioniert. Versuche es bitte erneut.
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
