import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { getActiveTheme } from '../../../selectors';
import ListItem from './ListItem.component';

const mapStateToProps = (state: RootState): { theme: string } => ({
    theme: getActiveTheme(state),
});

export default connect(mapStateToProps)(ListItem);
