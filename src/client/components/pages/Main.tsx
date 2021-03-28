import React, { FC } from 'react';
import { Translate } from 'react-redux-i18n';
import { Button, Typography } from '@material-ui/core';
import template from '../templates/default/style.scss';
import ErrorBoundary from '../Errors/ErrorBoundary/ErrorBoundary';

const Main: FC = () => (
  <section
    className={template.wrap}
  >
    <div className={template.default}>
      <ErrorBoundary componentName="Main">
        <Typography component="h1">
          <Translate value="nav.main.title" />
        </Typography>
        <Typography component="p"><Translate value="nav.main.description" /></Typography>
        <Button variant="outlined"><Translate value="ui.button" /></Button>
      </ErrorBoundary>
    </div>
  </section>
);

export default Main;
