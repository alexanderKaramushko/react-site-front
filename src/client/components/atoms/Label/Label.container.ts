import { connect } from 'react-redux';
import Label from './Label.component';
import { getActiveTheme } from '../../../store/reducers/settings/selectors';
import { RootState } from '../../../store/reducers/rootReducer';
import { StateProps, DispatchProps, OwnProps } from './Label.types';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        theme: getActiveTheme(state),
    }),
)(Label);
