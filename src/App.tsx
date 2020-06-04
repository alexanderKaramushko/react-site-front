import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';
import { store } from './store';
import { routesArr, createRoutes } from './routes';
import Header from './components/organisms/Header';

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/about-us">О нас</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                {createRoutes(routesArr)}
            </Switch>
        </Router>
    </Provider>
);

export default App;
