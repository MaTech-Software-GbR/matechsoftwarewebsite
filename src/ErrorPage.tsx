import React from "react"
import { Link, useNavigate } from "react-router-dom"

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div id="error-page">
      <section className="s-home page-hero target-section" id="home">
        <div className="overlay" />
        <div className="shadow-overlay" />

        <div className="home-content">
          <div className="row">
            <h1>Diese Seite existiert nicht</h1>

            <Link onClick={() => navigate("/")} to={"/"}>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
