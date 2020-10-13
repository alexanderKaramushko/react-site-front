import React, { FC } from 'react';
import { Translate } from 'react-redux-i18n';
import { Typography } from '@material-ui/core';
import template from '../templates/default/style.scss';
import ErrorHandler from '../Errors/ErrorHandler/ErrorHandler.component';
import Paragraph from '../atoms/Paragraph/Paragraph.component';
import Button from '../atoms/Button/Button';
import { Clickable } from '../atoms/Clickable/Clickable.component';
import { Variants } from '../atoms/Button/Button.types';

const Main: FC = () => (
    <section
        className={template.wrap}
    >
        <div className={template.default}>
            <ErrorHandler>
                <Typography component="h1">
                    <Translate value="nav.main.title" />
                </Typography>
                <Paragraph><Translate value="nav.main.description" /></Paragraph>
                <Clickable>
                    <Button variant={Variants.OUTLINED}><Translate value="ui.button" /></Button>
                </Clickable>
            </ErrorHandler>
        </div>
    </section>
);

export default Main;
