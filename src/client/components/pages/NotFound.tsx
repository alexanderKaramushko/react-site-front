import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

const NotFound: FC<RouteComponentProps> = (props) => {
    const { staticContext } = props;

    staticContext.statusCode = 404;

    return (
        <h1>
            Page not found!
        </h1>
    );
};

export default NotFound;
