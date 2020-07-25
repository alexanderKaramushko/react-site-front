import { Themes } from '../../../common/settings';

export interface OwnProps {
    children: React.ReactNode;
    size?: string;
    theme?: Themes;
}

export interface StateProps {
    theme?: Themes;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
