import React from 'react';
import { Form } from 'react-router-dom';
import { TheInput } from '../TheInput';

export const SearchForm = ({ q, searching, submit }) => {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-2 px-4 py-2">
      <Form
        id="search-form"
        role="search">
        <TheInput
          id="q"
          label={'Search'}
          aria-label="Search users"
          placeholder="Search"
          type="search"
          name="search_username"
          defaultValue={q}
          isIcon
          showLoader={searching}
          onChange={event => {
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
        />
      </Form>
    </div>
  );
};
