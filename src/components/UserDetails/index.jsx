import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../common/routes/navigate';
import { Link } from 'react-router-dom';
import Icons from '../Icons';

export const UserDetails = ({ id, name, username, email, url = '' }) => {
  return (
    <div className="h-full flex flex-col ">
      <div className="px-8 py-6 flex space-x-7">
        <div className="rounded-2xl  h-[150px] w-[150px] bg-stone-600/60">
          {url ? (
            <img
              className=""
              src="#"
              alt="avatar"
            />
          ) : (
            <Icons.PlaceholderIcon />
          )}
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="styles.userName">{name}</p>
            <p className="text-regal-blue font-medium text-lg">{username}</p>
            <p className="font-medium text-sm italic">{email}</p>
          </div>
          <div className="flex space-x-4">
            <Link
              to={ROUTES.dynamic.userPosts(id)}
              relative="path"
              preventScrollReset={true}
              className="btn-primary text-regal-blue font-medium text-sm capitalize">
              posts
            </Link>

            <Link
              to={ROUTES.dynamic.userAlbums(id)}
              relative="path"
              preventScrollReset={true}
              className="btn-primary text-regal-blue font-medium text-sm capitalize">
              albums
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  url: PropTypes.string,
};
