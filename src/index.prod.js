import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes';
import "./styles.css"

const container = document.getElementById('app');
ReactDOM.hydrateRoot(
    container,
    <RouterProvider router={router} />
);