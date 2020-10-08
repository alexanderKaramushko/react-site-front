import React, { FC } from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';
import {
    Props, ButtonSizes, ButtonShapes, ButtonTypes,
} from './Button.types';

const defaultProps = {
    primary: true,
    shape: ButtonShapes.ROUNDED,
    size: ButtonSizes.MEDIUM,
    type: ButtonTypes.BUTTON,
};

const Button: FC<Props> = (props) => {
    const {
        children,
        Icon,
        onClick,
        primary,
        secondary,
        shape,
        size,
        theme,
        type,
    } = props;
    const classProps = classnames([
        styles.button,
        styles[size],
        styles[shape],
        styles[theme],
        {
            [styles.primary]: primary && !secondary,
            [styles.secondary]: secondary,
        },
    ]);

    return (
        /* eslint-disable react/button-has-type */
        <button onClick={onClick} type={type} className={classProps}>
            {children}
            {Icon && <Icon />}
        </button>
    );
};

Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export default Button;
