import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../common/routes/navigate';
import clsx from 'clsx';

export const UsersList = ({ users }) => {
  return (
    <div className="col-start-1 row-start-3 px-4 py-2 ">
      <div className="overflow-hidden">
        <ul
          role="list"
          className="overflow-auto p-2  h-[560px]">
          {users?.map(user => (
            <NavLink
              key={user.id}
              to={ROUTES.dynamic.userDetails(user.id)}
              preventScrollReset={true}>
              {({ isActive }) => (
                <li
                  className={clsx(
                    'text-base cursor-pointer my-2 p-2 rounded-md    ',
                    {
                      ['bg-simple-blue text-[#fff]']: isActive,
                      ['hover:bg-simple-blue hover:text-[#fff] hover:translate-x-0.5']:
                        !isActive,
                    }
                  )}>
                  {user.username}
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default {
  Layout: UsersList,
};
