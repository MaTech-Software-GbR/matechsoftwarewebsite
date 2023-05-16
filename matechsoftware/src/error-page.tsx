import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error))
    return (
      <div id="error-page">
        <section id="home" className="s-home page-hero target-section">
          <div className="overlay"></div>
          <div className="shadow-overlay"></div>

          <div className="home-content">
            <div className="row">
              <h1>
                Fehler <br />
                Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten:{' '}
                {error.status} {error.statusText}
              </h1>
            </div>
          </div>
        </section>
      </div>
    );

  return (
    <div id="error-page">
      <h1>Fehler</h1>
      <p>Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten.</p>
    </div>
  );
}
