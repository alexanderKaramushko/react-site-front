import React, { FC } from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';
import {
    Props, ButtonSizes, ButtonShapes, ButtonTypes,
} from './Button.types';

const defaultProps = {
    shape: ButtonShapes.ROUNDED,
    size: ButtonSizes.MEDIUM,
    type: ButtonTypes.BUTTON,
};

const Button: FC<Props> = (props) => {
    const {
        children, onClick, shape, size, theme, type,
    } = props;
    const classProps = classnames([styles.button, styles[size], styles[shape], styles[theme]]);

    return (
        /* eslint-disable react/button-has-type */
        <div>
            <button onClick={onClick} type={type} className={classProps}>
                {children}
            </button>
        </div>
    );
};

Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export default Button;
