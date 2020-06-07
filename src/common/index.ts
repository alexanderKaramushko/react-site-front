import { ThemeType } from './settings';

export const actionIds = {
    GET_NUMBER_REQUEST_COMPLETED:
        '[1] NumberGenerator async service returned a new number.',
    GET_NUMBER_REQUEST_START:
        '[0] Request a new number to the NumberGenerator async service.',
    TOGGLE_THEME: 'TOGGLE_THEME',
};

export interface BaseAction {
    type: string;
    payload: null | number;
}

export interface ThemeAction {
    type: typeof actionIds.TOGGLE_THEME;
    payload: ThemeType;
}
