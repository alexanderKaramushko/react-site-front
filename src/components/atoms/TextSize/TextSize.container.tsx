import { connect } from 'react-redux';
import TextSize from './TextSize.component';
import { getActiveTheme, getTextSize } from '../../../store/reducers/settings/selectors';
import { toggleTextSizeAction } from '../../../store/reducers/settings/actions';
import { RootState } from '../../../store/reducers/rootReducer';
import { DispatchProps, OwnProps, StateProps } from './TextSize.types';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
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
