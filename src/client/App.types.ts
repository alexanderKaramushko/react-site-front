import { ThemeTypes } from './store/reducers/settings/types';

export type OwnProps = {};

export interface StateProps {
    activeTheme?: ThemeTypes;
    textSize: number;
}

export type DispatchProps = {}

export type Props = OwnProps & StateProps & DispatchProps;
