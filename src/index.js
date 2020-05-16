import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
    BrowserRouter  as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';

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
                <Route path='/about-us'>
                    <AboutUs />
                </Route>
                <Route path='/contacts'>
                    <Contacts />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
