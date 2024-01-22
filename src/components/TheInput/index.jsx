import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icons from '../Icons';

export const TheInput = ({
  label,
  isIcon = false,
  showLoader = false,
  className = '',
  ...props
}) => {
  const InputIcon = showLoader ? Icons.SpinIcon : Icons.SearchIcon;
  return (
    <label className="block ">
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <div className="relative">
        {
          <span
            id="search-spinner"
            aria-hidden
            className="text-[#b6e4f8] absolute top-[50%] mt-[-10px] px-1"
            hidden={!isIcon}>
            {<InputIcon />}
          </span>
        }
        <input
          className={clsx(
            'mt-1 block w-full px-3 py-2 bg-white border box-border rounded-md text-sm shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ',
            className,
            {
              ['pl-10']: isIcon,
            }
          )}
          {...props}
        />
      </div>
    </label>
  );
};

TheInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  showLoader: PropTypes.bool,
  isIcon: PropTypes.bool,
};
