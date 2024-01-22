import React from 'react';
import PropTypes from 'prop-types';

const PlaceholderIcon = ({ w, h }) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gray-600 rounded-full text-simple-blue/40`}>
      <svg
        className="absolute w-32 h-32 text-gray-400 left-2/4 -ml-16"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"></path>
      </svg>
    </div>
  );
};

PlaceholderIcon.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
};

export default PlaceholderIcon;
