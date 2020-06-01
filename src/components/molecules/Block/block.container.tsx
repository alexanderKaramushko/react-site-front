import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { numberRequestStartAction } from '../../../actions';
import { Block } from './block.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

const mapStateToProps = ({ numberCollectionReducer }: any) => ({
    clicks: numberCollectionReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
