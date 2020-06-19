import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import Label from './Label.component';

const mapStateToProps = (state: RootState): { theme: string } => ({
    theme: state.settingsReducer.themeName,
});

export default connect(mapStateToProps)(Label);
