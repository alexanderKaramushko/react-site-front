import React, { FC } from 'react';
import { Props } from './DefaultError.types';
import * as styles from './styles.scss';

export const DefaultError: FC<Props> = (props) => {
  const { error } = props;

  return (
    <div className={styles.errorPopup}>
      <div className={styles.close}>
        {/* <CloseIcon onClick={handleClose} className={styles.closeIcon} width="20px" /> */}
      </div>
      <div className={styles.title}>
        {error.name}
      </div>
      <div className={styles.message}>{error.message}</div>
    </div>
  );
};
