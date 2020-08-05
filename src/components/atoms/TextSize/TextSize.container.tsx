import { connect } from 'react-redux';
import TextSize, { StateProps, DispatchProps } from './TextSize.component';
import { getActiveTheme, getTextSize } from '../../../store/reducers/settings/selectors';
import { toggleTextSizeAction } from '../../../store/reducers/settings/actions';
import { RootState } from '../../../store/reducers/rootReducer';

export default connect<StateProps, DispatchProps, {}, RootState>(
    (state) => ({
        size: getTextSize(state),
        theme: getActiveTheme(state),
    }),
    (dispatch) => ({
        changeSize: (newSize: number): void => {
            dispatch(toggleTextSizeAction(newSize));
        },
    }),
)(TextSize);
