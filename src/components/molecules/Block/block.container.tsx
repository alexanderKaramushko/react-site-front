import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { numberRequestStartAction } from '../../../actions';
import { Block } from './block.component';
import { BaseAction } from '../../../common';
import { RootState } from '../../../reducers';

interface DispatchToPropsReturn {
    onRequestNewNumber: () => BaseAction;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsReturn => ({
    onRequestNewNumber: (): BaseAction => dispatch(numberRequestStartAction()),
});

interface StateToProps {
    clicks: number[];
}

const mapStateToProps = (state: RootState): StateToProps => ({
    clicks: state.numberCollectionReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
