import { CHANGE_MESSAGE, messageActionTypes, testMessage } from './types';

const initialState: testMessage = {
    message: 'Max!',
};

export function testReducer(
    state = initialState,
    action: messageActionTypes,
): testMessage {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}
