import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div className="container">
      <p>This is a Template page.</p>
      <br />
      <div className="text-slate-300 text-gray-700">
        <Link
          className="text-base underline decoration-3"
          to="/">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
