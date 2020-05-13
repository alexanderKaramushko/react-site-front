import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { numberRequestStartAction } from '../../../actions';
import Block from './block.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

export const BlockContainer = connect(null, mapDispatchToProps)(Block);
