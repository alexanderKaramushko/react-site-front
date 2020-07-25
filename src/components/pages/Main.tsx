import React from 'react';
import '../_settings/_base.scss';
import ErrorHandler from '../Errors/ErrorHandler/ErrorHandler.component';

const Main: React.FunctionComponent = () => (
    <>
        <ErrorHandler>
            <h1>Главная</h1>
        </ErrorHandler>
    </>
);

export default Main;
