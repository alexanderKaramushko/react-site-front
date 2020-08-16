import { ReactNode, ElementType } from 'react';
import { Themes } from '../../../common/settings';

export enum ButtonSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum ButtonShapes {
    STRAIGHT = 'straight',
    ROUNDED = 'rounded',
}

export enum ButtonTypes {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button',
}

export type OwnProps = {
    children: ReactNode;
    Icon?: ElementType;
    onClick?: () => void;
    primary?: boolean;
    secondary?: boolean;
    shape?: ButtonShapes;
    size?: ButtonSizes;
    type?: ButtonTypes;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
