import { ReactNode } from 'react';
import { Themes } from '../../../common/settings';

export enum CardSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum CardShapes {
    STRAIGHT = 'straight',
    ROUNDED = 'rounded',
}

export interface OwnProps {
    actions?: ReactNode[];
    children: ReactNode;
    imgSrc?: string;
    overline?: string;
    shape?: CardShapes;
    size?: CardSizes;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
