import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createRoutes, routes } from './routes/routes';
import { Role } from './common/types/client';
import NotFound from './components/pages/NotFound';
// eslint-disable-next-line import/no-unresolved
import Header from './components/organisms/Header/Header.container';

const App: FC = () => {
  const roleFromToken = Role.PUBLIC;

  return (
    <>
      <Header />
      <Switch>
        {createRoutes(routes, { role: [roleFromToken] })}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
