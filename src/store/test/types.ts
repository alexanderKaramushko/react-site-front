export interface testMessage {
    message: string;
}

export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

interface ChangeMessageAction {
    type: typeof CHANGE_MESSAGE;
    payload: testMessage['message'];
}

export type messageActionTypes = ChangeMessageAction;
