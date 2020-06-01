import * as React from 'react';
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

type Props = {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    size?: string;
    theme?: string;
    type?: any;
};

const defaultProps = {
    type: ButtonType.BUTTON,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => {},
    className: '',
    disabled: false,
};

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const { children, className, disabled, onClick, size, theme, type } = props;
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
