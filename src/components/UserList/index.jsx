import React, { Suspense } from 'react';
import { Loading } from '../../components/Loading';
import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../../common/routes/navigate';
import {fetchData} from '../../actions';

import './UserList.styles.scss';

export const UsersList = ({ users }) => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {users.map(user => (
          <li key={user.id}>
            <Link to={ROUTES.dynamic.userDetails(user.id)}>
              <div className={styles.content}>
                <p className={styles.title}>{user.name}</p>
                <div className={styles.buttons}></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

async function loader({ request }) {
  let users;
  const url = new URL(request.url);

  const q = url.searchParams.get('search_username');
  const sort = url.searchParams.get('sort');

  if (q) {
    users = await fetchData(`users?username_like=^${q}`);
  } else if (sort) {
    users = await fetchData(`users?_sort=username&_order=${sort}`);
  } else {
    users = await fetchData('users');
  }

  return { users, q };
}

export default {
  component: UsersList,
  loader,
};