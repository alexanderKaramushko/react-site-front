import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { getActiveTheme } from '../../../store/reducers/settings/selectors';
import { StateProps, DispatchProps, OwnProps } from './ListItem.types';
import ListItem from './ListItem.component';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        theme: getActiveTheme(state),
    }),
)(ListItem);
