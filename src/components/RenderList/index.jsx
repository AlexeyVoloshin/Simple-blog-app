import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Render.css';

export const RenderList = ({ data = [] }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <ul
      role="list"
      className="w-full max-w-[600px]">
      {data?.map(item => (
        <li
          key={item.id}
          className="list p-2 border-regal-blue  border-b">
          <p className="normal-case font-medium">{item.title}</p>
          {item.body && (
            <>
              <br />
              <p
                className={clsx('line-clamp  normal-case font-medium', {
                  ['show']: isCollapse,
                })}>
                {item.body}
              </p>
              <p
                role="button"
                onClick={() => setIsCollapse(!isCollapse)}
                className="hover:text-regal-blue underline  decoration-3 cursor-pointer">
                {isCollapse ? 'hide more' : 'show more'}
              </p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

RenderList.propTypes = {
  data: PropTypes.array.isRequired,
};
