import React, { FC } from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { Props, Variants } from './Button.types';
import { Sizes } from '../../../common/UITypes';

const defaultProps = {
    size: Sizes.MEDIUM,
    type: Variants.TEXT,
};

const Button: FC<Props> = (props) => {
    const {
        children,
        disabled,
        onClick,
        size,
        variant,
    } = props;

    return (
        <MaterialButton
            disabled={disabled}
            onClick={onClick}
            size={size}
            variant={variant}
        >
            {children}

        </MaterialButton>
    );
};

Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export default Button;
