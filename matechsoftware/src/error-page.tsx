import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error))
    return (
      <div id="error-page">
        <h1>Fehler</h1>
        <p>
          Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten:{' '}
          {error.status} {error.statusText}
        </p>
      </div>
    );

  return (
    <div id="error-page">
      <h1>Fehler</h1>
      <p>Entschuldigen Sie, ein unerwarteter Fehler ist aufgetreten.</p>
    </div>
  );
}
