import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createRoutes, routesArr } from './routes/routes';
import NotFound from './components/pages/NotFound';
// eslint-disable-next-line import/no-unresolved
import Header from './components/organisms/Header/Header.container';

const App: FC = () => (
    <>
        <Header />
        <Switch>
            {createRoutes(routesArr)}
            <Route component={NotFound} />
        </Switch>
    </>
);

export default App;
