// @ts-nocheck
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../client/App';
import store from '../client/store/store';

const server = express();

server.use(express.static('build/client'));

server.set('view engine', 'ejs');
server.set('views', './src/server/views');

server.get('*', (req, res) => {
    const context = {};

    const app = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>,
    );

    if (context.statusCode === 404) {
        res.status(404);
    }

    res.render('index', { app });
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Example app listening on port 3000!'));
