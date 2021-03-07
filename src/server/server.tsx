import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import App from '../client/App';
import store from '../client/store/store';
import render from './render';
import getTheme from '../client/utils/getTheme';

const server = express();

server.use(express.static('build'));

server.get('*', (req, res) => {
  const sheets = new ServerStyleSheets();
  const theme = getTheme();
  const context = {} as StaticRouterContext;

  const app = renderToString(
    sheets.collect(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StaticRouter>
      </Provider>,
    ),
  );

  if (context.statusCode === 404) {
    res.status(404);
  }

  const css = sheets.toString();

  res.send(render({ app, css }));
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Example app listening on port 3000!'));
