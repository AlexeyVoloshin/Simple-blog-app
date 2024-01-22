import * as React from 'react';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import resolve from './resolve';
import fsp from 'fs/promises';
import ReactDOMServer from 'react-dom/server';
import routes from '../routes';

const createFetchRequest = require('./request');

const handler = createStaticHandler(routes);

export async function handleRequest(req, res) {
  let fetchRequest = createFetchRequest(req);
  let context = await handler.query(fetchRequest);
  try {
    if (
      context instanceof Response &&
      [301, 302, 303, 307, 308].includes(context.status)
    ) {
      return res.redirect(context.status, context.headers.get('Location'));
    }

    let router = createStaticRouter(handler.dataRoutes, context);

    let appHTML = ReactDOMServer.renderToString(
      <StaticRouterProvider
        router={router}
        context={context}
      />
    );

    let template = await fsp.readFile(resolve('../../dist/index.html'), {
      encoding: 'utf8',
    });

    const html = template.replace('<!--app-html-->', appHTML);

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Server error');
  }
}
