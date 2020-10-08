// @ts-nocheck
import path from 'path';
import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

const server = express();

server.use(express.static('build'));

server.set('view engine', 'ejs');
server.set('views', './src/server/views');

server.get('/', (_, res) => {
    const app = renderToString(createElement(App));
    res.render('index', { app });
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Example app listening on port 3000!'));
