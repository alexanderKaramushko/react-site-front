import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';
import { store } from './store';
import { routesArr, createRoutes } from './routes';
import Header from './components/organisms/Header/header.container';

const ThemeContext = React.createContext('');

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <Router>
            <ThemeContext.Provider value={store.getState().themeReducer}>
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
            </ThemeContext.Provider>
        </Router>
    </Provider>
);

export default App;
