import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '../server/routes';

import './styles.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
);
