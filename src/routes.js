import React from 'react';

import ErrorPage from './pages/ErrorPage';

import UsersList from './components/UserList';
import IndexPage from './pages/IndexPage';
import NoMatch from './pages/NoMatch';
import { App } from './components/App';
import { createBrowserRouter } from 'react-router-dom';
// import UserInfo from './components/UserInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: UsersList.loader,
    children: [
      { index: true, element: <IndexPage /> },
    //   {
    //     path: 'users/:id',
    //     element: <UserInfo.component />,
    //     errorElement: <ErrorPage />,
    //     loader: UserInfo.loader,
    //   },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);


