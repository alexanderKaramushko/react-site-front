import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import Header from './components/organisms/Header/Header.component';
import store from './store/store';
import { createRoutes, routesArr } from './routes/routes';

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                {createRoutes(routesArr)}
            </Switch>
        </Router>
    </Provider>
);

export default App;
