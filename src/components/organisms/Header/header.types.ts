import { ThemeType } from '../../../common/settings';

export type OwnProps = {}

export interface StateProps {
    selectedLocale: string;
    theme: ThemeType;
}

export interface DispatchProps {
    setLocaleWithFallback: (desiredLocale: string) => void;
    toggleTheme: (themeName: ThemeType) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;
