import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BodyItem } from './BodyItem';
import clsx from 'clsx';
import styles from './Render.module.css';

export const RenderList = ({ data = [] }) => {
  return (
    <ul
      role="list"
      className="w-full max-w-[600px]">
      {data?.map(item => (
        <li
          key={item.id}
          className="list p-2 border-regal-blue  border-b">
          <p className={clsx('normal-case font-medium', styles.typography)}>
            {item.title}
          </p>
          <br />
          {item.body && <BodyItem text={item.body} />}
        </li>
      ))}
    </ul>
  );
};

RenderList.propTypes = {
  data: PropTypes.array.isRequired,
};
