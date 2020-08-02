import { ReactNode } from 'react';
import { Themes } from '../../../common/settings';

export type OwnProps = {
    children: ReactNode;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
