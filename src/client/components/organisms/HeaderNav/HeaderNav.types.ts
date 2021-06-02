import { ToggleTextSize, ToggleTheme } from '@store/reducers/settings/actions.types';
import { ThemeTypes } from '@store/reducers/settings/types';

export type OwnProps = {}

export interface StateProps {
    selectedLocale?: string;
    activeTheme?: ThemeTypes;
    textSize?: number;
}

export interface DispatchProps {
    setLocaleWithFallback?: (desiredLocale: string) => void;
    setTheme?: ToggleTheme;
    changeSize?: ToggleTextSize;
}

export type Props = OwnProps & StateProps & DispatchProps;
