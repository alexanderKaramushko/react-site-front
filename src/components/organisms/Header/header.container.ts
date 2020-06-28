import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getActiveTheme, getSelectedLocale } from '../../../selectors/settingsSelectors';
import { setLocaleWithFallback } from '../../../localization';
import Header from './header.component';

import { RootState } from '../../../reducers';
import { toggleThemeAction } from '../../../actions/settings/actions';
import { ThemeType } from '../../../common/settings';

type mapDispatchReturn = {
    setLocaleWithFallback: (desiredLocale: string) => void;
    toggleTheme: (themeName: ThemeType) => ThemeAction;
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchReturn => ({
    setLocaleWithFallback: setLocaleWithFallback(dispatch),
    toggleTheme: (themeName: ThemeType) => dispatch(toggleThemeAction(themeName)),
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
