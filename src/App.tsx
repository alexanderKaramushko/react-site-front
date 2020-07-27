import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import store from './store/store';
import { routesArr, createRoutes } from './routes/routes';
import Header from './components/organisms/Header/Header.component';

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
