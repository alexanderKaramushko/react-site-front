import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import ThemeHOC from './utils/ThemeHOC/ThemeHOC';

import App from './App';

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
