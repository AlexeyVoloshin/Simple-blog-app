import { handleRequest } from './utils/handleRequest';
import cors from 'cors';
import express from 'express';
const path = require('path');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../dist/')));
app.get(/\.(js|css|map|ico)$/, express.static('../dist/'));

app.use('*', handleRequest);

const listener = app.listen('3000', () => {
  let { port } = listener.address();
  console.log(`HTTP server is running at http://localhost:${port}`);
});
