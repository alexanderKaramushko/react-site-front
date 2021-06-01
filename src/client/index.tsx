import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import decodeJwt from 'jwt-decode';

import ThemeHOC from './utils/ThemeHOC/ThemeHOC';
import { getAccessToken } from './api/utils';

import store from './store/store';
import { authenticateAsync } from './store/reducers/authentication/actions';

import App from './App/App.container';

const accessToken = getAccessToken();

if (accessToken) {
  store.dispatch(authenticateAsync.success(decodeJwt(accessToken)));
}

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeHOC>
        <App />
      </ThemeHOC>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
