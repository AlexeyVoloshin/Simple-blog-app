import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  matchRoutes,
} from 'react-router-dom';
import routes from '../server/routes';
import './styles.css';

let lazyMatches = matchRoutes(routes, window.location)?.filter(
  m => m.route.lazy
);

if (lazyMatches && lazyMatches?.length > 0) {
  await Promise.all(
    lazyMatches.map(async m => {
      let routeModule = await m.route.lazy();
      Object.assign(m.route, {
        ...routeModule,
        lazy: undefined,
      });
    })
  );
}

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  },
});

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <RouterProvider
    router={router}
    fallbackElement={null}
  />
);
