import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserDetails } from '../components/UserDetails';
import { fetchData } from '../actions';

export const UserPage = () => {
  let { user } = useLoaderData();

  return <UserDetails {...user} />;
};

async function loader({ params }) {
  const user = await fetchData('users', params.id);
  return { user };
}

export default { loader, Layout: UserPage };
