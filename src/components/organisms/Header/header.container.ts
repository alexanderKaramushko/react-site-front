import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getActiveTheme } from '../../../selectors/settingsSelectors';
import { ThemeAction } from '../../../common';
import { toggleThemeAction } from '../../../actions';
import { setLocaleWithFallback } from '../../../localization';

import Header from './header.component';
import { ThemeType } from '../../../common/settings';
import { RootState } from '../../../reducers';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLocaleWithFallback: setLocaleWithFallback(dispatch),
    toggleTheme: (themeName: ThemeType): ThemeAction => dispatch(toggleThemeAction(themeName)),
});

const mapStateToProps = (state: RootState) => ({
    selectedLocale: state.i18n.locale,
    theme: getActiveTheme(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
