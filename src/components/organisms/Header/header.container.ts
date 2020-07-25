import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setLocaleWithFallback } from '../../../localization';
import Header from './Header.component';

import { RootState } from '../../../store/reducers/rootReducer';
import { toggleThemeAction } from '../../../store/reducers/settings/actions';
import { StateProps, DispatchProps, OwnProps } from './Header.types';
import { getSelectedLocale, getActiveTheme } from '../../../store/reducers/settings/selectors';
import { Themes } from '../../../common/settings';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        selectedLocale: getSelectedLocale(state),
        theme: getActiveTheme(state),
    }),
    (dispatch: Dispatch) => ({
        setLocaleWithFallback: setLocaleWithFallback(dispatch),
        toggleTheme: (themeName: Themes) => dispatch(toggleThemeAction(themeName)),
    }),
)(Header);
