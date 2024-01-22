import React from 'react';

import ErrorPage from '../src/pages/ErrorPage';
import IndexPage from '../src/pages/IndexPage';
import NoMatch from '../src/pages/NoMatch';
import App from '../src/components/App';

const routes = [
  {
    path: '/',
    element: <App.Layout />,
    errorElement: <ErrorPage />,
    loader: App.loader,
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: 'users/:id/',
        async lazy() {
          let {
            default: { Layout, loader },
          } = await import('../src/pages/UserPage');
          return { Component: Layout, loader };
        },
        errorElement: <ErrorPage />,
      },
      {
        path: 'users/:id/posts',
        errorElement: <ErrorPage />,
        async lazy() {
          let {
            default: { Layout, loader },
          } = await import('../src/pages/PostsPage');
          return { Component: Layout, loader };
        },
      },
      {
        path: 'users/:id/albums',
        errorElement: <ErrorPage />,
        async lazy() {
          let {
            default: { Layout, loader },
          } = await import('../src/pages/AlbumsPage');
          return { Component: Layout, loader };
        },
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
];

export default routes;
