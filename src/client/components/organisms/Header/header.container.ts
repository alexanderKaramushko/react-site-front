import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from './Header.component';
import { RootState } from '../../../store/reducers/rootReducer';
import { StateProps, DispatchProps, OwnProps } from './Header.types';
import { getSelectedLocale } from '../../../store/reducers/settings/selectors';
import { setLocaleWithFallback } from '../../../localization';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        selectedLocale: getSelectedLocale(state),
    }),
    (dispatch: Dispatch) => ({
        setLocaleWithFallback: setLocaleWithFallback(dispatch),
    }),
)(Header);
