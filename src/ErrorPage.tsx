import React from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage: React.FC = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <section id="home" className="s-home page-hero target-section">
          <div className="overlay" />
          <div className="shadow-overlay" />

          <div className="home-content">
            <div className="row">
              <h1>
                Fehler <br />
                Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten:{" "}
                {error.status} {error.statusText}
              </h1>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div id="error-page">
      <h1>Fehler</h1>
      <p>Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten.</p>
    </div>
  )
}

export default ErrorPage
