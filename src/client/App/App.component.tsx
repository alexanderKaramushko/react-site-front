import React, { FC } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Props } from './types';

import HistoryWrapper from '@utils/historyWrapper';
import { createRoutes, routes } from '@routes/routes';

import NotFound from '@components/pages/NotFound';
import HeaderNavContainer from '@components/organisms/HeaderNav/HeaderNav.container';

const App: FC<Props> = ({ decodedJWTToken }) => {
  HistoryWrapper.initHistory(useHistory());

  return (
    <>
      <HeaderNavContainer />
      <Switch>
        {createRoutes(routes, {
          role: [decodedJWTToken?.role],
        })}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
