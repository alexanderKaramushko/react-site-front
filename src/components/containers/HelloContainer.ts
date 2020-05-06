import { connect } from 'react-redux';
import { changeMessage } from '../../store/test/actions';
import Hello from '../Hello';
import { RootState } from '../../store';
import { testMessage } from '../../store/test/types';

const mapStateToProps = (state: RootState) => state.test;

const mapDispatchToProps = (dispatch: any, ownProps: testMessage) => {
    return {
        onClick: () => {
            dispatch(changeMessage(ownProps.message));
        },
    };
};

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default HelloContainer;
