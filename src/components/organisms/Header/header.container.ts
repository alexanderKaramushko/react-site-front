import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getActiveTheme, getSelectedLocale } from '../../../selectors/settingsSelectors';
import { ThemeAction } from '../../../common';
import { toggleThemeAction } from '../../../actions';
import { setLocaleWithFallback } from '../../../localization';

import Header from './header.component';
import { ThemeType } from '../../../common/settings';
import { RootState } from '../../../reducers';

type mapDispatchReturn = {
    setLocaleWithFallback: (desiredLocale: string) => void;
    toggleTheme: (themeName: ThemeType) => ThemeAction;
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchReturn => ({
    setLocaleWithFallback: setLocaleWithFallback(dispatch),
    toggleTheme: (themeName: ThemeType): ThemeAction => dispatch(toggleThemeAction(themeName)),
});

type MapStateReturn = {
    selectedLocale: string;
    theme: ThemeType;
}

const mapStateToProps = (state: RootState): MapStateReturn => ({
    selectedLocale: getSelectedLocale(state),
    theme: getActiveTheme(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
