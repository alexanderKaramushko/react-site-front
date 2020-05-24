import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
    BrowserRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';

import { routesArr, createRoutes } from './routes';
import { rootReducer } from './store';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Главная</Link>
                    </li>
                    <li>
                        <Link to='/about-us'>О нас</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Контакты</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                {createRoutes(routesArr)}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
);