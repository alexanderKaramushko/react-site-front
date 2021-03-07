import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';
import ThemeHOC from './utils/ThemeHOC/ThemeHOC';

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
