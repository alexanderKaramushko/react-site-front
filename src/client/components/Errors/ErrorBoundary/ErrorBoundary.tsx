import React, { FC, ReactElement } from 'react';
import Catch from '../Catch/Catch';
import { Props } from './ErrorBoundary.types';

import styles from './style.module.scss';

const ErrorBoundary: FC<Props> = (props, error: Error | null): ReactElement => {
  const { children, componentName } = props;

  if (error) {
    return (
      <div className={styles.error}>
        <span>
          Что-то пошло не так в компоненте
          {' '}
          {componentName}
        </span>
      </div>
    );
  }
  return (
    <>
      {children}
    </>
  );
};

export default Catch(ErrorBoundary);
