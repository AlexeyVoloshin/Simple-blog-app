import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <p id="zero-state">
      This is a demo for React Router.
      <br />
      Check out{' '}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      <br />
      <Link to="/">Go to the home page</Link>
    </p>
  );
}