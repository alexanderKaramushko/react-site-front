import React, { FC, ReactNode } from 'react';
import { Props } from './DefaultError.types';
import * as styles from './styles.scss';
import Fade from '../../transitions/Fade/Fade';

export const DefaultError: FC<Props> = (props) => {
    const { error } = props;

    return (
        <Fade renderChildren={(handleClose: () => void): ReactNode => (
            <div className={styles.errorPopup}>
                <div className={styles.close}>
                    {/* <CloseIcon onClick={handleClose} className={styles.closeIcon} width="20px" /> */}
                </div>
                <div className={styles.title}>
                    {error.name}
                </div>
                <div className={styles.message}>{error.message}</div>
            </div>
        )}
        />
    );
};
