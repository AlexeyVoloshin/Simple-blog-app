import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes';
import "./styles.css"

const container = document.getElementById('app');
ReactDOM.createRoot(container).render(
    <RouterProvider router={router} />
  );