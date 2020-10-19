import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// eslint-disable-next-line import/no-unresolved
import Header from './Header.component';
// eslint-disable-next-line import/no-unresolved
import { StateProps, DispatchProps, OwnProps } from './Header.types';
import { RootState } from '../../../store/reducers/rootReducer';
import { getActiveTheme, getSelectedLocale, getTextSize } from '../../../store/reducers/settings/selectors';
import { setLocaleWithFallback } from '../../../localization';
import { toggleTextSizeAction, toggleThemeAction } from '../../../store/reducers/settings/actions';
import { ThemeTypes } from '../../../store/reducers/settings/types';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        activeTheme: getActiveTheme(state),
        selectedLocale: getSelectedLocale(state),
        textSize: getTextSize(state),
    }),
    (dispatch: Dispatch) => ({
        changeSize: (size: number): ReturnType<typeof toggleTextSizeAction> => dispatch(toggleTextSizeAction(size)),
        setLocaleWithFallback: setLocaleWithFallback(dispatch),
        setTheme: (theme: ThemeTypes): ReturnType<typeof toggleThemeAction> => dispatch(toggleThemeAction(theme)),
    }),
)(Header);
