import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createRoutes, routesArr } from './routes/routes';
import NotFound from './components/pages/NotFound';
import Header from './components/organisms/Header/header.container';

const App: React.FunctionComponent = () => (
    <>
        <Header />
        <Switch>
            {createRoutes(routesArr)}
            <Route component={NotFound} />
        </Switch>
    </>
);

export default App;
