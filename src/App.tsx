import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import {
    BrowserRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';
import { routesArr, createRoutes } from './routes';

const App: React.FunctionComponent = () => {
    return (
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
        </Provider>
    );
};

export default App;
