import { ReactNode } from 'react';
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
    onClick?: () => void;
    shape?: ButtonShapes;
    size?: ButtonSizes;
    type?: ButtonTypes;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
