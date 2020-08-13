import { Themes } from '../../../common/settings';

export type OwnProps = {};

export interface StateProps {
    theme?: Themes;
    size?: number;
}

export type DispatchProps = {
    changeSize?: (newSize: number) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;
