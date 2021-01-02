import React, { FC } from 'react';
import { Translate } from 'react-redux-i18n';
import { Button, Typography } from '@material-ui/core';
import template from '../templates/default/style.scss';
import ErrorHandler from '../Errors/ErrorHandler/ErrorHandler.component';

const Main: FC = () => (
    <section
        className={template.wrap}
    >
        <div className={template.default}>
            <ErrorHandler>
                <Typography component="h1">
                    <Translate value="nav.main.title" />
                </Typography>
                <Typography component="p"><Translate value="nav.main.description" /></Typography>
                <Button variant="outlined"><Translate value="ui.button" /></Button>
            </ErrorHandler>
        </div>
    </section>
);

export default Main;
