import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThemeAction } from '../../../common';
import { toggleThemeAction } from '../../../actions';
import { setLocaleWithFallback } from '../../../localization';

import Header from './header.component';
import { ThemeType } from '../../../common/settings';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLocaleWithFallback: setLocaleWithFallback(dispatch),
    toggleTheme: (themeName: ThemeType): ThemeAction => dispatch(toggleThemeAction(themeName)),
});

const mapStateToProps = ({ i18n, themeReducer }: any) => ({
    selectedLocale: i18n.locale,
    themeName: themeReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
