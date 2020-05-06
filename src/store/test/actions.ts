import { CHANGE_MESSAGE, messageActionTypes, testMessage } from './types';

export function changeMessage(
    newMessage: testMessage['message'],
): messageActionTypes {
    return {
        type: CHANGE_MESSAGE,
        payload: newMessage,
    };
}
