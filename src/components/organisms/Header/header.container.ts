import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getActiveTheme, getSelectedLocale } from '../../../selectors/settingsSelectors';
import { setLocaleWithFallback } from '../../../localization';
import Header from './header.component';

import { RootState } from '../../../reducers';
import { toggleThemeAction } from '../../../actions/settings/actions';
import { ThemeType } from '../../../common/settings';
import { StateProps, DispatchProps, OwnProps } from './header.types';
import { getUsersAsync } from '../../../actions/users/actions';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        selectedLocale: getSelectedLocale(state),
        theme: getActiveTheme(state),
    }),
    (dispatch: Dispatch) => ({
        getUsers: () => dispatch(getUsersAsync.request(null, null)),
        setLocaleWithFallback: setLocaleWithFallback(dispatch),
        toggleTheme: (themeName: ThemeType): any => dispatch(toggleThemeAction(themeName)),
    }),
)(Header);
