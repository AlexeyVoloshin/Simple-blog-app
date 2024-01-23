import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Render.module.css';

export const BodyItem = ({ text }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <div className={styles.typography}>
        <p
          className={clsx(
            'normal-case font-medium',
            styles.lineClamp,

            {
              [styles.show]: isCollapse,
            }
          )}>
          {text}
        </p>
      </div>
      <p
        role="button"
        onClick={() => setIsCollapse(!isCollapse)}
        className="hover:text-regal-blue underline  decoration-3 cursor-pointer">
        {isCollapse ? 'hide more' : 'show more'}
      </p>
    </>
  );
};
