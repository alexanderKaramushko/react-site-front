import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

const NotFound: FC<RouteComponentProps> = (props) => {
  const { staticContext } = props;

  if (staticContext) {
    staticContext.statusCode = 404;
  }

  return (
    <h1>404</h1>
  );
};

export default NotFound;
