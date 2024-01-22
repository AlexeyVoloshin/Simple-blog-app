import React from 'react';
import { Form } from 'react-router-dom';
import clsx from 'clsx';

export const SortForm = ({ sort }) => {
  return (
    <div className="col-start-1 col-end-2 row-start-2 px-4 py-2">
      <Form
        id="search-form"
        type="radio"
        className="flex space-x-4">
        <button
          id="asc"
          type="submit"
          name="sort"
          value="asc"
          className={clsx(
            'btn-primary text-regal-blue font-medium text-sm capitalize',
            {
              ['bg-simple-blue text-main-white']: sort === 'asc',
            }
          )}>
          asc
        </button>
        <button
          id="desc"
          type="submit"
          name="sort"
          value="desc"
          className={clsx(
            'btn-primary text-regal-blue font-medium text-sm capitalize',
            {
              ['bg-simple-blue text-main-white']: sort === 'desc',
            }
          )}>
          {' '}
          desc
        </button>
      </Form>
    </div>
  );
};
