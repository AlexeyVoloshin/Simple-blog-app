import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return (
    <div className="container">
      <div id="error-page">
        <h1 className="mb-7 text-center">Oops!</h1>
        <p className="text-lg mb-5">Sorry, an unexpected error has occurred.</p>
        <p className="text-center text-stone-300 ">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
