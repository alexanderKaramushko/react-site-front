import React from 'react';
import classnames from 'classnames';

import * as styles from './style.scss';

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
};

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
};

export const ButtonSize = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

interface Props {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    size?: string;
    theme?: string;
    // TODO: incompatible types
    type?: any;
}

const defaultProps = {
    className: '',
    disabled: false,
    onClick: (): void => undefined,
    size: ButtonSize.MEDIUM,
    theme: ButtonTheme.DEFAULT,
    type: ButtonType.BUTTON,
};

const Button: React.FunctionComponent<Props> = (props) => {
    const {
        children, className, disabled, onClick, size, theme, type,
    } = props;
    const classProps: string = classnames(
        styles.button,
        styles[theme],
        styles[size],
        {
            [styles.disabled]: disabled,
        },
        className,
    );

    return (
    // eslint-disable-next-line react/button-has-type
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classProps}
        >
            {children}
        </button>
    );
};

Button.defaultProps = defaultProps;

export default Button;
