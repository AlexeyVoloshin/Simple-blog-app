import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../common/routes/navigate';
import clsx from 'clsx';

export const UsersList = ({ users = [], sorting }) => {
  return (
    <div className="col-start-1 row-start-3 px-4 py-2">
      <div className="overflow-hidden">
        {users.length ? (
          <ul
            role="list"
            className={clsx('overflow-auto p-2  h-[560px]', {
              ['animate-pulse']: sorting,
            })}>
            {users?.map(user => (
              <NavLink
                key={user.id}
                to={ROUTES.dynamic.userDetails(user.id)}
                preventScrollReset={true}
                className={clsx({
                  ['pointer-events-none']: sorting,
                })}>
                {({ isActive }) => (
                  <li
                    className={clsx(
                      'text-base cursor-pointer my-2 p-2 rounded-md',
                      {
                        ['bg-simple-blue text-main-white']: isActive,
                        ['hover:bg-simple-blue hover:text-main-white hover:translate-x-0.5']:
                          !isActive,
                        ['noHover']: sorting,
                      }
                    )}>
                    {user.username}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        ) : (
          <p className="noItems">No users</p>
        )}
      </div>
    </div>
  );
};

export default {
  Layout: UsersList,
};
