import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getActiveTheme, getSelectedLocale } from '../../../selectors/settingsSelectors';
import { setLocaleWithFallback } from '../../../localization';
import Header from './header.component';

import { RootState } from '../../../reducers';
import { toggleThemeAction } from '../../../actions/settings/actions';
import { ThemeType } from '../../../common/settings';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLocaleWithFallback: setLocaleWithFallback(dispatch),
    toggleTheme: (themeName: ThemeType) => dispatch(toggleThemeAction(themeName)),
});

const mapStateToProps = (state: RootState) => ({
    selectedLocale: getSelectedLocale(state),
    theme: getActiveTheme(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
