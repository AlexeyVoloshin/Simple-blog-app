import React from 'react';
import { Link } from 'react-router-dom';
export default function NoMatch() {
  return (
    <div className="container">
      <p className="text-center">Nothing to see here!</p>
      <br />
      <div className="text-base ">
        <Link
          className="underline decoration-3 decoration-[#b6e4f8]"
          to="/">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
