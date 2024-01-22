import React, { useEffect, Suspense } from 'react';
import { fetchData } from '../../actions';
import { Loading } from '../Loading';

import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';

import ErrorBoundary from '../../common/ErrorBoundary';
import { TheFooter } from '../TheFooter';

import loadable from '@loadable/component';
import { SearchForm } from '../SearchForm';
import { SortForm } from '../SortForm';

const UsersList = loadable(() => import('../UsersList'), {
  resolveComponent: component => {
    let UsersList = component.default;
    return UsersList.Layout;
  },
});

export const App = () => {
  const { users, q, sort } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <main className="main grid grid-cols-layout-2 grid-rows-layout-4 gap-y-3 gap-x-8 bg-grayish-white text-black">
        <SearchForm
          q={q}
          searching={searching}
          submit={submit}
        />
        <SortForm sort={sort} />
        <Suspense fallback={<Loading />}>
          <UsersList users={users} />
        </Suspense>
        <div className="row-start-[-5] row-span-4  bg-main-white p-5">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
        <TheFooter />
      </main>
    </ErrorBoundary>
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

  return { users, q, sort };
}

export default {
  Layout: App,
  loader,
};
