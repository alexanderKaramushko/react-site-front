import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StateProps, DispatchProps, OwnProps } from './Header.types';
import { ThemeTypes } from '../../../store/reducers/settings/types';

import { RootState } from '../../../store/reducers/rootReducer';
import { getActiveTheme, getSelectedLocale, getTextSize } from '../../../store/reducers/settings/selectors';
import { setLocaleWithFallback } from '../../../localization';
import { toggleTextSizeAction, toggleThemeAction } from '../../../store/reducers/settings/actions';

import Header from './Header.component';

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
